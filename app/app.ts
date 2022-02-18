//App

import {ctx, canvas} from "./canvas";
import {controlBox, makeButton} from "./controls";
import {
		colors,
		eraserButton,
		clearButton,
		drawInLinesButton,
		drawInFillsButton,
		saveButton
} from "./appDefinitions";

let fm = false;

ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.lineJoin = "round";

//Colors
for (const color of colors) {
	const colorButton = makeButton(color);
		colorButton.style.backgroundColor = color;
		colorButton.addEventListener("click", () => {
		ctx.strokeStyle = color;
		ctx.fillStyle = color;
		});
}

//Clears canvas
clearButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

eraserButton.addEventListener("click", () => {
  fm = true;
  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
});

/*
Drawing functionality, first listener checks mouse down then offsets the initial moveto. Mousemove draws a line where your mouse is moving while mouse down. Mouse up finishes the drawing and determins whether fm is true or false.
*/

canvas.addEventListener("mousedown", (event) => {
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener("mousemove", (event) => {
  if (event.buttons === 1) {
    ctx.lineTo(event.offsetX, event.offsetY);
  }
});

canvas.addEventListener("mouseup", () => {
  if (fm === true) {
    ctx.fill();
} else {
    ctx.stroke();
  }
});

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

//Save button
saveButton.addEventListener("click", () => {
  const link = document.getElementById("link");
  link.setAttribute("download", "CanvasImage.png");
  link.setAttribute("href", canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  link.click();
 });