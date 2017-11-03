class Eraser extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event, originalcolor) {
        this.contextReal.beginPath();
        this.contextDraft.beginPath();
    }

    onDragging(coord, event) {
        console.log(this.contextDraft.globalAlpha);
        console.log(this.contextReal.globalAlpha);
        this.contextReal.globalCompositeOperation = "destination-out"; //can change the color of the background after Change bg color function
        this.draw(this.contextReal, coord[0], coord[1]);
        this.contextReal.globalCompositeOperation = 'source-over';
        this.contextReal.lineCap = "round";

        this.contextDraft.globalCompositeOperation = "destination-out"; //can change the color of the background after Change bg color function
        this.draw(this.contextDraft, coord[0], coord[1]);
        this.contextDraft.globalCompositeOperation = 'source-over';
        this.contextDraft.lineCap = "round";
    }

    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave(coord, event, dragging) {
        if (dragging) {
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(coord[0], coord[1]);
            this.draw(this.contextDraft, coord[0], coord[1]);
            this.contextDraft.closePath();

            this.contextReal.beginPath();
            this.contextReal.moveTo(coord[0], coord[1]);
            this.draw(this.contextReal, coord[0], coord[1]);
            this.contextReal.closePath();
        }
    }

    onMouseEnter() { }

    draw(context, x, y) {
        context.lineTo(x, y);
        context.moveTo(x, y);
        context.closePath();
        context.stroke();
    }
}