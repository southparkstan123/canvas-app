class AddText extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord,event) {
        this.canvas = document.getElementById("canvas-draft");
        this.strokeColor = $('#strokestyle').spectrum('get');
        this.fontFamily=$('#font-family').val();
        this.style=$('#style').val();
        this.fontSize=$('#size').val() + 'px';

        //Reset
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

        let textarea = $('<textarea></textarea>');

        textarea.draggable({ //from jquery UI
            cancel: "",
            start:function (){
                $("#textarea").focus();
            },
            stop:function(){
                $('#textarea').focus();
            }
        }).css({
            left: coord[0],
            top: coord[1],
            fontFamily: this.fontFamily,
            fontSize:this.size,
            width:'150px',
            height:'70px',
        });  
        
        $

        $('#canvas-container').append(textarea);

    }


    addText(coord, data){

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