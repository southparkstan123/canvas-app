$('#linetype').bind('input', function (e) {
    var a = $('#linetype').val();

    contextDraft.lineCap = String(a);
    contextReal.lineCap = String(a);

});