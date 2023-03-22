import Player from "./player";
import State from "./state";
import {KeyInput} from "./input";

export enum PlayerStates {
    IDLE,
    RUN_RIGHT,
    RUN_LEFT ,
}

export class PlayerIdle implements State {
    private player: Player

    constructor(player: Player) {
        this.player = player
    }

    enter(): void {
        this.player.frameX = 0
        this.player.frameY = 0
        this.player.maxFrames = 23
    }

    handleInput(input: string[]): void {
        if (input.includes(KeyInput.ARROW_RIGHT)) {
            this.player.setState(PlayerStates.RUN_RIGHT)
            return
        }

        if (input.includes(KeyInput.ARROW_LEFT)) {
            this.player.setState(PlayerStates.RUN_LEFT)
            return;
        }
    }
}

export class PlayerRunRight implements State {
    private player: Player

    constructor(player: Player) {
        this.player = player
    }

    enter(): void {
        this.player.frameX = 0
        this.player.frameY = 1
        this.player.maxFrames = 5
    }

    handleInput(input: string[]): void {
        if (input.includes(KeyInput.ARROW_LEFT)) {
            this.player.setState(PlayerStates.RUN_LEFT)
            return
        }

        if (input.length === 0) {
            this.player.setState(PlayerStates.IDLE);
            return;
        }
    }
}

export class PlayerRunLeft implements State {
    private player: Player

    constructor(player: Player) {
        this.player = player
    }

    enter(): void {
        this.player.frameX = 0
        this.player.frameY = 2
        this.player.maxFrames = 5
    }

    handleInput(input: string[]): void {
        if (input.includes(KeyInput.ARROW_RIGHT)) {
            this.player.setState(PlayerStates.RUN_RIGHT)
            return
        }

        if (input.length === 0) {
            this.player.setState(PlayerStates.IDLE);
            return;
        }
    }
}
