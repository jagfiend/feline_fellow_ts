import Player from "./player";

export default class Game {
    public height: number;
    public width: number;
    public player: Player

    constructor(height: number, width: number) {
        this.height = height
        this.width = width
        this.player = new Player(this)
    }

    update () {

    }

    draw(context: CanvasRenderingContext2D) {
        this.player.draw(context)
    }
}
