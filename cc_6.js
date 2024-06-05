//U4888-2664 - Dawson Schmitt
//Here is tying this javascript file to the canvas file.
let canvas = document.querySelector("#HTMLCanvas");
let ctx = canvas.getContext("2d");
//missed this part in the last submission so here it is now
let width =HTMLCanvas.width;
let height = HTMLCanvas.height;

//Task 2: Create a JavaScript constructor class with specific properties.
class Ball{
    constructor (x,y,radius,dx,dy,color,){
    this.x = x
    this.y = y
    this.radius = radius
    this.dx = dx
    this.dy = dy
    this.color = color
    }
}