import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContractorNavbarComponent } from '../contractor-navbar/contractor-navbar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { AppComponent } from '../../../app.component';
import { ProfileService } from '../../../services/profile/profile.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contractor-home',
  standalone: true,
  imports: [RouterOutlet,ContractorNavbarComponent,FooterComponent,AppComponent,NgFor
  ],
  templateUrl: './contractor-home.component.html',
  styleUrl: './contractor-home.component.css'
})
export class ContractorHomeComponent {
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
