import { Component } from '@angular/core';
import { Navbar2Component } from "../../shared/navbar2/navbar2.component";
import { FooterComponent } from "../../shared/footer/footer.component";

import { Router,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-clientform',
  standalone: true,
  imports: [Navbar2Component, FooterComponent,RouterOutlet],
  templateUrl: './clientform.component.html',
  styleUrl: './clientform.component.css'
})
export class ClientformComponent {
  constructor(private router: Router) {}
  navigateToMaindashboard() {
    this.router.navigate(['/maindashboard']).then(() => {
      // Ensure scroll position is reset to the top
      window.scrollTo(0, 0);
    });

  }


}
