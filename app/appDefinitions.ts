//Definitions for app
import {makeButton} from "./controls";
import {ctx,canvas} from "./canvas"

const lw = canvas.width/100
//Dynamic lineWidth, written cheaply.
window.addEventListener("load", () => {
	ctx.lineWidth = lw
	
});
window.addEventListener("resize", () => {
	ctx.lineWidth = lw
});

export const caps = [
	"round",
	"square",
];

export const connections = [
	"bevel",
	"round",
	"miter",
];

export const colors = [
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