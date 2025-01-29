import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-feature1',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, AppComponent],
  templateUrl: './feature1.component.html',
  styleUrl: './feature1.component.css'
})
export class Feature1Component {

}
