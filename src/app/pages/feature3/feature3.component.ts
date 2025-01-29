import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-feature3',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, AppComponent],
  templateUrl: './feature3.component.html',
  styleUrl: './feature3.component.css'
})
export class Feature3Component {

}
