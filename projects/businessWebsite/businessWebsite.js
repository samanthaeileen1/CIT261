/*
 shoutout to http://www.java2s.com/Tutorials/Javascript/Canvas_How_to/Shape/Draw_Heart_shape.htm
for giving me a start on this. Especially with the crazy math stuff 
*/
function makeHeart() {

canvas = document.getElementById("heart");
var context = canvas.getContext("2d");
var width = 300;
var height = 100;
context.strokeStyle = "#B3CD61"; /*GREEN*/
context.strokeWeight = 2;
context.lineWidth = 10.0;
context.fillStyle = "pink";
var d = Math.min(width, height);
var k = 60;
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




function triggerOpacityAnimation() {
    var body = document.getElementById("body");
    body.classList.add("fade2");
}

function spinSecretButton() {
    var button = getElementById("button");
    button.onclick = button.classList.add("spin");
}

