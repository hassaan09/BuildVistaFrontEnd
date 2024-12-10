import { Component } from '@angular/core';
import { Navbar2Component } from "../../shared/navbar2/navbar2.component";
import { AppComponent } from "../../app.component";
import { FooterComponent } from '../../shared/footer/footer.component';
import { Router,RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [Navbar2Component, AppComponent, FooterComponent,ButtonComponent],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  constructor(private router: Router) {}

  requestview() {
    this.router.navigate(['/requestview']);
  }
}
