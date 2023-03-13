export enum KeyInput {
    PRESS_LEFT = "PRESS left",
    PRESS_RIGHT = "PRESS right",
    RELEASE_LEFT = "RELEASE left",
    RELEASE_RIGHT = "RELEASE right",
}

export class InputHandler {
    public lastKey: string

    constructor() {
        this.lastKey = ''
        window.addEventListener('keydown', event => {
            switch (event.key) {
                case "ArrowLeft":
                    this.lastKey = KeyInput.PRESS_LEFT;
                    break
                case "ArrowRight":
                    this.lastKey = KeyInput.PRESS_RIGHT;
                    break
            }
        })
        window.addEventListener('keyup', event => {
            switch (event.key) {
                case "ArrowLeft":
                    this.lastKey = KeyInput.RELEASE_LEFT;
                    break
                case "ArrowLeft":
                    this.lastKey = KeyInput.RELEASE_RIGHT;
                    break
            }
        })
    }
}
