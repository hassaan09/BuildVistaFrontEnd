import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AppComponent } from "../../app.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterOutlet,NgIf, Navbar2Component, FooterComponent, AppComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
    // Example user data; in a real app, this would likely be fetched from a service
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
  navigateToClientform() {
    if (this.user.role == 'client') {
      this.router.navigate(['/clientform'], { state: { updateProfile: true } });
    } else {
      this.router.navigate(['/contractorform'], { state: { updateProfile: true } });
    }
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
    
    // Save the setting if needed (e.g., call a service to update the backend)
  }

    // Custom validator to ensure newPassword and confirmPassword match
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
          alert('Password updated successfully!');
          localStorage.clear()
          this.changePasswordForm.reset();
          this.router.navigate(['/login'])
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
