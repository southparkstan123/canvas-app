function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class DrawingRandomDots extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextDraft = contextDraft;
    this.contextReal = contextReal;
    this.points = [];
    this.originalFillStyle = this.contextDraft.fillStyle ;
  }
  onMouseDown(coord, event, dragging) {
    this.points.push({
      x: coord[0],
      y: coord[1],
      radius: getRandomInt(10, 30),
      opacity: Math.random()
    });

    // color++;
    this.contextDraft.fillStyle = 'hsl("+color+,100%,50%")';
  }
  onDragging(coord, event, dragging) {
    this.points.push({
      x: coord[0],
      y: coord[1],
      radius: getRandomInt(5, 20),
      opacity: Math.random()
    });
  
    // this.contextReal.clearRect(0, 0, this.contextReal.canvas.width, this.contextReal.canvas.height);
    for (var i = 0; i < this.points.length; i++) {
      this.contextDraft.beginPath();
      this.contextDraft.strokeStyle = this.strokeColor;
      this.contextDraft.fillStyle = this.fillColor;
      this.contextDraft.globalAlpha = this.points[i].opacity;
      this.contextDraft.arc(
        this.points[i].x, this.points[i].y, this.points[i].radius,
        false, Math.PI * 2, false);
      this.contextDraft.fill(); //start drawing on canvas
      // color++;
      // this.contextReal.fillStyle = 'hsl(' + color + ',100%,50%)';
      
    }
    console.log(this.points);
  }
  onMouseMove() { }

  onMouseUp(coord, event, dragging) {
    for (var i = 0; i < this.points.length; i++) {
      this.contextReal.beginPath();
      this.contextReal.strokeStyle = this.strokeColor;
      this.contextReal.fillStyle = this.fillColor;
      this.contextReal.globalAlpha = this.points[i].opacity;
      this.contextReal.arc(
        this.points[i].x, this.points[i].y, this.points[i].radius,
        false, Math.PI * 2, false);
      this.contextReal.fill();

      
      }
      console.log(this.contextReal);
      console.log('haha ' + this.points);
      this.contextReal.globalAlpha = 1;
      this.contextDraft.globalAlpha = 1;
      this.contextDraft.fillStyle = this.originalFillStyle;
      
  }
  onMouseLeave() { }
  onMouseEnter() { }

}