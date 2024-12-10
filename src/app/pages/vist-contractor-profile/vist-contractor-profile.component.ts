import { Component } from '@angular/core';
import { Navbar2Component } from "../../shared/navbar2/navbar2.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { Router,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-vist-contractor-profile',
  standalone: true,
  imports: [Navbar2Component, FooterComponent,RouterOutlet],
  templateUrl: './vist-contractor-profile.component.html',
  styleUrl: './vist-contractor-profile.component.css'
})
export class VistContractorProfileComponent {
constructor(private router:Router){
}

navigateToStartnewproject() {
  this.router.navigate(['/startnewproject']);
}
}
