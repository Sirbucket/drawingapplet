//Canvas Defining

const app : HTMLDivElement = document.querySelector('#app');
export const canvas: HTMLCanvasElement = document.createElement('canvas');

export const ctx = canvas.getContext('2d');
export const width = window.outerWidth/1.1;
export const height = window.outerHeight/1.1;

//Refactored archaeic definition for dynamic canvas resizing.
window.addEventListener("load", () => {
canvas.width = width;
canvas.height = height;
app.style.width = `${width}px`;
app.style.height = `${height}px`;
canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;
});

window.addEventListener("resize", () => {
canvas.width = width;
canvas.height = height;
app.style.width = `${width}px`;
app.style.height = `${height}px`;
canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;
});

app.appendChild(canvas);
