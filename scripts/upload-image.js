class UploadImage extends PaintFunction{
    constructor(canvas) {
        super();
        this.canvas = canvas;
    }

    uploadImage(){
        let context = this.canvas.getContext('2d');
        let originalColor = context.fillStyle;//Store the original fill style

        context.globalCompositeOperation = 'destination-over';

        context.fillStyle = $("#background").spectrum('get').toHexString();//Set the color as the same as the canvas which is set in CSS

        context.fillRect(0,0,this.canvas.width,this.canvas.height);

        this.canvas.toBlob(function(blob) {
            let d = new Date();
            let timestamp = d.getTime();
            let filename = 'canvas/' + timestamp;

            let storageRef = firebase.storage().ref();

            let canvasRef = storageRef.child(filename);
            canvasRef.put(blob).then(function(snapshot) {
                console.log(filename + 'is uploaded!');

                let myRef = storageRef.child('canvas');
                console.log(storageRef.parent);

                //Append the canvas to body
                canvasRef.getDownloadURL().then((link) => {
                    let newImg = document.createElement('img');

                    newImg.src = link;
                    newImg.style = "width:100px";
                    document.body.appendChild(newImg);
                });
            });
        });
        
        context.globalCompositeOperation = 'source-over';//Set default type of composite operation
        context.fillStyle = originalColor;//Set the color as the same as the original color
    }
}