import './style.css'
import Game from './game'

window.addEventListener('load', function () {
    const canvas: HTMLElement | null = document.getElementById('game')
    // @ts-ignore
    canvas.height = 600
    // @ts-ignore
    canvas.width = 600
    // @ts-ignore
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')
    // @ts-ignore
    const game = new Game(canvas.width, canvas.height)

    function animate() {
        // @ts-ignore
        ctx.clearRect(0,0, canvas.width, canvas.height)
        game.update()
        game.draw(ctx)
        requestAnimationFrame(animate)
    }

    animate()
})



