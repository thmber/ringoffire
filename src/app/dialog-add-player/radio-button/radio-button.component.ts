import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss'
})
export class RadioButtonComponent {

  pickedProfile: number = 1;

  // this output is to pass the information of the selected Profile to the parent-Component 

  @Output() receiveMessage = new EventEmitter<number>();

  passData() {
    setTimeout(() => {
      this.receiveMessage.emit(this.pickedProfile);
    }, 50);
  }
}