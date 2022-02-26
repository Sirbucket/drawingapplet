//Definitions for app

import {makeButton} from "./controls";
import {ctx,width,height} from "./canvas"
window.addEventListener("load", () => {
	if (height >= 3840) (width >= 2160); {
		ctx.lineWidth = 7;
		return;
	}
	if (height >= 2560) (width >= 1440); {
		ctx.lineWidth = 6;
		return;
	}
	if (height >= 1920) (width >= 1080); {
		ctx.lineWidth = 5;
		return;
	}
	if (height >= 1600) (width >= 900); {
		ctx.lineWidth = 4;
		return;
	}
	if (height >= 1280) (width >= 720); {
		ctx.lineWidth = 3.5;
		return;
	}
	if (height >= 900) (width >= 600); {
		ctx.lineWidth = 3;
		return;
	}
	if (height >= 640) (width >= 480); {
		ctx.lineWidth = 2;
		return;
	}
	if (height < 640) (width < 480); {
		ctx.lineWidth = 1;
		return;
	}
});
window.addEventListener("resize", () => {
	if (height >= 3840) (width >= 2160); {
		ctx.lineWidth = 7;
		return;
	}
	if (height >= 2560) (width >= 1440); {
		ctx.lineWidth = 6;
		return;
	}
	if (height >= 1920) (width >= 1080); {
		ctx.lineWidth = 5;
		return;
	}
	if (height >= 1600) (width >= 900); {
		ctx.lineWidth = 4;
		return;
	}
	if (height >= 1280) (width >= 720); {
		ctx.lineWidth = 3.5;
		return;
	}
	if (height >= 900) (width >= 600); {
		ctx.lineWidth = 3;
		return;
	}
	if (height >= 640) (width >= 480); {
		ctx.lineWidth = 2;
		return;
	}
	if (height < 640) (width < 480); {
		ctx.lineWidth = 1;
		return;
	}
});

ctx.lineCap = "round";
ctx.lineJoin = "round";

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
	"Beige",
	"Teal",
	"SteelBlue",
	"Gray",
]
export const eraserButton = makeButton('Eraser');
export const clearButton = makeButton(" 🗑 ");
export const drawInLinesButton = makeButton("Draw in Lines");
export const drawInFillsButton = makeButton("Draw In Fills");
export const saveButton = makeButton("Save");