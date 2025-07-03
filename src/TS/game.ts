export class Game {
  private score = 0;

  start() {
    console.log('Game started!');
    this.addScore(10);
  }

  private addScore(points: number) {
    this.score += points;
    console.log(`Score: ${this.score}`);
  }
}
