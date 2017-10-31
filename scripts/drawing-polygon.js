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
        }//else if (this.state==='tomovingphase'{
        //     this.orig
        // })
    }

    onDragging(coord, event) {

    }

    onMouseMove(coord, event) {
        if (this.state === "step2" || this.state === "intermediate") {

            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX1, this.origY1);
            this.contextDraft.lineTo(coord[0], coord[1]);
            this.contextDraft.stroke();
            this.contextDraft.closePath();
            console.log(this.state);
        }
    }

    onMouseUp(coord, event) {

        if (this.state === "step2") {
            this.origX2 = coord[0];
            this.origY2 = coord[1];
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX1, this.origY1);
            this.contextDraft.lineTo(coord[0], coord[1]);
            this.contextDraft.stroke();
            this.contextDraft.closePath();

            this.state = "step3"

         }// else if (this.state === "intermediate") {
        //     this.origX3 = coord[0];
        //     this.origY3 = coord[1];
        //     this.contextDraft.beginPath();
        //     this.contextDraft.moveTo(this.origX2, this.origY2);
        //     this.contextDraft.lineTo(this.origX3, this.origY3);
        //     this.contextDraft.stroke();
        //     this.contextDraft.closePath();
        //     this.state = "intermediate";
        // }




    }
    onMouseLeave(coord, event, dragging) {

    }
    onMouseEnter() {
    }


}