## 📌 Understanding React Hooks: useEffect #22

### 🎯 Goal

Learn how to use the useEffect hook to handle side effects in React components.

### 🛠️ Task

#### 1️⃣ Research how useEffect works and when to use it.

`useEffect` lets you perform side effects in functional components—like fetching data, subscribing to events, or manually updating the DOM. It runs after the component renders.

#### 2️⃣ Create a component that:

##### Logs a message when it mounts and unmounts.

##### Fetches data from an API when a button is clicked.

##### Implements a cleanup function.

DataFetcher.js

```
// File: DataFetcher.js
import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [triggerFetch, setTriggerFetch] = useState(false);

  // Log on mount/unmount
  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component unmounted');
    };
  }, []);

  // Fetch data on trigger
  useEffect(() => {
    if (!triggerFetch) return;

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
          signal: controller.signal,
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Fetch error:', error);
        }
      }
    };

    fetchData();

    // Cleanup
    return () => {
      controller.abort(); // cancel the fetch if component unmounts
    };
  }, [triggerFetch]);

  return (
    <div>
      <button onClick={() => setTriggerFetch(true)}>Fetch Data</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default DataFetcher;
```

#### 3️⃣ Push your component to GitHub.

#### 4️⃣ Reflection (in react_hooks.md):

##### When should you use useEffect instead of handling logic inside event handlers?

You should use `useEffect` for side effects that occur as a result of state changes or component lifecycle events (mount/unmount), not just one-time actions triggered by events. For example, `useEffect` is useful when fetching data after a value or state change.

##### What happens if you don’t provide a dependency array?

If you omit the dependency array, `useEffect` runs after every render, which can cause unnecessary re-runs and performance issues. It’s like setting up an infinite loop if the effect updates state that causes a rerender.

##### How can improper use of useEffect cause performance issues?

- Without dependencies, effects may run too often.

- Missing cleanups (like event listeners or timeouts) can cause memory leaks.

- Triggering fetches or DOM manipulations in ways that re-run frequently can slow down your app.

---

## 📌 Optimizing Performance with useMemo #21

### 🎯 Goal

Understand how useMemo helps optimize expensive calculations in React.

### 🛠️ Task

#### 1️⃣ Research how useMemo works and why it’s useful.

`useMemo` is a React hook that memoizes the result of an expensive function so that it only recomputes when its dependencies change. It helps prevent unnecessary recalculations during re-renders, improving performance.

#### 2️⃣ Create a component that:

##### Renders a large list of numbers.

##### Implements an expensive calculation that runs only when necessary.

##### Uses useMemo to prevent unnecessary re-computation.

ExpensiveList.js

```
// File: ExpensiveList.js
import React, { useState, useMemo } from 'react';

const ExpensiveList = () => {
  const [count, setCount] = useState(0);
  const [listSize, setListSize] = useState(10000);

  // Expensive calculation: summing all even numbers
  const evenSum = useMemo(() => {
    console.log('Calculating sum...');
    let sum = 0;
    for (let i = 0; i < listSize; i++) {
      if (i % 2 === 0) sum += i;
    }
    return sum;
  }, [listSize]);

  return (
    <div>
      <h2>Expensive List Calculation</h2>
      <p>Even Sum: {evenSum}</p>
      <button onClick={() => setCount(count + 1)}>Re-render (count = {count})</button>
      <button onClick={() => setListSize(listSize + 1000)}>Increase List Size</button>
    </div>
  );
};

export default ExpensiveList;
```

#### 3️⃣ Push your component to GitHub.

#### 4️⃣ Reflection (in react_hooks.md):

##### How does useMemo improve performance?

- It avoids recalculating expensive operations unless their dependencies change.

- In this example, evenSum doesn't recalculate when count changes, which prevents unnecessary CPU usage during re-renders.

##### When should you avoid using useMemo?

- Avoid `useMemo` for cheap calculations or when the performance gain is negligible.

- Overusing it can make code harder to read and maintain without significant benefits.

##### What happens if you remove useMemo from your implementation?

- The expensive calculation runs on every render, even if its input hasn't changed.

- This can cause noticeable lag or slow rendering in large or complex UIs.

---

## 📌 Preventing Unnecessary Renders with useCallback #20

### 🎯 Goal

Learn how useCallback helps optimize function references in React.

### 🛠️ Task

#### 1️⃣ Research how useCallback works and when to use it.

`useCallback` is a React hook that returns a memoized version of a callback function, which is only redefined if its dependencies change. It helps prevent unnecessary re-renders of child components that depend on the function as a prop.

#### 2️⃣ Create a component that:

##### Passes a function as a prop to a child component.

##### Uses useCallback to prevent unnecessary re-renders.

Parent and Child Components
ChildComponent.js

```
// File: ChildComponent.js
import React from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
});

export default ChildComponent;
```

UseCallbackDemo.js

```
// File: UseCallbackDemo.js
import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // No dependency -> function is memoized once

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default UseCallbackDemo;
```

##### Uses React DevTools to confirm when re-renders occur.

Without `useCallback`, `handleClick` is recreated on every render, triggering unnecessary renders in ChildComponent.

With `useCallback`, the function reference remains the same, so the child doesn't re-render unless necessary.

#### 3️⃣ Push your component to GitHub.

#### 4️⃣ Reflection (in react_hooks.md):

##### What problem does useCallback solve?

It prevents unnecessary re-renders of child components by memoizing the function reference passed as props.

##### How does useCallback work differently from useMemo?

`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)` both cache results, but useCallback is specialized for functions, while `useMemo` is used for any computed value.

##### When would useCallback not be useful?

If the function isn't passed to memoized children or doesn't affect re-renders, `useCallback` adds unnecessary complexity with no benefit.
