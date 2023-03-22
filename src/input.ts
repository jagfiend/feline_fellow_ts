export enum KeyInput {
    ARROW_UP ='ArrowUp',
    ARROW_DOWN = 'ArrowDown',
    ARROW_LEFT = 'ArrowLeft',
    ARROW_RIGHT = 'ArrowRight',
    SPACE = 'Space',
}

export class InputHandler {
    private readonly controls: string[];
    readonly keysPressed: string[];

    constructor() {
        this.controls = [
            KeyInput.ARROW_UP,
            KeyInput.ARROW_DOWN,
            KeyInput.ARROW_LEFT,
            KeyInput.ARROW_RIGHT,
            KeyInput.SPACE,
        ]
        this.keysPressed = []
        window.addEventListener('keydown', e => {
            if (this.controls.includes(e.code) && !this.keysPressed.includes(e.code)) {
                this.keysPressed.push(e.code);
            }
        })
        window.addEventListener('keyup', e => {
            if (this.controls.includes(e.code)) {
                this.keysPressed.splice(this.keysPressed.indexOf(e.code), 1)
            }
        })
    }
}
