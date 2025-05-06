# 🏆 Milestone: 6. Debugging

## 📌 Research Best Debugging Techniques for React #33

### 🎯 Goal

Understand and apply effective debugging techniques in React development.

### 🛠️ Task

#### 1️⃣ Research best debugging techniques for React applications.

##### Explore tools like React DevTools, browser console, and VS Code debugger.

##### Learn about error boundaries and how to handle runtime errors.

##### Investigate debugging performance issues using the React Profiler.

#### 2️⃣ Summarize key debugging strategies in react_debugging.md.

##### What are the most common debugging techniques?

Here are some techniques and order that I use every time I face bugs in my programs

1. Console Logging: console.log() is a fast and simple way to trace variables and flow.

2. Breakpoints: Use browser DevTools or VS Code to pause execution and inspect state.

3. React DevTools: Inspect component props, state, and structure.

4. Error Boundaries: Catch and display fallback UI for runtime errors in components.

5. Code Comments: Temporarily disable code blocks to isolate bugs.

6. Step-by-step Isolation: Commenting out components or lines to narrow down where the issue lies.

##### Which tools are most effective for React debugging?

- React Developer Tools (Chrome/Firefox extension): Inspect React component tree, props, state, hooks, and performance.

- Browser DevTools (Chrome, Firefox): View network requests, JS errors, and logs.

- VS Code Debugger: Attach breakpoints, inspect variables and call stacks.

- React Profiler (in DevTools): Analyze performance bottlenecks and re-renders.

- Redux DevTools (if using Redux): Track state changes and action history.

##### How do you debug issues in large React codebases?

- Use component boundaries: Focus debugging within a specific component scope.

- Trace from the error: Start with the error message and trace upstream via stack traces.

- Search for unique variables/functions: Use your editor's search feature to track state and props.

- Use Error Boundaries: Help isolate which section of the UI is causing runtime failures.

- Leverage version control: Use `git bisect` to identify where a bug was introduced.

#### 3️⃣ Commit and push your changes to GitHub.
