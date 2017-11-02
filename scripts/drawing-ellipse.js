class DrawingEllipse extends PaintFunction {
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
        //Reset
        this.contextDraft.strokeStyle = this.strokeColor;
        this.contextDraft.fillStyle = this.fillColor;
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.drawEllipse(this.contextDraft, this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);

    }

    onMouseMove() { }
    onMouseUp(coord, event, dragging) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        if (dragging) {
            this.contextReal.strokeStyle = this.strokeColor;
            this.contextReal.fillStyle = this.fillColor;
            this.drawEllipse(this.contextReal, this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
        }
    }
    onMouseLeave() { }
    onMouseEnter() { }

    drawEllipse(context, startX, startY, width, height) {

        context.beginPath();

        context.moveTo(startX + width / 2, startY);

        context.bezierCurveTo(
            startX + width, startY,
            startX + width, startY + height,
            startX + width / 2, startY + height);

        context.moveTo(startX + width / 2, startY + height);

        context.bezierCurveTo(
            startX, startY + height,
            startX, startY,
            startX + width / 2, startY);

        context.fill();
        context.stroke();
        context.closePath();
    }
}