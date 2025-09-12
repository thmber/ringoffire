import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {

bottleAnimatedLeft = false;
bottleAnimatedRight = false;

// the following variables are passed from the game-component

  @Input({}) name:string = '';
  
  @Input({}) background:string = '';

  @Input({}) position:number = 0;

  @Input({}) playerActive:boolean = false;

  @Input({}) profilePic:number = 0;


/**
 * these functions animate the bottle by adding a class in the html-part
 */
  animateBottleLeft(){
    this.bottleAnimatedLeft = true;
  }
  animateBottleRight(){
    this.bottleAnimatedRight = true;
  }
}