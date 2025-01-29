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
  contractor:any;
  constructor(private router: Router) {
    const storedUser = localStorage.getItem('User');
    if (storedUser !== null) {
      this.contractor = JSON.parse(storedUser);      
    }
  }
  navigateToContractorform() {
    this.router.navigate(['/contractorform'], { state: { updateProfile: true } });
  }

}
