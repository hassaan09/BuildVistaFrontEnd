import { Component } from '@angular/core';
import { Router,RouterOutlet} from '@angular/router';
import { Navbar2Component} from '../../shared/navbar2/navbar2.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AppComponent } from "../../app.component";
import { ProfileService } from '../../services/profile/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-findcontractor',
  standalone: true,
  imports: [Navbar2Component, FooterComponent, RouterOutlet, AppComponent, CommonModule],
  templateUrl: './findcontractor.component.html',
  styleUrl: './findcontractor.component.css'
})
export class FindcontractorComponent {
  constructor(private router: Router, private profileService:ProfileService) {}
  contractors: any[] = [];

  ngOnInit(): void {
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

  navigateToStartnewproject(companyId: string,) {
    this.router.navigate(['/startnewproject',companyId]);
  }
  navigateToVisitContractorProfile(companyId: string, contractorId: string): void {
    this.router.navigate(['/visitcontractorprofile', companyId], { queryParams: { contractorId: contractorId } });
  }
}
