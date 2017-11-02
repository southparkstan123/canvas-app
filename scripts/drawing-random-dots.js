function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// var color = 0;


class DrawingRandomDots extends PaintFunction {
  constructor(contextDraft, contextReal) {
    super();
    this.contextDraft = contextDraft;
    this.contextReal = contextReal;
    this.points = [];
  }
  onMouseDown(coord, event, dragging) {
    this.points.push({
      x: coord[0],
      y: coord[1],
      radius: getRandomInt(10, 30),
      opacity: Math.random()
    });

    // color++;
    this.contextReal.fillStyle = 'hsl("+color+,100%,50%")';
  }
  onDragging(coord, event, dragging) {
    this.points.push({
      x: coord[0],
      y: coord[1],
      radius: getRandomInt(5, 20),
      opacity: Math.random()
    });
  
    this.contextReal.clearRect(0, 0, this.contextReal.canvas.width, this.contextReal.canvas.height);
    for (var i = 0; i < this.points.length; i++) {
      this.contextReal.beginPath();
      this.contextReal.globalAlpha = this.points[i].opacity;
      this.contextReal.arc(
        this.points[i].x, this.points[i].y, this.points[i].radius,
        false, Math.PI * 2, false);
      this.contextReal.fill(); //start drawing on canvas
      // color++;
      // this.contextReal.fillStyle = 'hsl(' + color + ',100%,50%)';
    }

  }
  onMouseMove() { }

  onMouseUp(coord, event, dragging) {
    this.points.length = 0;
  }
  onMouseLeave() { }
  onMouseEnter() { }

}