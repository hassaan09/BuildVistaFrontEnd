import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar2Component } from "../../shared/navbar2/navbar2.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-maindashboard',
  standalone: true,
  imports: [NgFor,RouterOutlet, Navbar2Component, FooterComponent],
  templateUrl: './maindashboard.component.html',
  styleUrl: './maindashboard.component.css'
})
export class MaindashboardComponent {
  user:any;
  contractors:any;
   constructor(private profileService:ProfileService){}
 
   ngOnInit(): void {
     let storedUser = localStorage.getItem('User');
     if (storedUser !== null) {
       this.user = JSON.parse(storedUser);
     }
     this.fetchContractors();
   }
 
   fetchContractors(): void {
    this.profileService.listAllContractors().subscribe({
      next: (contractors) => {
        this.contractors = contractors;
      },
      error: (error) => {
        console.error('Error fetching contractors:', error);
      }
    });
  }
}
