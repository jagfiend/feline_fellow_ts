import Game from "./game"
export default class Player {
    public game: Game
    public x: number
    public y: number

    constructor(game: Game) {
        this.game = game
        this.x = (game.width - 5) / 2
        this.y = (game.height - 5) / 2
    }

    update () {

    }

    draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, 20,0, 2 * Math.PI, false);
        context.fillStyle = '#111';
        context.fill();
        context.lineWidth = 3;
        context.strokeStyle = '#f00';
        context.stroke();
    }
}
