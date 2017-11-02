class AddText extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    //Set Default values
    reset(){
        this.isStroke = false;
        this.fontSize = '9';
        this.fontFamily = 'Arial';
        this.fontWeight = 'normal';
        this.fontStyle = 'normal';
        this.text = '';
        this.input = $('<input/>',{type:"text",name:"input",value:"",id:"inputBox"});

        $('select[name="fontFamily"]').val(this.fontFamily);
        $('select[name="fontWeight"]').val(this.fontWeight);
        $('select[name="fontStyle"]').val(this.fontStyle);
        $('select[name="fillOrStroke"]').val("fill");

    }

    onMouseDown(coord,event) {
        this.canvas = document.getElementById("canvas-draft");

=======

        this.origX = coord[0];
        this.origY = coord[1];
>>>>>>> 7fb67265f0cd4a503d5fa6a64c07922391df3dc9

        //Reset
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);


=======
        if(this.input["0"].value == ""){

            this.reset();


=======
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
>>>>>>> 7fb67265f0cd4a503d5fa6a64c07922391df3dc9

    onChangeSize(coord,value){
        this.fontSize = value;
        if($('#inputBox').length != 0){
            $('#inputBox').css('font-size', this.fontSize);
        }else{
            // Reset
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            // Modify the style
            this.addText(this.contextDraft, this.text, coord[0], coord[1], this.isStroke, this.fontSize, this.fontStyle, this.fontWeight, this.fontFamily);                   
        }
    }

    onChangeFontFamily(coord,value){
        this.fontFamily = value;
        if($('#inputBox').length != 0){
            $('#inputBox').css('font-family', this.fontFamily);
        }else{
            // Reset
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            // Modify the style
            this.addText(this.contextDraft, this.text, coord[0], coord[1], this.isStroke, this.fontSize, this.fontStyle, this.fontWeight, this.fontFamily);                   
        }
    }

    onChangeFillOrStroke(coord,value){
        if(value === 'stroke'){          
            this.isStroke = true;
        }else{
            this.isStroke = false;
        }

        if($('#inputBox').length === 0){
            // Reset
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            // Modify the style
            this.addText(this.contextDraft, this.text, coord[0], coord[1], this.isStroke, this.fontSize, this.fontStyle, this.fontWeight, this.fontFamily);     
        }
    }

    onChangeStyle(coord,value){
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

        if($('#inputBox').length != 0){
            $('#inputBox').css('font-style', this.fontStyle);
            $('#inputBox').css('font-weight', this.fontWeight);
        }else{
            // Reset
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            // Modify the style
            this.addText(this.contextDraft, this.text, coord[0], coord[1], this.isStroke, this.fontSize, this.fontStyle, this.fontWeight, this.fontFamily);                   
        }
    }

    onDblClick(coord,event){
        this.addText(this.contextReal, this.text, coord[0], coord[1], this.isStroke, this.fontSize, this.fontStyle, this.fontWeight, this.fontFamily);
        $('#inputBox').remove();

        //Reset the canvas
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

        //Clear the content and style of input and new input box can be appended to canvas
        this.input["0"].value = "";

        this.reset();
    }

    onDragging() {}
    onMouseMove() { }
    onMouseUp() {}
    onMouseLeave() { }
    onMouseEnter() { }
}