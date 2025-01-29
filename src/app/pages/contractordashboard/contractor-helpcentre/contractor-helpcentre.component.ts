import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ContractorNavbarComponent } from '../contractor-navbar/contractor-navbar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contractor-helpcentre',
  standalone: true,
  imports: [RouterOutlet,AppComponent,ButtonComponent,ContractorNavbarComponent,FooterComponent,CommonModule],
  templateUrl: './contractor-helpcentre.component.html',
  styleUrl: './contractor-helpcentre.component.css'
})
export class ContractorHelpcentreComponent {
  faqs = [
    { question: 'How do I update my project status?', answer: 'Navigate to the "Current Projects" section in your dashboard.Click on the project you want to update. In the project details page, find and select the "Update Status" button.Choose the appropriate status (e.g., planning, ongoing, near completion) from the options.You may add notes or upload progress photos if needed to provide more context.Click "Save" to confirm and update the project status.' },
    { question: 'How can I change my account settings?', answer: 'To change Account settings, navigate to settings page from navigation bar,you can edit information under account setting heading' },
    // Additional FAQs here
  ];

  searchTopics(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    // Implement search functionality here if required
  }

}
