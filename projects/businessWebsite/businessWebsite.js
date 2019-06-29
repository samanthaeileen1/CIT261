/*
 shoutout to http://www.java2s.com/Tutorials/Javascript/Canvas_How_to/Shape/Draw_Heart_shape.htm
for giving me a start on this. Especially with the crazy math stuff 
*/

function makeHeart() {

var heart = document.getElementById("heart");
var context = heart.getContext("2d");
/*dimensions*/
    context.x = 150;
    context.y = 150;
    var width  = 400;
    var height = 400;
    /*styles*/
    context.strokeStyle = "#B3CD61";
    context.strokeWeight = 2;
    
    /*not sure*/
    context.shadowOffsetX = 4.0;
    context.shadowOffsetY = 4.0;
    context.lineWidth = 10.0;
    /*don't know if this works as a word instead of numbers*/
    context.fillStyle = "pink";
    var d = Math.min(width, height);
    var k = 120;
    context.moveTo(k, k + d / 4);
    context.quadraticCurveTo(k, k, k + d / 4, k);
    context.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
    context.quadraticCurveTo(k + d / 2, k, k + d * 3/4, k);
    context.quadraticCurveTo(k + d, k, k + d, k + d / 4);
    context.quadraticCurveTo(k + d, k + d / 2, k + d * 3/4, k + d * 3/4);
    context.lineTo(k + d / 2, k + d);
    context.lineTo(k + d / 4, k + d * 3/4);
    context.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
    context.stroke();
    context.fill();
}