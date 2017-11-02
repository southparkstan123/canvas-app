function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


class DrawingRandom extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
    this.points = [];
  }
  onMouseDown(coord, event, dragging) {
    dragging = true;
    this.points.push({
      x: coord[0],
      y: coord[1],
      radius: getRandomInt(10, 30),
      opacity: Math.random()
    });
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

    }
  }
  onMouseMove() { }

  onMouseUp(coord, event, dragging) {
    dragging = false;
    this.points.length = 0;
  }
  onMouseLeave() { }
  onMouseEnter() { }
}