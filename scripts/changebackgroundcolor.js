function bgcolor() {
    this.contextReal.fillStyle = this.backGround;
}

class ChangeBackgroundColor extends PaintFunction {
    constructor(contextReal) {
        super()
        this.contextReal = contextReal;
    }




    onMouseDown() { }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() {
        bgcolor()
    }
    onMouseLeave() { }
    onMouseEnter() { }
}