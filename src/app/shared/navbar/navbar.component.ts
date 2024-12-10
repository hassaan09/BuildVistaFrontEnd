import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonComponent } from "../button/button.component";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent { 
  constructor(private router: Router){}
   navigateToClientprofile(){
    this.router.navigate(['/clientprofile']);
   }
   navigateToClientform(){
    this.router.navigate(['/clientform']);
   }
  
  isDropdownVisible: boolean = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
