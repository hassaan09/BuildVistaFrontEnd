import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { Router,RouterOutlet } from '@angular/router';
import { ButtonComponent } from "../../shared/button/button.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,RouterOutlet, NavbarComponent, FooterComponent, ButtonComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router: Router) {}

  navigateToClientform() {
    this.router.navigate(['/clientform']).then(() => {
      // Ensure scroll position is reset to the top
      window.scrollTo(0, 0);
    });
  }
  navigateToContractorform() {
    this.router.navigate(['/contractorform']).then(() => {
      // Ensure scroll position is reset to the top
      window.scrollTo(0, 0);
    });
  }
  signUp(data:object):void{
   console.warn(data)
  }

}
