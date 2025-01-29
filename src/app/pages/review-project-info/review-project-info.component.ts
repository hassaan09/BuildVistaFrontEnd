import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { AppComponent } from '../../app.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-review-project-info',
  standalone: true,
  imports: [RouterOutlet,Navbar2Component,FooterComponent,ButtonComponent,AppComponent],
  templateUrl: './review-project-info.component.html',
  styleUrl: './review-project-info.component.css'
})
export class ReviewProjectInfoComponent {
  projectName = 'Your Project Name';
  projectLocation = 'Your Project Location';
  projectType = 'Residential';
  estimatedBudget = 'Estimated Budget';
  projectDuration = 'Project Duration';
  keyObjectives = 'Key Objectives';
  additionalNotes = 'Additional Notes';

  constructor(private router: Router) {}

  editField(fieldName: string) {
    // Navigate to the project edit page, passing the field to edit
    this.router.navigate(['/startnewproject'], { queryParams: { field: fieldName } });
  }

  submitProjectRequest() {
    // Submit the project request logic
    alert('Project request has been sent to the contractor!');
    // Redirect to dashboard or confirmation page if needed
    this.router.navigate(['/projects']).then(() => {
      // Ensure scroll position is reset to the top
      window.scrollTo(0, 0);
    });
  }

  goBackToEdit() {
    this.router.navigate(['/startnewproject']).then(() => {
      // Ensure scroll position is reset to the top
      window.scrollTo(0, 0);
    });
  }
}
