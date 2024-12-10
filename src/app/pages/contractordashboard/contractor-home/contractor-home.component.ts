import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContractorNavbarComponent } from '../contractor-navbar/contractor-navbar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-contractor-home',
  standalone: true,
  imports: [RouterOutlet,ContractorNavbarComponent,FooterComponent,AppComponent
  ],
  templateUrl: './contractor-home.component.html',
  styleUrl: './contractor-home.component.css'
})
export class ContractorHomeComponent {

}
