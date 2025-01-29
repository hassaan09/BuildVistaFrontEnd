import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = 'Click me';
  @Input() styleType: string = 'primary'; // Default style
  @Input() disabled: boolean = false;     // Disable button state
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }

}
