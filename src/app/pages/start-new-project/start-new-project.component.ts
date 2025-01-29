import { Component } from '@angular/core';
import { ActivatedRoute, Router,RouterOutlet } from '@angular/router';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ProfileService } from '../../services/profile/profile.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-start-new-project',
  standalone: true,
  imports: [Navbar2Component,FooterComponent,RouterOutlet, FormsModule],
  templateUrl: './start-new-project.component.html',
  styleUrl: './start-new-project.component.css'
})
export class StartNewProjectComponent {
  projectData = {
    projectName: '',
    projectLocation: '',
    projectType: '',
    projectStartDate: '',
    estimatedBudget: 0,
    projectDuration: 0,
    objectives: '',
    notes: ''
  };
  designDocument: File | null = null; // For file upload
  contractorId: any; // Replace with actual contractor ID

  constructor(private router: Router, private profileService: ProfileService,private route: ActivatedRoute) {
    this.contractorId =  this.route.snapshot.paramMap.get('companyId');
  }

  // Handle file change event
  onFileChange(event: any): void {
    this.designDocument = event.target.files[0];
  }

  // Method to create a new project
  createProject(): void {
    if (!this.designDocument) {
      alert('Please upload a design document.');
      return;
    }

    // Call the ProfileService method to create a project
    this.profileService
      .createProject(this.contractorId, this.projectData, this.designDocument)
      .subscribe({
        next: (response) => {
          console.log('Project created successfully:', response);
          this.router.navigate(['/projects']);

          alert('Project created successfully!');
          // this.navigateToReviewProjectInfo(); 
        },
        error: (error) => {
          console.error('Error creating project:', error);
          alert('Error creating project. Please try again.');
        }
      });
  }
  navigateToReviewProjectInfo(){
    this.router.navigate(['/reviewprojectinfo'])
  }

}
