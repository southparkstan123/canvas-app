class EyeDropper extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
        this.moving = false;
    }

    onMouseDown(coord, event) {
        var pxData = this.contextReal.getImageData(coord[0], coord[1], 1, 1);
        if (this.moving == false) {
            $("#strokestyle").spectrum("set", "rgb(" + pxData.data[0] + "," + pxData.data[1] + "," + pxData.data[2] + ")");
            this.moving = true;
        }
    }
    onDragging() { }
    onMouseMove(coord, event) {
        var pxData = this.contextReal.getImageData(coord[0], coord[1], 1, 1);
        if (this.moving == false) {
            $("#strokestyle").spectrum("set", "rgb(" + pxData.data[0] + "," + pxData.data[1] + "," + pxData.data[2] + ")");
        }
    }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }


}