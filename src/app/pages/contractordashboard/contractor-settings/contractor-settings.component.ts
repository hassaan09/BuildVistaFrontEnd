import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router,RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { AppComponent } from '../../../app.component';
import { ContractorNavbarComponent } from "../contractor-navbar/contractor-navbar.component";
import { ProfileService } from '../../../services/profile/profile.service';

@Component({
  selector: 'app-contractor-settings',
  standalone: true,
  imports: [RouterOutlet, NgIf, FooterComponent, AppComponent, FormsModule, ContractorNavbarComponent,ReactiveFormsModule],
  templateUrl: './contractor-settings.component.html',
  styleUrl: './contractor-settings.component.css'
})
export class ContractorSettingsComponent {
    user:any = {
        username: 'John Doe',
        email: 'johndoe@example.com',
        contactNo: '123-456-7890'
      };
      changePasswordForm: FormGroup;
  
    constructor(private fb: FormBuilder,private router: Router, private profileService:ProfileService) {
      const storedUser = localStorage.getItem('User');
      if (storedUser !== null) {
        this.user = JSON.parse(storedUser);
      }
  
      this.changePasswordForm = this.fb.group({
        currentPassword: ['', [Validators.required]],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]]
      }, { validator: this.passwordMatchValidator });
    }

  navigateToContractorform() {
    this.router.navigate(['/contractorform'], { state: { updateProfile: true } });
  }


  notificationsEnabled = true; // Set default notification status
  isEditing = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveChanges() {
    // Save the updated user data (e.g., send to backend)
    console.log('Updated user data:', this.user);
    
    // Exit edit mode
    this.isEditing = false;
  }
  toggleNotifications() {
    // Logic to handle notification settings
    if (this.notificationsEnabled) {
      console.log("Notifications enabled.");
    } else {
      console.log("Notifications disabled.");
    }    
  }

  passwordMatchValidator(form: FormGroup) {
    const newPassword = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { mismatch: true };
  }

 // Submit handler
 onSubmit() {
  if (this.changePasswordForm.valid) {
    const { currentPassword, newPassword } = this.changePasswordForm.value;
    this.profileService.changePassword(currentPassword, newPassword).subscribe({
      next: () => {
        localStorage.clear();
        this.router.navigate(['/']);
        alert('Password updated successfully!');
        this.changePasswordForm.reset();
      },
      error: (error) => {
        console.error('Error updating password:', error);
        alert('Failed to update password. Please try again.');
      }
    });
  } else {
    alert('Please correct the errors in the form.');
  }
}
}
