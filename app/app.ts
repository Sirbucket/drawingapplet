//App
import {ctx, canvas} from "./canvas";
import {drawInFillsButton,drawInLinesButton,eraserButton} from "./appDefinitions"

let fm = false;

//Checks to draw in fills or not.
drawInFillsButton.addEventListener("click", () => {
  fm = true;
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
});
drawInLinesButton.addEventListener("click", () => {
  fm = false;
  ctx.strokeStyle = "black";
});

//Eraser Button
eraserButton.addEventListener("click", () => {
  fm = true;
  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
});


//Drawing functionality, first listener checks mouse down then offsets the initial moveto. Mousemove draws a line where your mouse is moving while mouse down, then determins whether to stroke or fill based on fillmode being true or false.
canvas.addEventListener("mousedown",event => {
  ctx.beginPath();
	ctx.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener("mousemove",event => {
  if (event.buttons === 1) {
    ctx.lineTo(event.offsetX, event.offsetY);
  }
});

//Realtime viewing of drawing is disabled for now as calling this code in mouse move breaks erasing and swapping modes.
canvas.addEventListener("mouseup", () => {
	if (fm === true) {
    ctx.fill();
		return;
} else {
    ctx.stroke();
  }
});