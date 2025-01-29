import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { Router, RouterOutlet } from '@angular/router';
import { ButtonComponent } from "../../shared/button/button.component";
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { AppComponent } from '../../app.component';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ButtonComponent, NavbarComponent,AppComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router, private authService: AuthService) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/maindashboard']);
    }
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']).then(() => {
      // Ensure scroll position is reset to the top
      window.scrollTo(0, 0);
    });
  }
  
}
