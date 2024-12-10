import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-progresscircle',
  standalone: true,
  imports: [],
  templateUrl: './progresscircle.component.html',
  styleUrl: './progresscircle.component.css'
})
export class ProgresscircleComponent {
  completionPercentage: number = 0;

  ngOnInit(): void {
    this.animateProgress(75); // Replace 75 with your target percentage
  }

  animateProgress(targetPercentage: number) {
    const incrementTime = 20; // Milliseconds between updates
    const increment = targetPercentage / (1000 / incrementTime);

    const interval = setInterval(() => {
      this.completionPercentage += increment;
      if (this.completionPercentage >= targetPercentage) {
        this.completionPercentage = targetPercentage;
        clearInterval(interval);
      }
    }, incrementTime);
  }
}
