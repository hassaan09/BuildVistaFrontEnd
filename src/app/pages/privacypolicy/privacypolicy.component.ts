import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';

@Component({
  selector: 'app-privacypolicy',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule,Navbar2Component],
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.css'
})
export class PrivacypolicyComponent {
  loginUser:any;
  constructor(){
    const storedUser = localStorage.getItem('User');
    if (storedUser !== null) {
      this.loginUser = JSON.parse(storedUser);
    }
  }
}
