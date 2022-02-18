//Definitions for app

import {makeButton} from "./controls";

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
]
export const eraserButton = makeButton('Eraser');
export const clearButton = makeButton(" 🗑 ");
export const drawInLinesButton = makeButton("Draw in Lines");
export const drawInFillsButton = makeButton("Draw In Fills");
export const saveButton = makeButton("Save");