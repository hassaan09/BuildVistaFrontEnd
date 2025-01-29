import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/footer/footer.component";
import { AppComponent } from "../../../app.component";
import { Router,RouterOutlet } from '@angular/router';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ContractorNavbarComponent } from "../contractor-navbar/contractor-navbar.component";
import { ProfileService } from '../../../services/profile/profile.service';

@Component({
  selector: 'app-activeprojects',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, RouterOutlet, NgClass, FooterComponent, AppComponent, ButtonComponent, ContractorNavbarComponent],
  templateUrl: './activeprojects.component.html',
  styleUrl: './activeprojects.component.css'
})
export class ActiveprojectsComponent {
projects:any;
  user:any;
  constructor(private router: Router, private profileservice:ProfileService) {}

  navigateToStartnewproject() {
    this.router.navigate(['/startnewproject']);
  }
  navigateToProjectdashboard(chatId?:string,projectId?:string, isApproved?:any){
    if (chatId && projectId && isApproved) {
      this.router.navigate(['/projectdashboard',chatId],{ queryParams: { projectId } });
    }else{
      alert('first accept then you can start it')
    }
  }


  ngOnInit(): void {
    let storedUser = localStorage.getItem('User');
    if (storedUser !== null) {
      this.user = JSON.parse(storedUser);
    }
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.profileservice.listAllProjects(this.user?.role).subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
      }
    });
  }
}
