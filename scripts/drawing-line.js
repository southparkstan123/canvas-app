class DrawingLine extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }
    onMouseDown(coord, event) {
        this.context.beginPath();
        this.draw(coord[0], coord[1]);
    }
    onDragging(coord, event) {
        this.context.strokeStyle = this.strokeColor; //can only be changed after we have the color library
        this.draw(coord[0], coord[1]);
    }

    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave(coord, event, dragging) {
        if (dragging) {
            this.context.beginPath();
            this.context.moveTo(coord[0], coord[1]);
            // this.draw(coord[0], coord[1]);
            // this.context.closePath();
            // dragging=false;
        }
    }
    onMouseEnter(coord, event, dragging) {
        if (dragging) {
            this.context.beginPath();
            this.draw(coord[0], coord[1]);

        }
    }

    draw(x, y) {
        this.context.lineTo(x, y);
        this.context.moveTo(x, y);
        this.context.closePath();
        this.context.stroke();
    }
}