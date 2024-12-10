import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-termsandconditions',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, AppComponent],
  templateUrl: './termsandconditions.component.html',
  styleUrl: './termsandconditions.component.css'
})
export class TermsandconditionsComponent {

}
