$('#linedash').bind('input', function (e) {
    var a = $('#linedash').val();
    console.log(a);
    contextDraft.setLineDash=String(a);
    contextReal.setLineDash=String(a);

});