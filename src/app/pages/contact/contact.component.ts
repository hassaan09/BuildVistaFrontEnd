import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ProfileService } from '../../services/profile/profile.service';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, NavbarComponent, FooterComponent, CommonModule,Navbar2Component],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitted = false;
  loginUser:any;

  constructor(private fb: FormBuilder, private profile: ProfileService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
    const storedUser = localStorage.getItem('User');
    if (storedUser !== null) {
      this.loginUser = JSON.parse(storedUser);
    }
  }


  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    const payload = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    };

    this.profile.contactUs(payload).subscribe({
      next: () => {
        this.contactForm.reset();
        alert('Thank you for contacting us!');
        this.isSubmitted = false;
      },
      error: (err) => {
        alert('contact failed: ' + err.message);
      },
    })
  }
}
