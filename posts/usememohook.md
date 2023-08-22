---
id: "usememohook"
title: "Exploring the Power of useMemo Hook: Boosting Performance through Efficient Value Memoization"
summary: "some summary about hooks"
date: "2023-08-07"
quote:
  {
    "content": '',
    "author": "",
  }
coverImage: "/assets/blog/usememohook/cover.webp"
ogImage:
  url: "/assets/blog/usememohook/cover.jpg"
---

**useMemo** serves as performance optmizer within a lifecycle of a component by *memoizing* the results of computations. 

The prime scenario to use **useMemo** is when you a have a an *expensive computation* and an input to this computation that does not change on every render. Through encapsulating computational functions, the computed output is stored in memory, and call to the method is done only when the input value is altered.

```
import React, { useMemo } from 'react';

function FactorialComponent({ number }) {
  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]); 

  return <div>Factorial of {number} is {factorial}</div>;
}
```

An additional application of **useMemo** is when you have *referential equality* checks. When dealing with *objects or arrays*, even their content remains unaltered, because of being a reference variable they are created in every render. By integrating useMemo, invocations are restricted to instances where the content of objects or arrays change.

```
import React, { useMemo } from 'react';

function ItemList({ items, selectedItems }) {
  const renderedItems = useMemo(() => {
    return items.map(item => ({
      ...item,
      isSelected: selectedItems.includes(item.id),
    }));
  }, [items, selectedItems]); 

  return (
    <ul>
      {renderedItems.map(item => (
        <li key={item.id} className={item.isSelected ? 'selected' : ''}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
```

**Be cautious** with useMemo as it entails a *trade off*. Keep in mind that resource allocation in *memory* is necessary to memoize the value and an *additional method call*, useMemo, is introduced on every render. 

Drawing parallels with **useEffect** and **useCallback**, **useMemo** shares structural similarities with the former in terms of anticipating a function alongside a dependency array. But the idea behind is not the same. Use **useEffect** to manage side effects. Read more on [useEffect](useeffecthook). Use **useMemo** to avoid unnecessary calculations. Both useCallback and useMemo are designed to optimize performance by memoization. The choice between them lies on the desired output. useCallback optimizes function recall while useMemo optimizes value recall. Read more on [useCallback](usecallbackhook)