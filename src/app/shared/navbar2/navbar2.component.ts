import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { Router,RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { RouterModule } from '@angular/router'; // Import RouterModule


@Component({
  selector: 'app-navbar2',
  standalone: true,
  imports: [RouterOutlet,ButtonComponent,NgIf,RouterModule],
  templateUrl: './navbar2.component.html',
  styleUrl: './navbar2.component.css'
})
export class Navbar2Component {
  loginUSer:any;
  constructor(private router: Router, private authservice:AuthService){
    const storedUser = localStorage.getItem('User');
    if (storedUser !== null) {
      this.loginUSer = JSON.parse(storedUser);      
    }
  }
   navigateToClientprofile(){
    if (this.loginUSer.role === 'contractor') {
      this.router.navigate(['/contractorprofile']);
    }
    this.router.navigate(['/clientprofile']);
   }
   navigateToClientform(){
    if (this.loginUSer.role === 'contractor') {
      this.router.navigate(['/contractorform'], { state: { updateProfile: true } });
    }
    this.router.navigate(['/clientform'], { state: { updateProfile: true } });
   }
  navigateToNotification(){
    this.router.navigate(['/notification'])
  }
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

