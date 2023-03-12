import Settings from "./settings";

export function clear(context: CanvasRenderingContext2D) {
    context.clearRect(0,0, Settings.SCREEN_WIDTH, Settings.SCREEN_WIDTH)
}

export function drawSprite(
    context: CanvasRenderingContext2D,
    image: CanvasImageSource,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw: number,
    dh: number
) {
    context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
}
