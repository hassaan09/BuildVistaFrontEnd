import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ProgresscircleComponent } from "../../shared/progresscircle/progresscircle.component";


@Component({
  selector: 'app-project-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppComponent, Navbar2Component, FooterComponent, CommonModule, ProgresscircleComponent],
  templateUrl: './project-dashboard.component.html',
  styleUrl: './project-dashboard.component.css'
})
export class ProjectDashboardComponent {
  project = {
    name: 'Project Alpha',
    status: 'ongoing',
    completionPercentage: 45,
    description: 'This project is focused on creating sustainable housing units.',
    photos: [
      { url: 'assets/images/update1.jpg', timestamp: new Date() },
      { url: 'assets/images/update2.jpg', timestamp: new Date() }
    ]
  };
  
  
  chatMessages = [
    { sender: 'client', content: 'How is the progress?', timestamp: new Date() },
    { sender: 'contractor', content: 'We’re on track!', timestamp: new Date() }
  ];

  newMessage: string = '';

  ngOnInit(): void {}

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.chatMessages.push({
        sender: 'client',
        content: this.newMessage,
        timestamp: new Date()
      });
      this.newMessage = '';
    }
  }
}


