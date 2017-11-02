$('#linejoin').bind('input', function (e) {
    var a = $('#linejoin').val();
    
    contextDraft.lineJoin = String(a);
    contextReal.lineJoin = String(a);

});