import './style.css'
import { Canvas } from 'fabric/src/canvas/canvas_events';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <canvas width="1280" height="720" id="c" />
  </div>
`
console.log(Canvas);
const fabricCanvas = new Canvas('c');