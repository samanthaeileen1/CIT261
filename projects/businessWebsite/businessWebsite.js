/*
 shoutout to http://www.java2s.com/Tutorials/Javascript/Canvas_How_to/Shape/Draw_Heart_shape.htm
for giving me a start on this. Especially with the crazy math stuff 
*/

function makeHeart() {

canvas = document.getElementById("heart");
var context = canvas.getContext("2d");
canvas.x = 150;
canvas.y = 150;
var w = 200, h = 200;
context.strokeStyle = "#000000";
context.strokeWeight = 3;
context.shadowOffsetX = 4.0;
context.shadowOffsetY = 4.0;
context.lineWidth = 10.0;
context.fillStyle = "#FF0000";
var d = Math.min(w, h);
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