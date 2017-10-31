class AddText extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    addText(context, data, isDraft){
        console.log(data);
        
        var xpos = localStorage.getItem('x');
        var ypos = localStorage.getItem('y');

        context.textBaseline = 'top';
        context.strokeStyle = this.strokeColor;
        context.fillStyle=this.strokeColor;

        // Clear the draft context only
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

        switch(data.style) {
            case 'normal':
                context.font = `normal normal ${data.size}px ${data.fontFamily}`;
                break;
            case 'bold':
                context.font = `normal bold ${data.size}px ${data.fontFamily}`;
                break;
            case 'italic':
                context.font = `italic normal ${data.size}px ${data.fontFamily}`;
                break;
            case 'both':
                context.font = `italic bold ${data.size}px ${data.fontFamily}`;
                break;
            default:
                context.font = `normal normal ${data.size}px ${data.fontFamily}`;
                break;
        }

        if(data.text === null){
            data.text = "Your Text";
        }
        
        if(data.fillOrStroke === 'stroke'){          
            context.strokeText(data.text,xpos,ypos);
        }else{
            context.fillText(data.text,xpos,ypos);
        }

        if(!isDraft){
            this.removeAllTextData();
        }

    }
    onMouseDown(coord,event) {
        let textarea = null;
        this.canvas = document.getElementById("canvas-draft");

        localStorage.setItem('x',event.clientX - this.canvas.offsetLeft);
        localStorage.setItem('y',event.clientY - this.canvas.offsetTop);

        $('#xpos').text(localStorage.getItem('x'));
        $('#ypos').text(localStorage.getItem('y'));

        //Reset
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.addText(this.contextDraft,this.textDataHandler(),true);

    }

    textDataHandler(){
        let data = {};
        data = {
            'text' : localStorage.getItem('text'),
            'size' : localStorage.getItem('size'),
            'fillOrStroke' : localStorage.getItem('fillOrStroke'),
            'fontFamily' : localStorage.getItem('fontFamily'),
            'style' : localStorage.getItem('style'),
        }
        return data;
    }
    removeAllTextData(){
        localStorage.removeItem('text');
        localStorage.removeItem('size');
        localStorage.removeItem('fillOrStroke');
        localStorage.removeItem('fontFamily');
        localStorage.removeItem('style');
        localStorage.removeItem('x');
        localStorage.removeItem('y');
    }
    onChangeText(context, value){
        localStorage.setItem('text',value);
        this.addText(context, this.textDataHandler(),true);
    }
    onChangeSize(context, value){
        localStorage.setItem('size',value);
        this.addText(context, this.textDataHandler(),true);
    }
    onChangeSize(context, value){
        localStorage.setItem('size',value);
        this.addText(context, this.textDataHandler(),true);
    }
    onChangeFontFamily(context, value){
        localStorage.setItem('fontFamily',value);
        this.addText(context, this.textDataHandler(),true);
    }
    onChangeStyle(context, value){
        localStorage.setItem('style',value);
        this.addText(context, this.textDataHandler(),true);
    }
    onChangeFillOrStroke(context, value){
        localStorage.setItem('fillOrStroke',value);
        this.addText(context, this.textDataHandler(),true);
    }
    onSubmit(){
        this.addText(this.contextReal,this.textDataHandler(),false);
    }
    onInit(){

    }

    onDragging() {}
    onMouseMove() { }
    onMouseUp() {}


    onMouseLeave() { }
    onMouseEnter() { }
}