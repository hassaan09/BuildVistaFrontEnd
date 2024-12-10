import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';
import { FooterComponent } from '../../shared/footer/footer.component';


@Component({
  selector: 'app-start-new-project',
  standalone: true,
  imports: [Navbar2Component,FooterComponent,RouterOutlet],
  templateUrl: './start-new-project.component.html',
  styleUrl: './start-new-project.component.css'
})
export class StartNewProjectComponent {
  constructor(private router:Router){}
  navigateToReviewProjectInfo(){
    this.router.navigate(['/reviewprojectinfo'])
  }

}
