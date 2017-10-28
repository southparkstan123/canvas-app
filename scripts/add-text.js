class AddText extends PaintFunction{
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
    }

    addText(context,text,size,style,xpos,ypos){
        context.strokeStyle = this.strokeColor;
        context.fillStyle=this.strokeColor;
        
        context.font = `${size}px Arial`;
        context.textBaseline = 'top';
        console.log(context.strokeStyle);
        if(style === 'stroke'){          
            context.strokeText(text,xpos,ypos);
        }else if(style === 'fill'){
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