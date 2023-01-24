import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import fabric from 'fabric';
import './App.css'

function App() {

  useEffect(() => {
    const c = document.getElementById('c');
    if (c!.hasAttribute('data-fabric')) {
      return;
    }
    const fabricCanvas = new fabric.Canvas('c');
    const text = new fabric.Textbox('Hello 6.0', {});
    fabricCanvas.add(text);
  }, []);

  return (
    <div className="App">
      <canvas id="c" width="1280" height="720" ></canvas>
    </div>
  )
}

export default App
