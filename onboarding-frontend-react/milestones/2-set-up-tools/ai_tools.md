# 📌 Set Up AI Tools for Development

#### 🎯 Goal

Enhance your coding workflow by exploring AI-powered tools that assist with development.

### ✅ Tasks

#### Research and install an AI coding assistant (choose one or more)

✅ I tried GitHub Copilot, an AI pair programmer that suggests code as you type inside VS Code

#### Experiment with using AI for development

##### 1️⃣ Generate code snippets and analyze how useful they are

GitHub Copilot was helpful in generating boilerplate code and simple functions quickly. For example, when I started typing a function to filter an array, Copilot auto-completed the logic accurately. It sped up repetitive tasks and helped me write cleaner code faster.

**Comment or start of code**

```// Filter an array to return only even numbers
function getEvenNumbers(arr) {
```

**Copilot auto-completed:**

```
// Filter an array to return only even numbers
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

```

##### 2️⃣ Use AI for debugging a simple problem

I had a bug in a React component where the state wasn't updating correctly. By writing a comment describing the issue, Copilot suggested a corrected version of the useEffect logic. It helped me spot what I was doing wrong and offered a working alternative.

**Original code with bug in React**

```import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, []); // Bug: count value is always 0 due to stale closure

  return <div>{count}</div>;
}
```

**Copilot suggestion after adding a comment:**

```// Fix useEffect to increment count correctly every second
useEffect(() => {
  const interval = setInterval(() => {
    setCount(prevCount => prevCount + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);
```

Copilot was able to identify the stale state issue and used the correct prevCount pattern to fix the bug, improving both the logic and code stability.

##### 3️⃣ Ask AI for explanations on a new concept you're learning

I used Copilot to learn about debouncing in JavaScript. I typed a comment asking for a debounce function, and Copilot not only generated the function but also provided an inline comment explaining how it works. It made understanding the concept easier and more practical.

#### Document your experience in ai_tools.md

##### 1️⃣ Which AI tools did you try?

I used GitHub Copilot inside VS Code. It acts as an AI pair programmer, suggesting lines of code, functions, and even full components based on context.

##### 2️⃣ What worked well? What didn’t?

**What worked well**: Copilot was excellent at suggesting code for common patterns, helper functions, and reducing time spent writing repetitive logic.

**What didn’t**: Sometimes the suggestions were irrelevant or outdated, especially for more complex logic or newer library syntax. I had to review and tweak suggestions to ensure correctness.

##### 3️⃣ When do you think AI is most useful for coding?

AI is most useful for speeding up repetitive tasks, generating boilerplate code, debugging simple issues, and helping learn new concepts by providing quick examples. It's a great productivity booster, especially when used alongside human review and understanding.

#### Commit and push your changes to GitHub ✅
