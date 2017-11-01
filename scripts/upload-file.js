function readImage() {
    if ( this.files && this.files[0] ) {
        var FR= new FileReader();
        FR.onload = function(e) {
           var img = new Image();
           img.addEventListener("load", function() {
             contextReal.drawImage(img, 0, 0);
           });
           img.src = e.target.result;
        };       
        FR.readAsDataURL( this.files[0] );
    }
}

document.getElementById("fileUpload").addEventListener('change',readImage, false);