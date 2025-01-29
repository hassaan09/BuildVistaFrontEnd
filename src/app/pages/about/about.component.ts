import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent,CommonModule,Navbar2Component],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  showText: boolean = false;

  loginUser:any;
  constructor(){
    const storedUser = localStorage.getItem('User');
    if (storedUser !== null) {
      this.loginUser = JSON.parse(storedUser);
    }
  }
  
}
