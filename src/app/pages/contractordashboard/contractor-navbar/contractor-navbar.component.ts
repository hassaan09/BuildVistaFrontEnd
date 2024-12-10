import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { AppComponent } from "../../../app.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-contractor-navbar',
  standalone: true,
  imports: [RouterOutlet, AppComponent,ButtonComponent,NgIf],
  templateUrl: './contractor-navbar.component.html',
  styleUrl: './contractor-navbar.component.css'
})
export class ContractorNavbarComponent {
  constructor(private router: Router){}
  navigateToContractorprofile(){
   this.router.navigate(['/contractorprofile']);
  }
  navigateToContractorform(){
   this.router.navigate(['/contractorform']);
  }
  navigateToNotification(){
    this.router.navigate(['/notification']);}
 isDropdownVisible: boolean = false;

 toggleDropdown() {
   this.isDropdownVisible = !this.isDropdownVisible;
 }
}
