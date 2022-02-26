//Definitions for app

import {makeButton} from "./controls";
import {ctx,canvas} from "./canvas"

//Dynamic lineWidth, written badly although cheaply, typescript is weird sometimes.
window.addEventListener("load", () => {
	if (canvas.height >= 3840) (canvas.width >= 2160); {
		ctx.lineWidth = 7;
		return;
	}
	if (canvas.height >= 2560) (canvas.width >= 1440); {
		ctx.lineWidth = 6;
		return;
	}
	if (canvas.height >= 1920) (canvas.width >= 1080); {
		ctx.lineWidth = 5;
		return;
	}
	if (canvas.height >= 1600) (canvas.width >= 900); {
		ctx.lineWidth = 4;
		return;
	}
	if (canvas.height >= 1280) (canvas.width >= 720); {
		ctx.lineWidth = 3.5;
		return;
	}
	if (canvas.height >= 900) (canvas.width >= 600); {
		ctx.lineWidth = 3;
		return;
	}
	if (canvas.height >= 640) (canvas.width >= 480); {
		ctx.lineWidth = 2;
		return;
	}
	if (canvas.height < 640) (canvas.width < 480); {
		ctx.lineWidth = 1;
		return;
	}
});
window.addEventListener("resize", () => {
	if (canvas.height >= 3840) (canvas.width >= 2160); {
		ctx.lineWidth = 7;
		return;
	}
	if (canvas.height >= 2560) (canvas.width >= 1440); {
		ctx.lineWidth = 6;
		return;
	}
	if (canvas.height >= 1920) (canvas.width >= 1080); {
		ctx.lineWidth = 5;
		return;
	}
	if (canvas.height >= 1600) (canvas.width >= 900); {
		ctx.lineWidth = 4;
		return;
	}
	if (canvas.height >= 1280) (canvas.width >= 720); {
		ctx.lineWidth = 3.5;
		return;
	}
	if (canvas.height >= 900) (canvas.width >= 600); {
		ctx.lineWidth = 3;
		return;
	}
	if (canvas.height >= 640) (canvas.width >= 480); {
		ctx.lineWidth = 2;
		return;
	}
	if (canvas.height < 640) (canvas.width < 480); {
		ctx.lineWidth = 1;
		return;
	}
});

export const caps = [
	"round",
	"square",
]

export const connections = [
	"bevel",
	"round",
	"miter",
]

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
	"SteelBlue",
	"Gray",
]
export const eraserButton = makeButton('Eraser');
export const clearButton = makeButton(" 🗑 ");
export const drawInLinesButton = makeButton("Draw in Lines");
export const drawInFillsButton = makeButton("Draw In Fills");
export const saveButton = makeButton("Save");