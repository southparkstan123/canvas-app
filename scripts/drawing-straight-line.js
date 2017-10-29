class DrawingStraightLine extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event) {
        this.contextDraft.strokeStyle = this.strokeColor;
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.drawStraightLine(this.contextDraft, coord[0], coord[1], this.origX, this.origY);
    }
    onMouseMove() { }
    onMouseUp(coord, event, dragging) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        if (dragging) {
            this.drawStraightLine(this.contextReal, coord[0], coord[1], this.origX, this.origY);
            this.contextReal.strokeStyle = this.strokeColor;
        }
    }
    onMouseLeave() { }
    onMouseEnter() { }

    drawStraightLine(context, x1, y1, x2, y2) {
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }
}