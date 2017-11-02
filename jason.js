class DrawingPolygon extends PaintFunction{
   constructor(contextReal,contextDraft){
       super();
       this.contextDraft = contextDraft;
       this.contextReal = contextReal;
       this.state = ‘step1’;
   }
   onMouseDown(coord,event){
       if(this.state===‘step1’){
//        this.contextReal.fillStyle = fill_color;
//        this.contextDraft.fillStyle = fill_color;
//        this.contextDraft.strokeStyle =line_color;
//        this.contextReal.strokeStyle =line_color;
//        this.contextDraft.lineCap = ‘round’;
//        this.contextDraft.lineJoin = “round”;
//        this.contextReal.lineCap = ‘round’;
//        this.contextReal.lineJoin = “round”;
//        this.contextDraft.lineWidth =line_width;
//        this.contextReal.lineWidth =line_width;
       this.origX = coord[0];
       this.origY = coord[1];
//        console.log(this.origX,this.origY);
       this.state = ‘step2’;
       }else if((coord[0]-this.origX)*(coord[0]-this.origX)+(coord[1]-this.origY)*(coord[1]-this.origY)>1001){
           this.contextReal.beginPath();
           this.contextReal.moveTo(this.origX2,this.origY2);
           this.contextReal.lineTo(coord[0],coord[1]);
           this.contextReal.fill();
           this.contextReal.stroke();
           this.contextReal.closePath();
           this.origX2=coord[0];
           this.origY2=coord[1];
           this.state =‘intermediate’;
       }else if((coord[0]-this.origX)*(coord[0]-this.origX)+(coord[1]-this.origY)*(coord[1]-this.origY)<1000){
           this.contextReal.beginPath();
           this.contextReal.moveTo(this.origX2,this.origY2);
           this.contextReal.lineTo(coord[0],coord[1]);
           this.contextReal.stroke();
           this.contextReal.closePath();
           this.contextReal.fill();
           this.state = ‘finishpolygon’;
       }
   }
   onDragging(coord,event){
       if(this.state === ‘step2’){
           console.log(‘step2’);
           this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
           this.contextDraft.beginPath();
           this.contextDraft.moveTo(this.origX,this.origY);
           this.contextDraft.lineTo(coord[0],coord[1]);
//            this.contextDraft.fill();
           this.contextDraft.stroke();
           this.contextDraft.closePath();
       }
   }
   onMouseMove(coord,event){
        if(this.state === ‘step3’||this.state ===‘intermediate’){
           console.log(‘step4’);
           this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
           this.contextDraft.beginPath();
           this.contextDraft.moveTo(this.origX2,this.origY2);
           this.contextDraft.lineTo(coord[0],coord[1]);
           this.contextDraft.stroke();
           this.contextDraft.closePath();
        }
   }
   onMouseUp(coord,event){
       if(this.state ===‘step2’){
           console.log(‘step3’);
           this.contextReal.beginPath();
           this.contextReal.moveTo(this.origX,this.origY);
           this.contextReal.lineTo(coord[0],coord[1]);
//            this.contextDraft.fill();
           this.contextReal.stroke();
           this.contextReal.closePath();
           this.origX2=coord[0];
           this.origY2=coord[1];
           console.log(this.origX2,this.origY2);
           this.state = ‘step3’;
       }else if(this.state ===‘intermediate’){
           console.log(‘hi’);
       }
       else if(this.state ===‘finishpolygon’){
           console.log(‘finish polygon’);
           this.contextReal.lineCap = ‘butt’;
           this.contextReal.lineJoin = “butt”;
           this.contextDraft.lineCap = ‘butt’;
           this.contextDraft.lineJoin = “butt”;
           this.state =‘step1’;
       }
   }
   onMouseLeave(){}
   onMouseEnter(){}
}
