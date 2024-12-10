import { Component } from '@angular/core';
import { Navbar2Component } from "../../../shared/navbar2/navbar2.component";
import { FooterComponent } from "../../../shared/footer/footer.component";
import { Router,RouterOutlet } from '@angular/router';
import { ContractorNavbarComponent } from "../contractor-navbar/contractor-navbar.component";

@Component({
  selector: 'app-contractorprofile',
  standalone: true,
  imports: [ FooterComponent, RouterOutlet, ContractorNavbarComponent],
  templateUrl: './contractorprofile.component.html',
  styleUrl: './contractorprofile.component.css'
})
export class ContractorprofileComponent {

  constructor(private router: Router) {}
  navigateToContractorform() {
    this.router.navigate(['/contractorform']).then(() => {
      // Ensure scroll position is reset to the top
      window.scrollTo(0, 0);
    });
  }

}
