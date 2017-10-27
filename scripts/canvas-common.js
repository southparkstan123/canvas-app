let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let currentFunction;
let dragging = false;
let isOutsideCanvas = false;

// $('#canvas-draft').mouseenter(function(){isOnDiv=true;});
// $('#canvas-draft').mouseleave(function(){isOnDiv=false;});

$('#canvas-draft').mousedown(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseDown([mouseX,mouseY],e);
    dragging = true;
});
$('#canvas-draft').mousemove(function(e){
    // console.log(dragging);
    if(dragging){
        let mouseX = e.pageX - this.offsetLeft;
        let mouseY = e.pageY - this.offsetTop;
        currentFunction.onDragging([mouseX,mouseY],e);
    }
    currentFunction.onMouseMove(e,this);
});
$(document).mouseup(function(e){
    dragging = false;
    let mouseX = e.pageX - $('#canvas-draft').get()[0].offsetLeft;
    let mouseY = e.pageY - $('#canvas-draft').get()[0].offsetTop;
    currentFunction.onMouseUp([mouseX,mouseY],e);
});
$('#canvas-draft').mouseleave(function(e){
    // dragging = false;
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseLeave([mouseX,mouseY],e);  
});

$('#canvas-draft').mouseenter(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseEnter([mouseX,mouseY],e);
});

class PaintFunction{
    constructor(){}
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}    
