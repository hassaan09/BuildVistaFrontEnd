import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/footer/footer.component";
import { AppComponent } from "../../../app.component";
import { Router,RouterOutlet } from '@angular/router';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ContractorNavbarComponent } from "../contractor-navbar/contractor-navbar.component";

@Component({
  selector: 'app-activeprojects',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, RouterOutlet, NgClass, FooterComponent, AppComponent, ButtonComponent, ContractorNavbarComponent],
  templateUrl: './activeprojects.component.html',
  styleUrl: './activeprojects.component.css'
})
export class ActiveprojectsComponent {
  constructor(private router: Router) {}
  navigateToProjectdashboard() {
    this.router.navigate(['/projectdashboard']).then(() => {
      // Ensure scroll position is reset to the top
      window.scrollTo(0, 0);
    });
  }
 // Sample projects data
 projects = [
  {
    name: 'Project Alpha',
    status: 'Planning',
    progress: 20 // Percentage of progress
  },
  {
    name: 'Project Beta',
    status: 'Ongoing',
    progress: 60
  },
  {
    name: 'Project Gamma',
    status: 'Near Completion',
    progress: 90
  }
];

// Method to handle "View Details" button click
viewProjectDetails(project: any) {
  console.log('Navigating to details for:', project.name);
  // Logic to navigate to the project details page can be added here
}
}
