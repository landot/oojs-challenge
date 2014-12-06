/*
    shapes.js
    This is where your code goes

    Write the code to create rectangle and circle classes that extend the
    Shape class defined in shape.js. Then create a couple of other subclasses that
    render different sorts of shapes using the HTML <canvas> functions.
    http://www.w3schools.com/tags/ref_canvas.asp

    You can use either the classical or the prototypal style to create your subclasses

    After you've written the code for the sublcasses, call either registerPrototypalShape()
    or registerClassicalShape() to register your new shapes with the application. See the
    app.js file for info on these functions.
 */

function Rectangle(left, top, width, height, stylesMap) {
    //initialization code
    Shape.call(this, left, top, width, height, stylesMap);
    //override the renderShape function
    this.renderShape = function(canvasCtx) {
        canvasCtx.fillRect(this.left, this.top, this.width, this.height);
    };
}

//code to set Rectangle.prototype
Rectangle.prototype = new Shape();

//register new shape with the system
registerClassicalShape('Rectangle', Rectangle);


function Circle(left, top, width, height, stylesMap) {
    // initialization node
    Shape.call(this, left, top, width, height, stylesMap);
    //overrid the renderShape function
    this.renderShape = function(canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.arc(this.left, this.top, (this.width / 2), 0, (2 * Math.PI));
        canvasCtx.fill()
        canvasCtx.stroke();
    }

  
}
//code to set Circle.prototype
Circle.prototype = new Shape();
registerClassicalShape('Circle', Circle);


function DrawImage(left, top, width, height, stylesMap) {
    Shape.call(this, left, top, width, height, stylesMap);
    var img = new Image();
    img.src = 'img/corgi.jpg';
    this.renderShape = function(canvasCtx) {
        canvasCtx.drawImage(img, this.left, this.top);
    }
}

DrawImage.prototype = new Shape();
registerClassicalShape('Corgi', DrawImage)


