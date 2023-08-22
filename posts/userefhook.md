---
id: "userefhook"
title: "Exploring the Power of useRef Hook: Persist values and access DOM elements with ‘useRef’"
summary: "some summary about hooks"
date: "2023-08-07"
quote:
  {
    "content": '',
    "author": "",
  }
coverImage: "/assets/blog/userefhook/cover.webp"
ogImage:
  url: "/assets/blog/userefhook/cover.jpg"
---

- ‘useRef‘ hook serves for two purposes:

**First one** is to preserve values between renders. Unlike state managed by ‘useState‘, changes to the value of a ‘useRef‘ do not trigger a rerender. Use ‘useRef‘ when you need to store and manage data that doesn't affect the component's rendering, such as timers, counters, or previous state values.

A good application of useRef with timer is **debouncing**. Debouncing is important to ensure that an action is only executed after a specified period, despite multiple occurences of the action during that time.

```
const DebounceExample = () => {
  const [value, setValue] = useState('');
  const debounceTimeoutRef = useRef(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  useEffect(() => {
    const delay = 300;
    clearTimeout(debounceTimeoutRef.current);
    
    debounceTimeoutRef.current = setTimeout(() => {
      handleChange();
    }, delay);

    return () => clearTimeout(debounceTimeoutRef.current);
  }, [value]);
  
  return (
    <input type='text' value={value} onChange={handleChange} placeholder='Type something...'/>
  );
};
export default DebounceExample;
```

Another use of ‘useRef‘ is to **access the previous value**. In React previous value can be achieved by two techniques, ‘useEffect‘ hook with a dependency array and useRef hook. If you need to access the previous value synchronously withing the component ‘useRef‘ is the solution.

```
export default function App() {
  const [aValue, setAValue] = useState('');
  const previous = useRef('');
  
  useEffect(()=>{
    prevIous.current = aValue;
  })
  
  return (
    <>
      <input value={aValue} onChange={e=> setAValue(e.target.value)}/>
      <div> Current value is {aValue} and previous value is {previous.current} </div>
    </>
  )
}
```

**Second** responsibility of ‘useRef‘ is to access and manipulate DOM elements. Every element inside your document has a ref attribute which can be set into any ref. ‘useRef‘ remembers and keeps track of the DOM elements, like a magical notebook.

- For an input field which you want to set the focus after an action,

```
export default function App() {
  const inputRef = useRef();
  function focusToInputField() {
    inputRef.current.focus();
  }
  return (
    <>
      <input ref={inputRef}/>
      <button onClick={focusToInputField}>Focus</button>
    </>
  )
}
```

- Or a page which you want to embed a youtube video,

```
import React, { useRef } from 'react';

function VideoEmbedExample() {
  const videoRef = useRef(null);
  
  function playVideo() {
    videoRef.current.play();
  }
  
  return (
    <div>
      <iframe ref={videoRef} width='500' height='300' 
        src='https://www.youtube.com/embed/your-video-id' 
        title='YouTube video player'
        frameBorder='0'
        allowFullScreen
      />
      <button onClick={playVideo}>Play Video</button>
    </div>
  );
}
```

- A canvas on which you want to draw shapes,

```
import React, { useRef, useEffect } from 'react';
function Canvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = 'black';
    context.lineWidth = 2;
  }, []);

  function draw(e) {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();
  }

  function startDrawing(e) {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    canvas.addEventListener('mousemove', draw);
  }

  function stopDrawing() {
    const canvas = canvasRef.current;
    canvas.removeEventListener('mousemove', draw);
  }

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
    ></canvas>
  );
}
export default Canvas;
```

In the same way ‘useRef’ in React is to your program. It acts like **a memory aid**.
