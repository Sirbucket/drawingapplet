//App
import {ctx, canvas} from "./canvas";
import {makeButton} from "./controls";
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
import {each} from "lodash"; //Yet still works. (Using each instead of a for loop, highly performant compared to for of and in my opinion makes as much sense.. https://www.incredible-web.com/blog/performance-of-for-loops-with-javascript/)
import {} from "./sw.js"

let fm = false;

//Capping method.
each(caps, (cap : string) => {
	const capButton : HTMLButtonElement = makeButton("Cap " + cap);
	capButton.addEventListener("click", () => {
		//Fake error, typescript is dumb.
		ctx.lineCap = cap;
	});
});
//How the line connects visually.
each(connections, (connection : string) => {
	const connectionButton : HTMLButtonElement = makeButton("Connect " + connection);
	connectionButton.addEventListener("click", () => {
		ctx.lineJoin = connection;
	});
});
//Colors
each(colors, (color) => {
	const colorButton : HTMLButtonElement = makeButton(color);
	colorButton.style.background = color;
	colorButton.addEventListener("click", () => {
		ctx.fillStyle = color;
		ctx.strokeStyle = color;
	})
})

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

//Drawing functionality, first listener checks mouse down then offsets the initial moveto. Mousemove draws a line where your mouse is moving while mouse down, then determins whether to stroke or fill based on fillmode being true or false.
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
		return;
} else {
    ctx.stroke();
  }
});

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    console.log('This page was restored from the bfcache.');
  } else {
    console.log('This page was loaded normally.');
  }
});