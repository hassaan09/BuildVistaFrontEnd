import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { AppComponent } from "../../../app.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';


@Component({
  selector: 'app-contractor-navbar',
  standalone: true,
  imports: [RouterOutlet, AppComponent,ButtonComponent,NgIf],
  templateUrl: './contractor-navbar.component.html',
  styleUrl: './contractor-navbar.component.css'
})
export class ContractorNavbarComponent {
  constructor(private router: Router,  private authservice:AuthService){}
  navigateToContractorprofile(){
   this.router.navigate(['/contractorprofile']);
  }
  navigateToContractorform(){
   this.router.navigate(['/contractorform'], { state: { updateProfile: true } });
  }
  navigateToNotification(){
    this.router.navigate(['/notification']);}
 isDropdownVisible: boolean = false;

 toggleDropdown() {
   this.isDropdownVisible = !this.isDropdownVisible;
 }

 logout(){
  this.authservice.logout().subscribe({
    next: () => {
      this.router.navigate(['/login']);
      alert('Logout Success fully');
    },
    error: (err) => {
      alert('logout Failed failed: ' + err.message);
    },
  });
}
}
