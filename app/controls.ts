//Controls
import {width} from './canvas';

export const controlBox : HTMLDivElement = document.querySelector('#controls');
controlBox.style.width = `${width}px`

export const makeButton = (name : string) => {
  const button = document.createElement("button");
  button.innerText = name;
  controlBox.appendChild(button);
  return button;
}
