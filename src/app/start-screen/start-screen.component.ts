import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {

  startMessageShown = false;
  showImprint = false;
  capSound = new Audio('./assets/sounds/cap.mp3');

  
  constructor(private router: Router) {
  
  }
  
  playTurnCap(){
    this.capSound.play();
    setTimeout(() => {
      this.capSound.pause()
    }, 400);
  }

  stopTurnCap(){
      this.capSound.play();
    setTimeout(() => {
      this.capSound.pause()
    }, 400);
  }

  /**
   * this function navigates to the game site
   */
  newGame(){
    this.router.navigateByUrl('game')
  }

  /**
   * if the bottle cap is hovered at least once, the start message appears
   */
  showStartMessage(){
    this.startMessageShown = true;
    this.showImprint = false;
  }

  /**
   * by clicking on the imprint/credits text, the slide-in is showns
   */
  showImprintOverlay(){
    if (this.showImprint == false) {
      this.showImprint = true;
    }
    else{
      this.showImprint = false;
    }
  }
}