class AddText extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord,event) {
        this.canvas = document.getElementById("canvas-draft");

        // this.origX = coord[0];
        // this.origY = coord[1];

        //Reset
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

        // var x = event.clientX - this.canvas.offsetLeft,
        //     y = event.clientY - this.canvas.offsetTop;
        
        let textarea = $('<textarea></textarea>');

        textarea.draggable({
            cancel: ""
        }).css({
            left: coord[0],
            top: coord[1]
        });  
        
        $('#canvas-container').append(textarea);

        

    }


    addText(context, data, isDraft){


    }

    onChangeSize(textarea, value){
        $('#canvas-container textarea').css('font-size', value);
    }

    onChangeFontFamily(textarea, value){
        $('#canvas-container textarea').css('font-family', value);
    }

    onChangeStyle(textarea, value){
        let fontWeight = '', fontStyle = '';
        switch(value) {
            case 'normal':
                fontWeight = 'normal';
                fontStyle = 'normal';
                break;
            case 'bold':
                fontWeight = 'bold';
                fontStyle = 'normal';
                break;
            case 'italic':
                fontWeight = 'normal';
                fontStyle = 'italic';
                break;
            case 'both':
                fontWeight = 'bold';
                fontStyle = 'italic';
                break;
            default:
                fontWeight = 'normal';
                fontStyle = 'normal';
                break;
        }

        $('#canvas-container textarea').css('font-style', fontStyle);
        $('#canvas-container textarea').css('font-weight',fontWeight);
    }

    onInit(){

    }

    onDragging() {}
    onMouseMove() { }
    onMouseUp() {}


    onMouseLeave() { }
    onMouseEnter() { }
}