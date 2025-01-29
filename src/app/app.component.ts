import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from './pages/about/about.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaindashboardComponent } from './pages/maindashboard/maindashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';



0



export class AppModule {}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ProjectsComponent,MaindashboardComponent,AboutComponent,ReactiveFormsModule,FormsModule,RouterOutlet, NavbarComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Buildvista';
}

