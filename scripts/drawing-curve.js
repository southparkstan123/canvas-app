class DrawingCurve extends PaintFunction {
    constructor() {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.state = "startingphase";
    }

    onMouseDown(coord, event) {
        if (this.state === "startingphase") {
            this.origX1 = coord[0];
            this.origY1 = coord[1];
            console.log(this.state);
            this.state = "todraggingphase";
        }
    }

    onDragging(coord, event) {
        if (this.state === "todraggingphase") {
            this.origX2 = coord[0];
            this.origY2 = coord[1];
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX1, this.origY1);
            this.contextDraft.lineTo(coord[0], coord[1]);
            this.contextDraft.stroke();
            console.log(this.state);
         } 
    }

    onMouseMove(coord, event) {
        if (this.state === "toMouseReleasePhase") {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX1, this.origY1);
            this.contextDraft.quadraticCurveTo(coord[0], coord[1], this.origX2, this.origY2)
            this.contextDraft.stroke();
            this.contextDraft.closePath();
        }
    }

    onMouseUp(coord, event) {
        if (this.state === "todraggingphase") {
            this.state = "toMouseReleasePhase";
        }else if (this.state === "toMouseReleasePhase") {
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX1, this.origY1);
            this.contextReal.quadraticCurveTo(coord[0], coord[1], this.origX2, this.origY2)
            this.contextReal.stroke();
            this.contextReal.closePath();
            this.contextDraft.closePath();
            this.state = "startingphase";
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

        }
    }
    onMouseLeave(coord, event, dragging) {

    }
    onMouseEnter() {
    }


}