import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  
  constructor(private router: Router) {
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