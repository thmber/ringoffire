import { Component, Inject} from '@angular/core';
import {MatDialog, MatDialogContent, MatDialogModule} from '@angular/material/dialog';
import {MatFormField} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatDialogContent, MatDialogModule, MatFormField, FormsModule,
    MatButtonModule, MatInputModule, MatFormFieldModule, RadioButtonComponent],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {

  constructor(public dialog : MatDialog, @Inject(MAT_DIALOG_DATA) public data: {profilePics: number[],
    numberOfPlayers: number} ){
  }

  name:string = '';
  playerProfileSelection:number = 1;

// here the message of the radio-component is received which profile pic was selected in the radio input

  receiveMessage($event:number){
    this.playerProfileSelection = $event;
    if (this.data.profilePics.length == this.data.numberOfPlayers) {
        this.data.profilePics.push(+this.playerProfileSelection);
    }
    else{
      this.data.profilePics.splice(this.data.profilePics.length-1,1,+this.playerProfileSelection)
    }
  } 
}
