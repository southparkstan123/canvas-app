let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let currentFunction;
let dragging = false;

// added for Undo
var undoList = new Array();
var sShot = -1;

var borderWidth = 10;

function desktopMode() {
    $('#canvas-draft').mousedown(function (e) {
        let mouseX = e.pageX - this.offsetLeft - borderWidth;
        
        let mouseY = e.pageY - this.offsetTop - borderWidth;
        console.log(mouseX, mouseY, $('.menu').width());
        currentFunction.onMouseDown([mouseX, mouseY], e);
        dragging = true;
    });
    $('#canvas-draft').dblclick(function (e) {
        dragging = false;
        let mouseX = e.pageX - this.offsetLeft - borderWidth;
        let mouseY = e.pageY - this.offsetTop - borderWidth;
        currentFunction.onDblClick([mouseX, mouseY], e);
    });
    $('#canvas-draft').mousemove(function (e) {
        if (dragging) {
            let mouseX = e.pageX - this.offsetLeft - borderWidth;
            let mouseY = e.pageY - this.offsetTop - borderWidth;
            currentFunction.onDragging([mouseX, mouseY], e);
        }
        let mouseX = e.pageX - this.offsetLeft - borderWidth;
        let mouseY = e.pageY - this.offsetTop - borderWidth;
        currentFunction.onMouseMove([mouseX, mouseY], e, this);
    });
    $('#canvas-draft').mouseup(function (e) {
        let mouseX = e.pageX - $('#canvas-draft').get()[0].offsetLeft - borderWidth;
        let mouseY = e.pageY - $('#canvas-draft').get()[0].offsetTop - borderWidth;
        currentFunction.onMouseUp([mouseX, mouseY], e, dragging);

        // added for Undo, calls below for every mouseup action
        undoList.push(canvasReal.toDataURL());
        // console.log(undoList) to check toDataURL captured;

        dragging = false;
    });
    $('#canvas-draft').mouseleave(function (e) {
        let mouseX = e.pageX - this.offsetLeft - borderWidth;
        let mouseY = e.pageY - this.offsetTop - borderWidth;
        currentFunction.onMouseLeave([mouseX, mouseY], e);
    });

    $('#canvas-draft').mouseenter(function (e) {
        let mouseX = e.pageX - this.offsetLeft - borderWidth;
        let mouseY = e.pageY - this.offsetTop - borderWidth;
        currentFunction.onMouseEnter([mouseX, mouseY], e);
    });
}
// function mobileMode(){
//     var hammertime = new Hammer(canvasDraft);
//     hammertime.on('drag swipe tap press pan panup pandown', function(ev) {
//     console.log(ev.type);
//     });

//     hammertime.on('panstart',function(ev){
//         let mouseX = ev.center.x - canvasDraft.offsetLeft;
//         let mouseY = ev.center.y - canvasDraft.offsetTop -16;
//         currentFunction.onMouseDown([mouseX,mouseY],ev);
//         dragging = true;
//     })
//     hammertime.on('panmove',function(ev){
//         let mouseX = ev.center.x - canvasDraft.offsetLeft;
//         let mouseY = ev.center.y - canvasDraft.offsetTop;
//         currentFunction.onDragging([mouseX,mouseY],ev);

//     });
//     hammertime.on('panend',function(ev){
//         let mouseX = ev.center.x - canvasDraft.offsetLeft;
//         let mouseY = ev.center.y - canvasDraft.offsetTop;
//         currentFunction.onMouseUp([mouseX,mouseY],ev);
//     });
// }

$(document).ready(function(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width()<768) {
        // mobileMode();
        alert();
    }
    else if ($(window).width()>767){
        desktopMode();
    }
});

$('#canvas-draft').dblclick(function (e) {
    let mouseX = e.pageX - this.offsetLeft - borderWidth;
    let mouseY = e.pageY - this.offsetTop - borderWidth;
    currentFunction.onDblClick([mouseX, mouseY], e);
});


class PaintFunction {
    constructor() {
        this.strokeColor = $('#strokestyle').spectrum('get'); //After using the eyedropper, we need these codes to make sure all the things are painted in our desired style.
        this.fillStyle = $('#fillstyle').spectrum('get');
    }

    get lineWidth() {
        return document.querySelector('#linewidth').value
    }

    onMouseDown() { }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }
    onDblClick() { }
}