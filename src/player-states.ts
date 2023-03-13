import Player from "./player";
import State from "./state";
import {KeyInput} from "./input";

export enum PlayerStates {
    IDLE = 0,
    RUN_RIGHT = 1,
    RUN_LEFT = 2,
}

export class PlayerIdle implements State {
    public state: PlayerStates
    public player: Player

    constructor(player: Player) {
        this.state = PlayerStates.IDLE
        this.player = player
    }

    enter(): void {
        this.player.frameX = 0
        this.player.frameY = 0
        this.player.maxFrames = 23
    }

    handleInput(input: string): void {
        switch (input) {
            case KeyInput.PRESS_RIGHT:
                this.player.setState(PlayerStates.RUN_RIGHT)
                break
            case KeyInput.PRESS_LEFT:
                this.player.setState(PlayerStates.RUN_LEFT)
                break
        }
    }
}

export class PlayerRunRight implements State {
    public state: PlayerStates
    public player: Player

    constructor(player: Player) {
        this.state = PlayerStates.RUN_RIGHT
        this.player = player
    }

    enter(): void {
        this.player.frameX = 0
        this.player.frameY = 1
        this.player.maxFrames = 1
    }

    handleInput(input: string): void {
        switch (input) {
            case KeyInput.RELEASE_RIGHT:
                this.player.setState(PlayerStates.IDLE)
                break
            case KeyInput.PRESS_LEFT:
                this.player.setState(PlayerStates.RUN_LEFT)
                break
        }
    }
}

export class PlayerRunLeft implements State {
    public state: PlayerStates
    public player: Player

    constructor(player: Player) {
        this.state = PlayerStates.RUN_LEFT
        this.player = player
    }

    enter(): void {
        this.player.frameX = 0
        this.player.frameY = 2
        this.player.maxFrames = 1
    }

    handleInput(input: string): void {
        switch (input) {
            case KeyInput.RELEASE_LEFT:
                this.player.setState(PlayerStates.IDLE)
                break
            case KeyInput.PRESS_RIGHT:
                this.player.setState(PlayerStates.RUN_RIGHT)
                break
        }
    }
}
