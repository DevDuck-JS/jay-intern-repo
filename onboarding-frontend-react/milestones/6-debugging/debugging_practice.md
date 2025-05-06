# 🏆 Milestone: 6. Debugging

## 📌 Practise React Debugging in a Test Repo #31

### 🎯 Goal

Apply debugging techniques to a real React codebase and learn through hands-on practice.

### 🛠️ Task

#### 1️⃣ Read the article ["Three Buggy React Code Examples And How To Fix Them"](https://css-tricks.com/three-buggy-react-code-examples-and-how-to-fix-them/).

#### 2️⃣ Recreate at least one of the buggy examples in your own React project.

#### 3️⃣ Use debugging techniques to identify and fix the issues.

#### 4️⃣ Document the process in debugging_practice.md:

##### What was the issue?

I recreated the “The Infinite Loop in useEffect” example. The issue was caused by an effect that depended on a state value (count) and also updated that state inside the same effect. This created an infinite re-render loop.

Original buggy is

```
import React, { useState, useEffect } from 'react';

const InfiniteLoopExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1); // Causes an infinite loop
  }, [count]);

  return <h1>{count}</h1>;
};
```

##### What debugging method did you use?

I used console.log() to trace the execution of the useEffect and see how often it ran. I also used React Developer Tools to monitor component re-renders and confirm the infinite loop behavior.

##### How did you resolve the problem?

I moved the state update outside of useEffect and used an event (like a button click) to change the state. This breaks the cycle and stops the infinite loop.

Fixed version

```
import React, { useState, useEffect } from 'react';

const FixedLoopExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or count updated:', count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

#### 5️⃣ Commit and push your changes to GitHub.
