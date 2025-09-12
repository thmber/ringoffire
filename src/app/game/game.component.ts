import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';
import {MatCardModule} from '@angular/material/card';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, DialogAddPlayerComponent,GameInfoComponent,
    MatButtonModule, MatIconModule, MatCardModule, MatDialogModule, MatFormFieldModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  pickedCard = false;
  game = new Game();
  currentCard: string | undefined = '';

  constructor(public dialog: MatDialog){
    
  }

  /**
   * this function shows the card animation and makes the chosen card visible
   */
 takeCard(){
 if (!this.pickedCard && this.game.players.length > 1) {
   this.pickedCard = true;
    if (this.currentCard != undefined) {
     this.currentCard = this.game.stack.pop();
      } 
    this.game.currentPlayer++
    if (this.game.currentPlayer == this.game.players.length) {
      this.game.currentPlayer = 0;
    }
    setTimeout(() => {
      if (this.currentCard != undefined) {
        this.game.playedCards.push(this.currentCard)
      }
     this.pickedCard = false;
   }, 800);
  }
  }

/**
 * this function opens the dialog to add a player
 */
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {
      data: { profilePics: this.game.playerProfilePics,
              numberOfPlayers: this.game.players.length,
            }
    });
    dialogRef.afterClosed().subscribe(result => { 
      if (result) {
        this.game.players.push(result);
        if (this.game.players.length > this.game.playerProfilePics.length) {
          this.game.playerProfilePics.push(0);
        }
      }
    });
  }
}