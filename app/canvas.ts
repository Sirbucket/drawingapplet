//Canvas Defining

const app : HTMLDivElement = document.querySelector('#app');
export const canvas: HTMLCanvasElement = document.createElement('canvas');

export const ctx = canvas.getContext('2d');
export const width = window.innerWidth;
export const height = window.innerHeight;

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
