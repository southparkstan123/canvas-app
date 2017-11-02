class Eraser extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }

    onMouseDown(coord, event, originalcolor) {
        this.context.beginPath();
    }

    onDragging(coord, event) {
        this.context.globalCompositeOperation = "destination-out"; //can change the color of the background after Change bg color function
        this.draw(coord[0], coord[1]);
        this.context.globalCompositeOperation = 'source-over';
        this.context.lineCap = "round";
    }

    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave(coord, event, dragging) {
        if (dragging) {
            this.context.beginPath();
            this.context.moveTo(coord[0], coord[1]);
            this.draw(coord[0], coord[1]);
            this.context.closePath();
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