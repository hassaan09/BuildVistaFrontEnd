import { Component } from '@angular/core';
import { Navbar2Component } from "../../shared/navbar2/navbar2.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { Router,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-clientprofile',
  standalone: true,
  imports: [Navbar2Component, FooterComponent,RouterOutlet],
  templateUrl: './clientprofile.component.html',
  styleUrl: './clientprofile.component.css'
})
export class ClientprofileComponent {
  loginUser:any;
  constructor(private router: Router) {
    const storedUser = localStorage.getItem('User');
    if (storedUser !== null) {
      this.loginUser = JSON.parse(storedUser);
    }
  }
  navigateToClientform() {
    this.router.navigate(['/clientform'], { state: { updateProfile: true } });
  }
  
}
