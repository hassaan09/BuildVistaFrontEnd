
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar2Component } from '../../shared/navbar2/navbar2.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ProfileService } from '../../services/profile/profile.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-costestimation',
  standalone: true,
  imports: [Navbar2Component, FooterComponent, RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './costestimation.component.html',
  styleUrl: './costestimation.component.css'
})

export class CostestimationComponent {
  costCalculatorForm: FormGroup;
  costEstimation: any;

  areaTypes = ['marla', 'kanal', 'sqft'];
  estimationTypes = ['withMaterial', 'withoutMaterial'];
  floorsList = [1, 2, 3];
  cities = ['Lahore', 'Karachi', 'Islamabad', 'Rawalpindi'];
  constructor(private router: Router, private profileService: ProfileService, private fb: FormBuilder,) {
    this.costCalculatorForm = this.fb.group({
      areaSize: [1, [Validators.required, Validators.min(1)]],
      areaType: ['Marla', Validators.required],
      estimationType: ['With Material', Validators.required],
      floors: [1, Validators.required],
      city: ['Lahore', Validators.required]
    });
  }

  navigateToCostdetails() {
    this.router.navigate(['/costdetails'], { state: { data: this.costEstimation } });
  }


  calculateCost() {
    if (this.costCalculatorForm.invalid) {
      return;
    }

    const requestData = this.costCalculatorForm.value;

    this.profileService.costEstimate(requestData).subscribe(
      (response) => {
        this.costEstimation = response
        console.log('Cost Estimate:', response);
      },
      (error) => {
        console.error('Error fetching cost estimate:', error);
      }
    );
  }

}
