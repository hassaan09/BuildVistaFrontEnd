import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { Router,RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar2',
  standalone: true,
  imports: [RouterOutlet,ButtonComponent,NgIf],
  templateUrl: './navbar2.component.html',
  styleUrl: './navbar2.component.css'
})
export class Navbar2Component {
  constructor(private router: Router){}
   navigateToClientprofile(){
    this.router.navigate(['/clientprofile']);
   }
   navigateToClientform(){
    this.router.navigate(['/clientform']);
   }
  navigateToNotification(){
    this.router.navigate(['/notification'])
  }
  isDropdownVisible: boolean = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  }

