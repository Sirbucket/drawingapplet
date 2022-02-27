//Definitions for app
import {makeButton} from "./controls";
import {ctx,canvas} from "./canvas"
import {each} from "lodash"

const lw = canvas.width/100

//Dynamic lineWidth, written cheaply.
window.addEventListener("load", () => {
	ctx.lineWidth = lw
});
window.addEventListener("resize", () => {
	ctx.lineWidth = lw
});

const caps = [
	"round",
	"square",
];

const connections = [
	"bevel",
	"round",
	"miter",
];

const colors = [
	"Red",
	"Blue",
	"Green",
	"Yellow",
	"Orange",
	"Brown",
	"Black",
	"Pink",
	"Purple",
	"Maroon",
	"Teal",
	"Gray",
];

export const eraserButton = makeButton('Eraser');
export const clearButton = makeButton(" 🗑 ");
export const drawInLinesButton = makeButton("Draw in Lines");
export const drawInFillsButton = makeButton("Draw In Fills");
export const saveButton = makeButton("Save");

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
each(colors,color => {
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

//Save button
saveButton.addEventListener("click", () => {
  const link = document.getElementById("link");
  link.setAttribute("download", "CanvasImage.png");
  link.setAttribute("href", canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  link.click();
});
