import { Component } from '@angular/core';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';
import { AppComponent } from "../../app.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NgFor } from '@angular/common';
import { ButtonComponent } from "../../shared/button/button.component";


@Component({
  selector: 'app-helpcentre',
  standalone: true,
  imports: [RouterOutlet, NgFor, Navbar2Component, AppComponent, FooterComponent, ButtonComponent],
  templateUrl: './helpcentre.component.html',
  styleUrl: './helpcentre.component.css'
})
export class HelpcentreComponent {
  faqs = [
    { question: 'How do I create a new project?', answer: 'To create a new project, navigate to projects page from navigation bar,click on start new project button' },
    { question: 'How can I change my account settings?', answer: 'To change Account settingd, navigate to settings page from navigation bar,you can edit information under account setting heading' },
    // Additional FAQs here
  ];

  searchTopics(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    // Implement search functionality here if required
  }


}
