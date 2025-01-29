import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar2Component } from "../../shared/navbar2/navbar2.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-clientform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, Navbar2Component, FooterComponent, RouterOutlet],
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.css']
})
export class ClientformComponent implements OnInit {
  clientForm!: FormGroup;
  registerFormData: any = {};
  selectedFile: File | null = null;
  updateProfile:boolean = false;
  imagePreview :any;
  loginUser:any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private profileService: ProfileService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.registerFormData = navigation?.extras.state?.['formData'] || {};
    this.updateProfile = navigation?.extras.state?.['updateProfile'] || false;
    console.log('Received data from state:', this.updateProfile);
    
  }

  ngOnInit(): void {
    // Initialize Reactive Form with default values and validation
    const storedUser = localStorage.getItem('User');
    let user
    if (storedUser !== null) {
      this.loginUser = JSON.parse(storedUser);
      if(this.loginUser.role == 'client'){
          user = this.loginUser;
      }else{
        this.updateProfile = false
      }
      this.selectedFile = user?.profile?.profilePic;
    }
    this.clientForm = this.fb.group({
      fullName: [this.updateProfile ? user?.username : this.registerFormData.fullname, {disabled: this.updateProfile }, Validators.required],
      contactNo: [this.updateProfile ? user?.contactNo : this.registerFormData.contactNo, [Validators.required, Validators.pattern(/^(\+92|0)?3\d{9}$/)]],
      cnic: [this.updateProfile ? user?.profile?.cnic : '', [Validators.required, Validators.pattern(/^\d{5}-\d{7}-\d{1}$/)]],
      email: [this.updateProfile ? user?.email : this.registerFormData.email, {disabled: this.updateProfile }, [Validators.required, Validators.email]],
      age: [this.updateProfile ? user?.profile?.age : null, [Validators.required, Validators.min(1), Validators.max(120)]],
      location: [this.updateProfile ? user?.profile?.location : '', Validators.required],
      address: [this.updateProfile ? user?.profile?.address : '', Validators.required],
      profilePic: [this.updateProfile ? user?.profile?.profilePic : null, Validators.required],
    });
    if (this.updateProfile) {
      this.clientForm.get('fullName')?.disable();
      this.clientForm.get('email')?.disable();
    } else {
      this.clientForm.get('fullName')?.enable();
      this.clientForm.get('email')?.enable();
    }
    
  }

  /**
   * Handle file input changes and set the selected file.
   */
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.clientForm.patchValue({ profilePic: file });
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string; // Use FileReader to generate a base64 URL
      };
      reader.readAsDataURL(file);
    }
  }

  /**
   * Handle form submission.
   */
  onSubmit(): void {
    if (this.clientForm.invalid) {
      this.clientForm.markAllAsTouched(); // Highlight invalid fields
      return;
    }

    const currentFormData = this.clientForm.value;
    const combinedPayload = { ...this.registerFormData, ...currentFormData };

    if (this.selectedFile && !this.updateProfile) {
      const formData = new FormData();
      Object.keys(combinedPayload).forEach((key) => {
        formData.append(key, combinedPayload[key]);
      });

      // Submit FormData to the API
      this.authService.registerClient(formData).subscribe({
        next: () => {
          alert('Client registered successfully!');
          console.log(this.clientForm.get('email')?.value);
          
          this.router.navigate(['/verify-otp'], { 
            queryParams: { userEmail: this.clientForm.get('email')?.value } 
          });          

        },
        error: (err) => {
          alert('Client registration failed: ' + err.message);
        },
      });
    } else if (this.selectedFile && this.updateProfile) {
      const formData = new FormData();

      const keysToInclude = ['email', 'fullName'];
      if (!this.imagePreview) {
        keysToInclude.push('profilePic');
      }

      Object.keys(combinedPayload).forEach((key) => {
        if (!keysToInclude.includes(key)) {
          formData.append(key, combinedPayload[key]);
        }
      });
      

      // Submit FormData to the API
      this.profileService.updateProfile(this.loginUser?.role,formData).subscribe({
        next: (res) => {
          // Get the user from localStorage
          const user = localStorage.getItem('User');

          if (user) {
            // Parse the user object
            const parsedUser = JSON.parse(user);

            // Update the profile object with the new response.profile data
            parsedUser.profile = res.profile;

            // Convert the updated object back to JSON and store it in localStorage
            localStorage.setItem('User', JSON.stringify(parsedUser));
          }
          alert('Profile Updated successfully!');
        },
        error: (err) => {
          alert('Profile Update failed: ' + err.message);
        },
      });
    } else {
      alert('Please upload a file before submitting!');
    }
  }
}
