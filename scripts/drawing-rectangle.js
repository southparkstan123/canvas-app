class DrawingRectangle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextDraft.strokeStyle = this.strokeColor;
        this.contextDraft.fillStyle = this.fillColor;
        this.contextReal.strokeStyle = this.strokeColor;
        this.contextReal.fillStyle = this.fillColor;
    }
    onDragging(coord, event) {
        this.contextDraft.strokeStyle = this.strokeColor;
        this.contextDraft.fillStyle = this.fillColor;
        
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.fillRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
        this.contextDraft.strokeRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
    }

    onMouseMove() { }
    onMouseUp(coord, event, dragging) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.strokeStyle = this.strokeColor;
        this.contextReal.fillStyle = this.fillColor;
        if (dragging) {
            this.contextReal.strokeStyle = this.strokeColor;
            this.contextReal.fillStyle = this.fillColor;
            this.contextReal.fillRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
            this.contextReal.strokeRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);

        }
    }
    onMouseLeave() { }
    onMouseEnter() { }

}