import { useEffect } from 'react'
import { Canvas } from 'fabric/dist/src/canvas/Canvas';
import { Textbox } from 'fabric/dist/src/shapes/Textbox';
import './App.css'

function App() {

  useEffect(() => {
    const c = document.getElementById('c');
    if (c!.hasAttribute('data-fabric')) {
      return;
    }
    const fabricCanvas = new Canvas('c');
    const text = new Textbox('Hello 6.0', {});
    fabricCanvas.add(text);
  }, []);

  return (
    <div className="App">
      <canvas id="c" width="1280" height="720" ></canvas>
    </div>
  )
}

export default App
