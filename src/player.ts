import Game from "./game"
import {PlayerIdle, PlayerRunLeft, PlayerRunRight, PlayerStates} from "./player-states";
import Settings from "./settings";
import {KeyInput} from "./input";

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
    public velX: number
    public maxSpeed: number

    constructor(game: Game)
    {
        this.game = game
        this.image = document.getElementById('player') // @todo fix mouth pixel
        this.width = 11 * 8
        this.height = 16 * 8
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
        this.velX = 0
        this.maxSpeed = 10
    }

    update(input: string, deltaTime: number)
    {
        this.updateFrames(deltaTime)
        this.currentState.handleInput(input)
        this.updateHorizontalMovement(input)
        this.updateVerticalMovement(input)
    }

    draw(context: CanvasRenderingContext2D): void
    {
        context.drawImage(
            this.image,
            this.width * this.frameX,
            this.height * this.frameY,
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

    updateHorizontalMovement(input: string): void
    {
        // @todo: keep in bounds
        if (
            input === KeyInput.PRESS_RIGHT &&
            this.velX <= this.maxSpeed
        ) {
            this.velX += 1
        }

        else if (input === KeyInput.RELEASE_RIGHT) {
            this.velX = 0
        }

        else if (
            input === KeyInput.PRESS_LEFT &&
            this.x >= 100 &&
            this.velX >= -10
        ) {
            this.velX -= 1
        }

        else if (input === KeyInput.RELEASE_LEFT) {
            this.velX = 0
       }

        this.x += this.velX
    }

    updateVerticalMovement(input: string): void
    {
        // @todo: add jumping and falling
    }
}
