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
    public maxVelX: number
    public velY: number
    public maxVelY: number
    public weight: number

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
        this.maxVelX = 10
        this.velY = 0
        this.maxVelY = 30
        this.weight = 1
    }

    update(input: string[], deltaTime: number)
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

    updateHorizontalMovement(input: string[]): void
    {
        if (input.includes(KeyInput.ARROW_RIGHT) && this.velX < this.maxVelX) {
            this.velX += 4;
        } else if (input.includes(KeyInput.ARROW_LEFT) && this.velX > -this.maxVelX) {
            this.velX -= 4;
        } else {
            this.velX = 0;
        }

        this.x += this.velX;

        if (this.x < 0) {
            this.x = 0
        } else if (this.x > this.game.width - this.width) {
            this.x = this.game.width - this.width
        }
    }

    updateVerticalMovement(input: string[]): void
    {
        if (input.includes(KeyInput.ARROW_UP) && this.isOnGround()) {
            this.velY -= this.maxVelY
        }

        this.y += this.velY;

        if (!this.isOnGround()) {
            this.velY += this.weight
        } else {
            this.velY = 0
        }
    }

    isOnGround(): boolean
    {
        return this.y >= this.game.height - this.height;
    }
}
