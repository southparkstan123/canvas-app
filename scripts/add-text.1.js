class AddText extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.isStroke = false;
        //Set Default values
        this.fontSize = '9';
        this.fontFamily = 'Arial';
        this.fontWeight = 'normal';
        this.fontStyle = 'normal';
        this.text = '';
        this.input = $('<input/>',{type:"text",name:"input",value:"",id:"inputBox"});
    }

    onMouseDown(coord,event) {
        this.canvas = document.getElementById("canvas-draft");

        this.origX = coord[0];
        this.origY = coord[1];

        $('#xpos').text(coord[0]);
        $('#ypos').text(coord[1]);

        //Reset
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

        if(this.input["0"].value == ""){
            $('div.buttons').append(this.input);

            this.input.css({
                left: coord[0],
                top: coord[1],
                "z-index": "1",
                position: 'absolute',
            });
        }else{
            this.text = this.input["0"].value;
            this.fontSize = this.input["0"].style.fontSize;

            $('#inputBox').remove();

        }
        this.addText(this.contextDraft, this.text, coord[0], coord[1], this.isStroke, this.fontSize, this.fontStyle, this.fontWeight, this.fontFamily);
    }

    addText(context, text, xpos, ypos, isStroke, fontSize, fontStyle, fontWeight, fontFamily){
        context.font = `${fontStyle} ${fontWeight} ${fontSize} ${fontFamily}`;
        context.strokeStyle = this.strokeColor;
        context.fillStyle = this.fillColor;

        if(isStroke){
            context.strokeText(text, xpos, ypos);
        }else{
            context.fillText(text, xpos, ypos);
        }
    }

    onChangeSize(value){
        this.fontSize = value;
        $('#inputBox').css('font-size', this.fontSize);
    }

    onChangeFontFamily(value){
        this.fontFamily = value;
        $('#inputBox').css('font-family', this.fontFamily);
    }

    onChangeFillOrStroke(value){
        if(value === 'stroke'){          
            this.isStroke = true;
        }else{
            this.isStroke = false;
        }
    }

    onChangeStyle(value){
        switch(value) {
            case 'normal':
                this.fontWeight = 'normal';
                this.fontStyle = 'normal';
                break;
            case 'bold':
                this.fontWeight = 'bold';
                this.fontStyle = 'normal';
                break;
            case 'italic':
                this.fontWeight = 'normal';
                this.fontStyle = 'italic';
                break;
            case 'both':
                this.fontWeight = 'bold';
                this.fontStyle = 'italic';
                break;
            default:
                this.fontWeight = 'normal';
                this.fontStyle = 'normal';
                break;
        }

        $('#inputBox').css('font-style', this.fontStyle);
        $('#inputBox').css('font-weight', this.fontWeight);
    }

    onDblClick(coord,event){
        this.addText(this.contextReal, this.text, coord[0], coord[1], this.isStroke, this.fontSize, this.fontStyle, this.fontWeight, this.fontFamily);
        $('#inputBox').remove();
    }

    onDragging() {}
    onMouseMove() { }
    onMouseUp() {}
    onMouseLeave() { }
    onMouseEnter() { }
}