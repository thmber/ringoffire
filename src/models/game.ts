export class Game {

    //here the basic game data is generated.
    public players:string[] = ['Tom'];
    public playerProfilePics:number[] = [3]
    public stack:string[]= [];
    public playedCards:string[] = [];
    public currentPlayer:number = -1;
    public playerBottlePicture:string[]=[];

    constructor(){
        for (let i = 1; i < 14; i++) {
            this.stack.push('spades_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('hearts_' + i);
        }
        for (let i = 0; i < 21; i++) {
            this.playerBottlePicture.push(`${i}`)
        }
        shuffle(this.stack);
        shuffle(this.playerBottlePicture)
    }
}

/**
 * this functions shuffles the card stack
 */
function shuffle(a:string[]) {
    let currentIndex = a.length;
  
    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [a[currentIndex], a[randomIndex]] = [
        a[randomIndex], a[currentIndex]];
    }
    return a;
}