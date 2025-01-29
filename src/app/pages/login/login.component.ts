import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet,CommonModule,NavbarComponent,FooterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login(): void {
    if (this.email && this.password) {
      this.authService.login(this.email,this.password).subscribe({
        next: (response) => {
          this.router.navigate(['/maindashboard']);
        },
        error: (err) => {
          alert('Login failed: ' + err.message);
        },
      });
    } else {
      alert('Please enter both email and password');
    }
  }

  navigateToMaindashboard() {
    this.login();
  }
}
