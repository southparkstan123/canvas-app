class AddText extends PaintFunction{
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
    }

    addText(context,text,fillOrStroke,fontFamily,size,style,xpos,ypos){
        context.strokeStyle = this.strokeColor;
        context.fillStyle=this.strokeColor;
        switch(style) {
            case 'normal':
                context.font = `normal normal ${size}px ${fontFamily}`;
                break;
            case 'bold':
                context.font = `normal bold ${size}px ${fontFamily}`;
                break;
            case 'italic':
                context.font = `italic normal ${size}px ${fontFamily}`;
                break;
            case 'both':
                context.font = `italic bold ${size}px ${fontFamily}`;
                break;
        }
        
        context.textBaseline = 'top';
        console.log(context.font);
        if(fillOrStroke === 'stroke'){          
            context.strokeText(text,xpos,ypos);
        }else if(fillOrStroke === 'fill'){
            context.fillText(text,xpos,ypos);
        }
    }

    onMouseDown() { }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }
}