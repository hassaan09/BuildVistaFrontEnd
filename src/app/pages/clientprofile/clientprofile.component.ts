import { Component } from '@angular/core';
import { Navbar2Component } from "../../shared/navbar2/navbar2.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { Router,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-clientprofile',
  standalone: true,
  imports: [Navbar2Component, FooterComponent,RouterOutlet],
  templateUrl: './clientprofile.component.html',
  styleUrl: './clientprofile.component.css'
})
export class ClientprofileComponent {
  constructor(private router: Router) {}
  navigateToClientform() {
    this.router.navigate(['/clientform']).then(() => {
      // Ensure scroll position is reset to the top
      window.scrollTo(0, 0);
    });
  }
  
}
