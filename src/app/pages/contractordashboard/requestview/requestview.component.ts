import { Component } from '@angular/core';

import { FooterComponent } from "../../../shared/footer/footer.component";
import { Router,RouterOutlet } from '@angular/router';
import { ContractorNavbarComponent } from "../contractor-navbar/contractor-navbar.component";
@Component({
  selector: 'app-requestview',
  standalone: true,
  imports: [ FooterComponent, RouterOutlet,ContractorNavbarComponent],
  templateUrl: './requestview.component.html',
  styleUrl: './requestview.component.css'
})
export class RequestviewComponent {
  
    projectName = 'Your Project Name';
    projectLocation = 'Your Project Location';
    projectType = 'Residential';
    estimatedBudget = 'Estimated Budget';
    projectDuration = 'Project Duration';
    keyObjectives = 'Key Objectives';
    additionalNotes = 'Additional Notes';
  
    constructor(private router: Router) {}
  
    
  
    submitProjectRequest() {
      // Submit the project request logic
      
      // Redirect to dashboard or confirmation page if needed
      this.router.navigate(['/activeprojects']).then(() => {
        // Ensure scroll position is reset to the top
        window.scrollTo(0, 0);
      });
    }
  
    goBackToEdit() {
      this.router.navigate(['/notification']).then(() => {
        // Ensure scroll position is reset to the top
        window.scrollTo(0, 0);
      });
    }
  }
  

