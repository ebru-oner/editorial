---
id: "useeffecthook"
title: "Exploring the Power of useEffect Hook: Manage React Side Effects for a Seamless User Experience"
summary: "some summary about hooks"
date: "2023-08-07"
quote:
  {
    "content": '',
    "author": "",
  }
coverImage: "/assets/blog/useeffecthook/cover.webp"
ogImage:
  url: "/assets/blog/useeffecthook/cover.jpg"
---

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

