export default interface State {
    state: number
    enter(): void
    handleInput(input: string): void
}
