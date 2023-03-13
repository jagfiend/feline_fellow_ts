import Game from "./game"
import {PlayerIdle, PlayerRunLeft, PlayerRunRight, PlayerStates} from "./player-states";
import Settings from "./settings";

export default class Player {
    public game: Game
    public image: any
    public width: number
    public height: number
    public x: number
    public y: number
    public states: any[]
    public currentState: PlayerIdle | PlayerRunRight | PlayerRunLeft
    public frameX: number
    public frameY: number
    public maxFrames: number
    public frameTimer:number
    public frameInterval: number

    constructor(game: Game) {
        this.game = game
        this.image = document.getElementById('player')
        this.width = 72
        this.height = 112
        this.x = 0
        this.y = this.game.height - this.height
        this.states = [
            new PlayerIdle(this),
            new PlayerRunRight(this),
            new PlayerRunLeft(this),
        ]
        this.currentState = this.states[PlayerStates.IDLE]
        this.frameX = 0
        this.frameY = 0
        this.maxFrames = 23
        this.frameTimer = 0
        this.frameInterval = 1000 / Settings.FPS_LIMIT
    }

    update(input: string, deltaTime: number) {
        this.updateFrames(deltaTime)
        this.currentState.handleInput(input)
    }

    draw(context: CanvasRenderingContext2D)
    {
        context.drawImage(
            this.image,
            this.width * this.frameX,
            0,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }

    setState(state: PlayerStates): void
    {
        this.currentState = this.states[state]
        this.currentState.enter()
    }

    updateFrames(deltaTime: number): void
    {
        if (this.frameTimer < this.frameInterval) {
            this.frameTimer += deltaTime
            return;
        }

        this.frameTimer = 0

        if (this.frameX < this.maxFrames) {
            this.frameX++
            return
        }

        this.frameX = 0
    }
}
