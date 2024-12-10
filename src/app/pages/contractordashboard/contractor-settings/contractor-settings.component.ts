import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterOutlet } from '@angular/router';
import { Navbar2Component } from '../../../shared/navbar2/navbar2.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { AppComponent } from '../../../app.component';
import { ContractorNavbarComponent } from "../contractor-navbar/contractor-navbar.component";

@Component({
  selector: 'app-contractor-settings',
  standalone: true,
  imports: [RouterOutlet, NgIf, FooterComponent, AppComponent, FormsModule, ContractorNavbarComponent],
  templateUrl: './contractor-settings.component.html',
  styleUrl: './contractor-settings.component.css'
})
export class ContractorSettingsComponent {
  constructor(private router: Router) {}
  navigateToContractorform() {
    this.router.navigate(['/contractorform']).then(() => {
      // Ensure scroll position is reset to the top
      window.scrollTo(0, 0);
    });
  }


  notificationsEnabled = true; // Set default notification status
  isEditing = false;
  
  // Example user data; in a real app, this would likely be fetched from a service
  user = {
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890'
  };

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
}
