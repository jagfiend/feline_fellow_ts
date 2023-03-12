import './style.css'
import { clear } from './drawing'
import Settings from './settings'
import Game from './game'

window.addEventListener('load', function () {
    const canvas: HTMLElement | null = document.getElementById('game')
    // @ts-ignore
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')
    const game = new Game(Settings.SCREEN_WIDTH, Settings.SCREEN_WIDTH)

    function animate() {
        clear(ctx)
        game.update()
        game.draw(ctx)
        requestAnimationFrame(animate)
    }

    animate()
})



