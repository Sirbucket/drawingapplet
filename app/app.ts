//App

import {ctx, canvas} from "./canvas";
import {controlBox, makeButton} from "./controls";
import {
		caps,
		connections,
		colors,
		eraserButton,
		clearButton,
		drawInLinesButton,
		drawInFillsButton,
		saveButton,
} from "./appDefinitions";

let fm = false;

//Capping method, in general round looks best but ther can be a reason to cap square, especially for more logically based stuff.
for (const cap of caps) {
	const capButton = makeButton("Cap " + cap);
	capButton.addEventListener("click", () => {
		//False error, typescript is dumb sometimes.
		ctx.lineCap = cap;
	});
}

//How the line connects, in general round looks best but there can be reasons for the other two.
for (const connection of connections) {
	const connectionButton = makeButton("Connect " + connection);
	connectionButton.addEventListener("click", () =>{
		//Also false error.
		ctx.lineJoin = connection;		
	})
}
//Colors
for (const color of colors) {
	const colorButton = makeButton(color);
	colorButton.style.backgroundColor = color;
	colorButton.addEventListener("click", () => {
		ctx.strokeStyle = color;
		ctx.fillStyle = color;
	});
};

//Clears canvas
clearButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

eraserButton.addEventListener("click", () => {
  fm = true;
  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
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

/*
Drawing functionality, first listener checks mouse down then offsets the initial moveto. Mousemove draws a line where your mouse is moving while mouse down, then determins whether to stroke or fill based on fillmode being true or false.
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

//Realtime viewing of drawing is disabled for now as calling this code in mouse move breaks erasing and swapping modes.
canvas.addEventListener("mouseup", () => {
	if (fm === true) {
    ctx.fill();
} else {
    ctx.stroke();
  }
})