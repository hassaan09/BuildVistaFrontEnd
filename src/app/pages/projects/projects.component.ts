import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ButtonComponent } from "../../shared/button/button.component";


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterOutlet, Navbar2Component, FooterComponent, ButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(private router: Router) {}

  navigateToStartnewproject() {
    this.router.navigate(['/startnewproject']);
  }
  navigateToProjectdashboard(){
    this.router.navigate(['/projectdashboard']);
  }
}
