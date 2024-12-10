import { Component } from '@angular/core';
import { Router,RouterOutlet} from '@angular/router';
import { Navbar2Component} from '../../shared/navbar2/navbar2.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-findcontractor',
  standalone: true,
  imports: [Navbar2Component, FooterComponent, RouterOutlet, AppComponent],
  templateUrl: './findcontractor.component.html',
  styleUrl: './findcontractor.component.css'
})
export class FindcontractorComponent {
  constructor(private router: Router) {}

  navigateToStartnewproject() {
    this.router.navigate(['/startnewproject']);
  }
  navigateToVisitContractorProfile() {
    this.router.navigate(['/visitcontractorprofile']);
  }
}
