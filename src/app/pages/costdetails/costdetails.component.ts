import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-costdetails',
  standalone: true,
  imports: [Navbar2Component,FooterComponent,RouterOutlet],
  templateUrl: './costdetails.component.html',
  styleUrl: './costdetails.component.css'
})
export class CostdetailsComponent {

}
