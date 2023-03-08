import Player from "./player";

export default class Game {
    public width: number;
    public height: number;
    public player: Player

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
        this.player = new Player(this)
    }

    update () {
        this.player.update()
    }

    draw(context: CanvasRenderingContext2D) {
        this.player.draw(context)
    }
}
