import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { Navbar2Component } from '../../../shared/navbar2/navbar2.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ContractorNavbarComponent } from "../contractor-navbar/contractor-navbar.component";
@Component({
  selector: 'app-contractorform',
  standalone: true,
  imports: [Navbar2Component, FooterComponent, RouterOutlet, ButtonComponent, ContractorNavbarComponent],
  templateUrl: './contractorform.component.html',
  styleUrl: './contractorform.component.css'
})
export class ContractorformComponent {
  constructor(private router: Router) {}

  navigateToContractordashboard() {
    this.router.navigate(['/contractorhome']).then(() => {
      // Ensure scroll position is reset to the top
      window.scrollTo(0, 0);
    });
  }
}
