---
id: "usestatehook"
title: "Exploring the Power of useState Hooks: Empower user interactions with ‘useState‘"
summary: "some summary about hooks"
date: "2023-08-07"
quote:
  {
    "content": '',
    "author": "",
  }
coverImage: "/assets/blog/usestatehook/cover.webp"
ogImage:
  url: "/assets/blog/usestatehook/cover.jpg"
---

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

