import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ButtonComponent } from "../../shared/button/button.component";
import { ProfileService } from '../../services/profile/profile.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterOutlet, Navbar2Component, FooterComponent, ButtonComponent, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
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
      alert('wait untill contractor accept')
    }
    // this.router.navigate(['/projectdashboard',chatId],{ queryParams: { projectId } });
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
