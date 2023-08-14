---
id: "hooks"
title: "Building Better React Apps: Simplify and Organize Your Code with Hooks"
summary: "some summary about hooks"
date: "2023-08-07"
quote:
  {
    "content": '',
    "author": "",
  }
coverImage: "/assets/blog/hooks/cover.webp"
ogImage:
  url: "/assets/blog/hooks/cover.jpg"
---

## Empowering user interactions with ‘useState‘

Modern web applications host a myriad of elements and components that demand responsive reactions to user actions. **useState** hook is the key to create more interactive and dynamic user interfaces.

In React, **state** refers to the data a component needs to remember and use in its logical rendering. **useState** plays a pivotal role in managing and updating the state within a React component, leading to dynamic behavior and enhanced interactivity.

### Usage: useState hook returns an array where first element is the current state and the second is a function that updates the current state, 

- [the current state, a function that updates the current state] = useState();

- Below is a toggle button example, which is demonstrating the basic usage of ‘useState‘:

```
import React, { useState } from 'react';

const ToggleButtonExample = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
  };
  
  return (
    <div>
      <button onClick={handleToggle}>{ isOn ? 'Turn Off' : 'Turn On'}</button>
      {
        isOn && <p>The button is currently ON!</p>
      }
    </div>
  );
};
export default ToggleButtonExample;
```

The above code might result with potential bugs in asynchronous updates. The **best practice** for 'useState' is to use the function syntax. 

- So better way of toggle button is as the following:

```
import React, { useState } from 'react';

const ToggleButtonExample = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(prevIsOn=>!prevIsOn);
  };
  return (
    <div>
      <button onClick={handleToggle}>{ isOn ? 'Turn Off' : 'Turn On' }</button>
      {
        isOn && <p>The button is currently ON!</p>
      }
    </div>
  );
};
export default ToggleButtonExample;
```

- It is possible to use complex object form instead of declaring ‘useState‘ for each element, like in the following basic login form:

```
import React, { useState } from 'react';

const FormExample = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); 
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' value={formData.email} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' value={formData.password} onChange={handleChange}/>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};
export default FormExample;
```

By utilizing ‘useState‘ you'll enjoy a more **organized, structured, and declarative** approach to handling and managing data state changes. Think of it as your trusty pencil case - ready to take on the color of any pen you put inside.

Use 'useState' in your implementations to create **engaging and interactive experiences**, resulting in interfaces that **feel alive and highly responsive**.


## Persist values and access DOM elements with ‘useRef’

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


## Mastering useEffect: Managing React Side Effects for a Seamless User Experience

**useEffect** is used to properly manage side effects of your react code. It takes two arguments, a function that has the side effect logic and an array of dependencies.

Let's first understand what are these side effects and why are they called side effects?

The term **side effects** comes from *functional programming*, where the goal is to have functions that have no observable side effects and only produce output based on their input. In react side effects involve operations such as,
- Data fetching
- DOM manipulation
- Event listeners
- Subscriptions


Taking a reverse view we'll examine what happens if you don't use useEffect with the above operations. Afterwards we'll delve into the proper and recommended approach.

#### Data fetching: 

Data fetching is the first side effect we will explore. It involves making asynchronous requests to external APIs or server to retrieve data. 
 
This following code will fetch data from 'https://api.example.com/data' on every render, resulting in excessive api requests, leading to slowliness, inconsistent data.

```
import React, {useState} from 'react';

const DataFetchWithoutUseEffect = () => {
  const [data, setData] = useState([]);

  fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));

  return (
    <div>
      <h1> Data fetching </h1>
      <li>{data}</li>
    </div>
  );
}
```

Before passing to the useEffect version it is time to mention about the **dependency array**, the second parameter of the useEffect hook. Dependency array controls the side effect activity, in other words when should the function run. For instance if you give an empty array it will run only after the initial render and if you add some state variables then it will make the useEffect function to run whenever the state changes. 

By placing the data fetching logic inside the useEffect you ensure that the fetching only occurs after the initial render, right after the component is mounted, when it has been created and added to the DOM tree.  

```
import React, {useState} from 'react';

const DataFetchWithUseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1> Data fetching </h1>
      <li>{data}</li>
    </div>
  );
}
export default DataFetchWithUseEffect;
```


#### DOM manipulation:

**DOM manipulation** is the next side effect. Document Object Model(DOM) is the structured representation of the HTML elements on a web page. Although React abstracts away many low level DOM operations, for some cases such as *focusing, drawing on canvas, measuring the dimensions and positions of DOM elements, interacting with the HTML5 media* API DOM manipulation is necessary. 

**Without useEffect** it is possible to experience **improper timing** of the DOM changes, or **errors due to accessing** DOM elements that are not rendered yet. 

The following code is trying to access the DOM element just after creating the inputRef. At that point component is *not fully rendered* and the *dom element has not been created yet*. 

```
import React, { useRef } from 'react';

const AutoFocusWithoutUseEffect = () => {
  const inputRef = useRef(null);
  
  inputRef.current.focus();

  return (
    <div>
      <h1>Auto Focus Without useEffect</h1>
      <input type="text" ref={inputRef} />
    </div>
  );
}
export default AutoFocusWithoutUseEffect;
```

By placing the DOM manipulation logic within the useEffect, you ensure that the manipulation occurs after initial render. This is the point where you can safely access with actual DOM elements.

```
import React, { useEffect, useRef } from 'react';

const AutoFocusExample = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Auto Focus Example</h1>
      <input type="text" ref={inputRef} />
    </div>
  );
}
export default AutoFocusExample;
```

#### Event listeners:

Event listeners, clicks, keyboard inputs, mouse movements... enable your application to responde to user actions and interactions.  Adding event listeners in the render function might end up multiple event listener registrations causing performance issues and unexpected behavior. Also not properly removing the event listeners in the component lifecycle lead to memory leakage and again performance issues. 

```
import React from 'react';

const ClickListenerWithoutUseEffect = () => {
  const handleClick = () => {
    console.log('Document clicked!');
  };

  document.addEventListener('click', handleClick);

  return (
    <div>
      <h1>Click Listener Without useEffect</h1>
      <p>Click anywhere on the page to see the console output.</p>
    </div>
  );
}

export default ClickListenerWithoutUseEffect;
```

Placing event listener setup ensures that the event listener is added after the initial render. Removing the event listener in the return statement ensures that the event listener is removed when the component unmounts.

In the following code the event listener is removed everytime before it is recreated.

```
import React, { useEffect } from 'react';

const ClickListenerWithUseEffect() {
  useEffect(() => {
    const handleClick = () => {
      console.log('Document clicked!');
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <h1>Click Listener Example</h1>
      <p>Click anywhere on the page to see the console output.</p>
    </div>
  );
}
export default ClickListenerWithUseEffect;
```

#### Subscriptions:

**Subscriptions** is the last side effect where the component listens and responds to updates or events from an external source, such as web sockets, server side events, real-time data updates as social media feeds, chat applications, live notifications as friend requests, user activity, online-offline status. 

Subscribing and unsubscribing directly in the render function might lead to multiple subscriptions causing memory leakage, degraded performance or unexpected behavior. 

In the following code each time the component re-renders, a new web socket connection will be created.

```
import React, { useState } from 'react';

const RealTimeDataWithoutUseEffect = () => {
  const [data, setData] = useState('');

  const socket = new WebSocket('wss://example.com/socket');

  socket.addEventListener('message', event => {
    setData(event.data);
  });

  return (
    <div>
      <h1>Real-Time Data Without useEffect</h1>
      <p>Current data: {data}</p>
    </div>
  );
}
export default RealTimeDataWithoutUseEffect;
```

Setting up and cleaning up subscriptions with useEffect will help to avoid memory leaks, resource problems. 

Following code will make sure that it is properly unsubscribed before it creates a new connection.

```
import React, { useState, useEffect } from 'react';

const RealTimeDataWithUseEffect = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const socket = new WebSocket('wss://example.com/socket');

    const handleMessage = event => {
      setData(event.data);
    };

    socket.addEventListener('message', handleMessage);

    return () => {
      socket.removeEventListener('message', handleMessage);
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>Real-Time Data with useEffect</h1>
      <p>Current data: {data}</p>
    </div>
  );
}
export default RealTimeDataWithUseEffect;
```

In summary useEffect hook follows a clear sequence of three fundamental steps:
1) **dependency array:** useEffect is triggered based on the dependencies defined in the dependency array. If empty called after the initial render.
2) **return:** Takes a function and ensures that any resources, event listeners, or subscriptions are properly released when the component unmounts.
3) **effect function:** Runs after the initial render and after every rerender if its dependencies change.

By following this path you ensure that the side effect are handled consistently and safely during different phases of your component's lifecycle. 

