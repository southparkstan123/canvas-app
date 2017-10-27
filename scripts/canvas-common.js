let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let currentFunction;
let dragging = false;

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
$(document).mouseup(function (e) {
    let mouseX = e.pageX - $('#canvas-draft').get()[0].offsetLeft;
    let mouseY = e.pageY - $('#canvas-draft').get()[0].offsetTop;
    currentFunction.onMouseUp([mouseX, mouseY], e, dragging);
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
    constructor() {
        /*this.strokeColor = ""
        this.fillStyle = ""
        this.strokeStyle=""
        this.lineJoin=""
        this.lineCap="" */

    }

    // StokeColor() {
    //     $('element').StokeColor(function () {

    //     })
    // }

    onMouseDown() { }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }
}   