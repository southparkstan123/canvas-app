class FirebaseService extends PaintFunction{
    constructor(canvas) {
        super();
        this.canvas = canvas;

        this.storageRef = firebase.storage().ref();
        this.database = firebase.database();
    }

    uploadCanvas(){
        let context = this.canvas.getContext('2d');
        let originalColor = context.fillStyle;//Store the original fill style

        context.globalCompositeOperation = 'destination-over';

        context.fillStyle = $("#background").spectrum('get').toHexString();//Set the color as the same as the canvas which is set in CSS
        context.fillRect(0,0,this.canvas.width,this.canvas.height);

        let service = this;

        this.canvas.toBlob(function(blob) {
            let d = new Date();
            let timestamp = d.getTime();
            let filename = 'canvas/' + timestamp;

            let storageRef = firebase.storage().ref();
            
            let canvasRef = storageRef.child(filename);
            canvasRef.put(blob).then(function(snapshot) {
                console.log(filename + 'is uploaded!');

                //Append the canvas to body
                canvasRef.getDownloadURL().then((link) => {

                    let canvasData = {
                        link: link,
                        createdAt: timestamp,
                      };

                    let database = firebase.database();
                    database.ref('canvas').child(timestamp).set(canvasData);

                    service.fetchLastestCanvas();

                });
            });
        });
        
        context.globalCompositeOperation = 'source-over';//Set default type of composite operation
        context.fillStyle = originalColor;//Set the color as the same as the original color
    }

    deleteCanvas(filename){
        // Create a reference to the file to delete
        let desertRef = this.storageRef.child('canvas/' + filename);

        // Delete the file
        desertRef.delete().then(function() {
            console.log('canvas/' + filename);
        }).catch(function(error) {
            console.log(error);
        });
    }

    fetchLastestCanvas(){
        let database = firebase.database();
        database.ref('canvas').orderByKey().limitToLast(1).once("value", function(snapshot) {
            var obj = snapshot.val();
            let canvasList = Object.values(obj);
            canvasList.forEach((item)=>{
                let newImg = document.createElement('img');
                
                newImg.src = item.link;
                newImg.style = "width:300px";
                document.body.appendChild(newImg);

            });
        });
    }

}