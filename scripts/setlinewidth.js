$('#linewidth').bind('input', function (e) {
    var a = $('#linewidth').val();
    
    contextDraft.lineWidth = String(a);
    contextReal.lineWidth = String(a);

    contextDraft.strokeStyle=this.strokeColor;
    contextReal.strokeStyle=this.strokeColor;

});