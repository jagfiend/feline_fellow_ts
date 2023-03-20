import Player from "./player";
import {InputHandler} from "./input";

export default class Game {
    public width: number;
    public height: number;
    public input: InputHandler
    public player: Player

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
        this.input = new InputHandler()
        this.player = new Player(this)
    }

    update (deltaTime: number) {
        this.player.update(this.input.keysPressed, deltaTime)
    }

    draw(context: CanvasRenderingContext2D) {
        this.player.draw(context)
    }
}
