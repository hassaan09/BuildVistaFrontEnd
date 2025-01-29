import { Component } from '@angular/core';

import { FooterComponent } from "../../../shared/footer/footer.component";
import { ActivatedRoute, Router,RouterOutlet } from '@angular/router';
import { ContractorNavbarComponent } from "../contractor-navbar/contractor-navbar.component";
import { ProfileService } from '../../../services/profile/profile.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-requestview',
  standalone: true,
  imports: [ FooterComponent, RouterOutlet,ContractorNavbarComponent,NgIf],
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
    projectId:any;
    loginUser:any;
    projectDetails:any
  
     constructor(private router:Router,private profileService: ProfileService, private route: ActivatedRoute) {}
    
      ngOnInit(): void {
        this.loginUser = JSON.parse(localStorage.getItem('User') || '{}');
        this.projectId =  this.route.snapshot.paramMap.get('projectId');
        this.getProjectDetails()
      }


      getProjectDetails(){
        this.profileService.showProjectDetail(this.projectId).subscribe( {
          next: (projects) => {
            this.projectDetails = projects;
          },
          error: (error) => {
            console.error('Error fetching projects:', error);
          }
        })
      }
  
    
  
    submitProjectRequest(choice:string) {
      this.profileService.requestProject(this.projectId,choice).subscribe( {
        next: (projects) => {
          this.projectDetails = projects;
        },
        error: (error) => {
          console.error('Error fetching projects:', error);
        }
      })
    }
  }
  

