import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { AppComponent } from "../../app.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-feature4',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, AppComponent,RouterOutlet],
  templateUrl: './feature4.component.html',
  styleUrl: './feature4.component.css'
})
export class Feature4Component {

}
