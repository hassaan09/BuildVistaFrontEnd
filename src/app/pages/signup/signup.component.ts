import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet, NavbarComponent, FooterComponent, ButtonComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', [Validators.required, Validators.pattern((/^(\+92|0)?3\d{9}$/))]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required,Validators.minLength(8)]],
    }, { validators: this.passwordsMatchValidator() });
  }

  // Custom validator for password matching
  private passwordsMatchValidator(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
      const password = group.get('password')?.value;
      const confirmPassword = group.get('confirmPassword')?.value;
      return password && confirmPassword && password !== confirmPassword
        ? { passwordsDoNotMatch: true }
        : null;
    };
  }

  signUp(): void {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      console.log('Form Data Submitted:', formData);
    } else {
      alert('Please fix the form errors before submitting!');
    }
  }

  navigateToContractorform(): void {
    if (this.signupForm.valid) {
      this.router.navigate(['/contractorform'], { state: { formData: this.signupForm.value } });
    }
  }

  navigateToClientform(): void {
    if (this.signupForm.valid) {
      this.router.navigate(['/clientform'], { state: { formData: this.signupForm.value } });
    }
  }
}
