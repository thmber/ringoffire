import { Component, Input, OnChanges, OnInit, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnChanges, OnInit{
  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: 'This person is the thumb master until another player draws another 6. This means that everytime the thumb master puts his/her thumb on the floor or table that everyone has to do the same and the last to do so has to drink. ' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: 'Ask a question. Whoever does not know the answer has to drink.' },
    { title: 'Never have i ever...', description: 'Say something you nnever did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
  ];


  title:string | undefined = 'Pick a card!';
  description:string | undefined = '- click on stack -';

  @Input({}) card:string | undefined = '';

  @Input({}) playerCount:number = 0;

  /**
   * this functions makes sure that at least 2 players are added, and displays this information in the game rules
   */
  ngOnInit(): void {
    if (this.playerCount < 2) {
      this.title = 'Add at least 2 Players!';
      this.description = 'Click + to add player'
    }
  }

  /**
   * this function displays the card rules, depending on the chosen card
   */
  ngOnChanges(){
    let cardNumber = this.card?.split('_')[1];
   if (cardNumber != undefined) {
    this.title = this.cardAction[+cardNumber-1].title
    this.description = this.cardAction[+cardNumber-1].description
   }
   else{
    this.title = 'Pick a card!';
    this.description = '- click on stack -';
   }
  }
}