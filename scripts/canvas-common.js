let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let currentFunction;
let dragging = false;

// added for Undo
var undoList = new Array();
var sShot = -1;

$('#canvas-draft').mousedown(function (e) {
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseDown([mouseX, mouseY], e);

    dragging = true; 
});
$('#canvas-draft').mousemove(function (e) {
    if (dragging) {
        let mouseX = e.pageX - this.offsetLeft;
        let mouseY = e.pageY - this.offsetTop;
        currentFunction.onDragging([mouseX, mouseY], e);
    }
    currentFunction.onMouseMove(e, this);
});
$('#canvas-draft').mouseup(function (e) {
    let mouseX = e.pageX - $('#canvas-draft').get()[0].offsetLeft;
    let mouseY = e.pageY - $('#canvas-draft').get()[0].offsetTop;
    currentFunction.onMouseUp([mouseX, mouseY], e, dragging);

    // added for Undo, calls below for every mouseup action
    undoList.push(canvasReal.toDataURL());
    // console.log(undoList) to check toDataURL captured;
    
    dragging = false;
});
$('#canvas-draft').mouseleave(function (e) {
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$('#canvas-draft').mouseenter(function (e) {
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseEnter([mouseX, mouseY], e);
});


class PaintFunction {
    constructor() { }
    onMouseDown() { }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }
}   