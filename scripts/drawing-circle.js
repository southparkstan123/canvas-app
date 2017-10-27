class DrawingCircle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        //Reset
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.drawEllipse(this.contextDraft,this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);

    }

    onMouseMove(){}
    onMouseUp(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.drawEllipse(this.contextReal, this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
    }
    onMouseLeave(){}
    onMouseEnter(){}

    drawEllipse(context, startX, startY, width, height) {
        
        context.beginPath();
        
        context.moveTo(startX + width / 2, startY ); // A1
        
        context.bezierCurveTo(
            startX + width , startY , // C3
            startX + width , startY + height, // C4
            startX + width / 2, startY + height); // A1

        context.moveTo(startX + width / 2, startY + height); // A1
        
        context.bezierCurveTo(
            startX , startY + height , // C3
            startX , startY , // C4
            startX + width / 2, startY  ); // A1

        context.fill();
        context.closePath();	
    }
}