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
        //
    }

    draw(context: CanvasRenderingContext2D) {

    }
}
