import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { AppComponent } from "../../app.component";
import { CommonModule } from '@angular/common';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';

@Component({
  selector: 'app-termsandconditions',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, AppComponent, CommonModule,Navbar2Component],
  templateUrl: './termsandconditions.component.html',
  styleUrl: './termsandconditions.component.css'
})
export class TermsandconditionsComponent {
  loginUser:any;
  constructor(){
    const storedUser = localStorage.getItem('User');
    if (storedUser !== null) {
      this.loginUser = JSON.parse(storedUser);
    }
  }
}
