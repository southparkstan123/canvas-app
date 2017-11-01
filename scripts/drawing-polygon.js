class DrawingPolygon extends PaintFunction {
    constructor() {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.state = "step1";
    }

    onMouseDown(coord, event) {
        if (this.state === "step1") {
            this.origX = coord[0];
            this.origY = coord[1];
            console.log(this.state);
            this.state = "step2";
        } else if (Math.pow(Math.max(coord[0] - this.origX, coord[1] - this.origY), 2) > 40) { //calcalate if the line falls into an area of radius of 5px;
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX1, this.origY1);
            this.contextReal.lineTo(coord[0], coord[1]);
            this.contextReal.stroke();
            this.contextReal.closePath();
            this.origX1 = coord[0];
            this.origY1 = coord[1];
            this.state = "intermediate";
        } else if (Math.pow(Math.max(coord[0] - this.origX, coord[1] - this.origY), 2) < 40) {
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX1, this.origY1);
            this.contextReal.lineTo(this.origX, this.origY);
            this.contextReal.stroke();
            this.contextReal.closePath();
            this.origX1 = coord[0];
            this.origY1 = coord[1];
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.state = 'EndStage';

        }
    }

    onDragging(coord, event) {
        if (this.state === 'step2') {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY);
            this.contextDraft.lineTo(coord[0], coord[1]);
            this.contextDraft.stroke();
            this.contextDraft.closePath();
            console.log(this.state);
        }
    }

    onMouseMove(coord, event) {
        if (this.state === "step3" || this.state === "intermediate") {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX1, this.origY1);
            this.contextDraft.lineTo(coord[0], coord[1]);
            this.contextDraft.stroke();
            this.contextDraft.closePath();
            console.log(this.state);
            if (Math.pow(Math.max(coord[0] - this.origX, coord[1] - this.origY), 2) < 40) {
                this.contextDraft.strokeColor = '#F60000';
            }
        }
    }

    onMouseUp(coord, event) {
        if (this.state === "step2") {

            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX1, this.origY1);
            this.contextReal.lineTo(coord[0], coord[1]);
            this.contextReal.stroke();
            this.contextReal.closePath();
            this.origX1 = coord[0];
            this.origY1 = coord[1];
            this.state = "step3"
            console.log(this.state);

        } else if (this.state === "intermediate") {
        } else if (this.state === "End") {
            this.state === 'start';
        }

    }
    onMouseLeave() { }
    onMouseEnter() { }


}