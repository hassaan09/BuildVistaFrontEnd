import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar2Component } from '../../../shared/navbar2/navbar2.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ContractorNavbarComponent } from "../contractor-navbar/contractor-navbar.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';
import { ProfileService } from '../../../services/profile/profile.service';

@Component({
  selector: 'app-contractorform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, Navbar2Component, RouterOutlet, FooterComponent, ButtonComponent, ContractorNavbarComponent],
  templateUrl: './contractorform.component.html',
  styleUrls: ['./contractorform.component.css']
})
export class ContractorformComponent implements OnInit {
  contractorForm!: FormGroup;
  registerFormData: any = {};
  selectedFile: File | null = null;
  updateProfile: boolean = false;
  imagePreview: any;
  loginUser: any;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private profileService: ProfileService) {
    const navigation = this.router.getCurrentNavigation();
    this.registerFormData = navigation?.extras.state?.['formData'] || {};
    this.updateProfile = navigation?.extras.state?.['updateProfile'] || false;

  }

  ngOnInit(): void {
    // Initialize Reactive Form with default values
    const storedUser = localStorage.getItem('User');
    let user
    if (storedUser !== null) {
      this.loginUser = JSON.parse(storedUser);
      if (this.loginUser.role == 'contractor') {
        user = this.loginUser;
      } else {
        this.updateProfile = false
      }
      this.selectedFile = user?.profile?.profilePic;
    }

    this.contractorForm = this.fb.group({
      companyName: [this.updateProfile ? user?.profile?.companyName : '', Validators.required],
      priceWithMaterial: [this.updateProfile ? user?.profile?.priceWithMaterial : null, [Validators.required, Validators.min(0)]],
      priceWithoutMaterial: [this.updateProfile ? user?.profile?.priceWithoutMaterial : null, [Validators.required, Validators.min(0)]],
      profilePic: [this.updateProfile ? user?.profile?.profilePic : null, Validators.required],
      location: [this.updateProfile ? user?.profile?.location : '', Validators.required],
      description: [this.updateProfile ? user?.profile?.description : '', Validators.required],
    });
  }

  /**
   * Handle file input changes and set the selected file.
   */
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.contractorForm.patchValue({ profilePic: file });
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
    if (this.contractorForm.invalid) {
      this.contractorForm.markAllAsTouched();
      return;
    }

    const currentFormData = this.contractorForm.value;
    const combinedPayload = { ...this.registerFormData, ...currentFormData };

    if (this.selectedFile && !this.updateProfile) {
      const formData = new FormData();
      Object.keys(combinedPayload).forEach((key) => {
        formData.append(key, combinedPayload[key]);
      });
      console.log('okk');

      this.authService.registerContractor(formData).subscribe({
        next: () => {
          alert('registered sucessfully');
          this.router.navigate(['/verify-otp'], {
            queryParams: { userEmail: this.registerFormData.email }
          });

        },
        error: (err) => {
          alert('Registration verification failed: ' + err.message);
        },
      });

    } else if (this.selectedFile && this.updateProfile) {
      const formData = new FormData();

      const keysToInclude = ['email', 'fullName'];
      if (!this.imagePreview) {
        keysToInclude.push('profilePic');
      }

      Object.keys(currentFormData).forEach((key) => {
        if (!keysToInclude.includes(key)) {
          formData.append(key, currentFormData[key]);
        }
      });


      // Submit FormData to the API
      this.profileService.updateProfile(this.loginUser?.role, formData).subscribe({
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
