class Eraser extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }

    onMouseDown(coord, event) {
        var backgroundcolor = $('#canvas-real').css("backgroundColor")
        this.context.strokeStyle = backgroundcolor;

        
        this.context.beginPath();
        this.context.moveTo(coord[0], coord[1]);
        this.draw(coord[0], coord[1]);
        this.context.restore()
    }
    onDragging(coord, event) {
        this.draw(coord[0], coord[1]);
    }

    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave(coord, event, dragging) {
        if (dragging) {
            this.context.beginPath();
            this.context.moveTo(coord[0], coord[1]);
            this.draw(coord[0], coord[1]);
        }
    }
    onMouseEnter() { }

    draw(x, y) {
        this.context.lineTo(x, y);
        this.context.moveTo(x, y);
        this.context.closePath();
        this.context.stroke();
    }
}