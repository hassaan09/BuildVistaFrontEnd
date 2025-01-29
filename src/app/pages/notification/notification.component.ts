import { Component } from '@angular/core';
import { Navbar2Component } from "../../shared/navbar2/navbar2.component";
import { AppComponent } from "../../app.component";
import { FooterComponent } from '../../shared/footer/footer.component';
import { Router,RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { ProfileService } from '../../services/profile/profile.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [Navbar2Component, AppComponent, FooterComponent,ButtonComponent,NgFor],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  notifications:any;
  user:any;

  constructor(private router: Router, private profileService:ProfileService) {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      this.profileService.initializeSocketConnection(accessToken);
    }
  }

  ngOnInit(): void {
    let storedUser = localStorage.getItem('User');
    if (storedUser !== null) {
      this.user = JSON.parse(storedUser);
    }
    this.fetchNotifications();

    this.profileService.socketListener.subscribe( () => {      
      this.fetchNotifications();
    })
  }

  requestview(projectId:any) {
    this.router.navigate(['/requestview',projectId]);
  }

  fetchNotifications(): void {
    this.profileService.getNotifications().subscribe({
      next: (notification) => {        
        this.notifications = notification?.notifications;
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
      }
    });
  }
}
