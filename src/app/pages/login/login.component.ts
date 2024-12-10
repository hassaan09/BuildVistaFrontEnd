import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { Router,RouterOutlet} from "@angular/router"
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterOutlet,NavbarComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = ''; // Initialize the email property
  password: string= '';

  constructor(private router: Router) {}

  navigateToMaindashboard() {
    this.router.navigate(['/maindashboard']);
  }

}
