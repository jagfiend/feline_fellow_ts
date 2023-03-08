import './style.css'
import Game from './game'

window.addEventListener('load', function () {
    const canvas = document.getElementById('game_board')
    // @ts-ignore
    const ctx = canvas.getContext('2d')
    // @ts-ignore
    canvas.height = 600
    // @ts-ignore
    canvas.width = 600

    // @ts-ignore
    const game = new Game(canvas.height, canvas.width)

    function animate() {
        game.draw(ctx)
        requestAnimationFrame(animate)
    }

    animate()
})



