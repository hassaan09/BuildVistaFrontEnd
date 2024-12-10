
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';
import { FooterComponent } from '../../shared/footer/footer.component';
@Component({
  selector: 'app-costestimation',
  standalone: true,
  imports: [Navbar2Component,FooterComponent,RouterOutlet],
  templateUrl: './costestimation.component.html',
  styleUrl: './costestimation.component.css'
})

export class CostestimationComponent {
  constructor(private router: Router) {}

  navigateToCostdetails() {
    this.router.navigate(['/costdetails']).then(() => {
      // Ensure scroll position is reset to the top
      window.scrollTo(0, 0);
    });

  }
}
