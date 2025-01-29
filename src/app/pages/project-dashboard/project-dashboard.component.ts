import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ProgresscircleComponent } from "../../shared/progresscircle/progresscircle.component";
import { Subscription } from 'rxjs';
import { ProfileService } from '../../services/profile/profile.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, AppComponent, Navbar2Component, FooterComponent, CommonModule, ProgresscircleComponent],
  templateUrl: './project-dashboard.component.html',
  styleUrl: './project-dashboard.component.css'
})
export class ProjectDashboardComponent implements OnInit, OnDestroy {
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

  chatMessages: any[] = [];
  newMessage: string = '';
  chatSubscription!: Subscription;
  chatId:any;
  projectId:any;
  selectedFile: File | null = null;
  completion: number | null = null;
  projectDetail:any;
  loginUser:any;
  showPopup = false;

  constructor(private router:Router,private profileService: ProfileService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.loginUser = JSON.parse(localStorage.getItem('User') || '{}');
    this.route.queryParams.subscribe(params => {
      this.projectId = params['projectId'];
    });
    
    this.chatId =  this.route.snapshot.paramMap.get('chatId');
    // Initialize WebSocket connection and load chat messages
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      this.profileService.initializeSocketConnection(accessToken);
    }
    if (this.projectId) {
      setTimeout(() => {
        this.profileService.joinChatRoom(this.chatId);
      }, 500);
      this.getProjectDetails()
    }

    // Subscribe to chat messages
    this.chatSubscription = this.profileService.messages$.subscribe((messages: any[]) => {
      this.chatMessages = messages;      
    });

    this.profileService.socketListener.subscribe( (notification) => {      
      if (notification.type === "Updation") {
        this.getProjectDetails();
      }
    })
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.profileService.sendMessage(this.chatId, this.newMessage);
      this.profileService.joinChatRoom(this.chatId);
      this.newMessage = '';
    }
  }

  getProjectDetails(){
    this.profileService.showProjectDetail(this.projectId).subscribe({
      next: (response) => {
        this.projectDetail = response
      },
      error: (error) => {
        console.error('Error fetching project details:', error);
      },
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  updateRealTime(){    
    if (!this.selectedFile) {
      console.error('No file selected!');
      return;
    }
    this.profileService.realTimeUpdate(this.projectId, this.completion?? undefined, this.selectedFile).subscribe({
      next: () => {
        this.completion = null;
        this.selectedFile = null;
        if (this.projectId) {
          this.getProjectDetails()
        }
      },
      error: (error) => {
        console.error('Error updating project in real-time:', error);
      },
    });
  }

  togglePopup(): void {
    this.showPopup = !this.showPopup;
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.chatSubscription) {
      this.chatSubscription.unsubscribe();
    }

    // Disconnect WebSocket
    this.profileService.disconnectSocket();
  }
}
