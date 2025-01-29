import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router,ActivatedRoute  } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-otp-verification',
  standalone: true,
  imports: [FormsModule,CommonModule, ReactiveFormsModule],
  templateUrl: './otp-verification.component.html',
  styleUrl: './otp-verification.component.css'
})
export class OtpVerificationComponent {
  otpForm: FormGroup;
  email: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.otpForm = this.fb.group({
      otp: this.fb.array(
        Array(6)
          .fill('')
          .map(() => ['', [Validators.required, Validators.pattern('^[0-9]$')]])
      ),
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['userEmail'];
      console.log('User Email:', this.email);
    });
  }

  // Getter for the OTP FormArray
  get otpControls(): FormArray {
    return this.otpForm.get('otp') as FormArray;
  }

  // Handle OTP submission
  onSubmit(): void {
    const otp = this.otpControls.value.join(''); // Combine digits into a string

    if (otp.length === 6 && this.email) {
      const payload = { otp, email: this.email };

      this.authService.verifyOtp(payload).subscribe({
        next: () => {
          alert('OTP verified successfully!');
          this.router.navigate(['/login']); // Redirect to login
        },
        error: (err) => {
          alert('OTP verification failed: ' + err.message);
          this.clearOtp();
        },
      });
    } else {
      alert('Please enter a valid 6-digit OTP and ensure your email is provided.');
    }
  }

  // Handle input navigation
  onInput(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;
    const nextInput = document.querySelector<HTMLInputElement>(
      `input[name='digit${index + 1}']`
    );
    const prevInput = document.querySelector<HTMLInputElement>(
      `input[name='digit${index - 1}']`
    );

    // Move to the next input field
    if (input.value && nextInput) {
      nextInput.focus();
    }

    // Move to the previous input field on backspace
    if (event.key === 'Backspace' && !input.value && prevInput) {
      prevInput.focus();
    }
  }

  // Clear all OTP fields
  clearOtp(): void {
    this.otpControls.reset();
  }
}
