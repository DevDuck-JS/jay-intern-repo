# 🏆 Milestone: 8. Jest for unit tests

## 📌 Testing React Components with Jest & React Testing Library #16

### 🎯 Goal

Learn how to write unit tests for React components using Jest and React Testing Library.

### ❓ Why is this important?

Focus Bear has many interactive UI elements, and testing them ensures that components render correctly and behave as expected.

### 🛠️ Task

#### 1️⃣ Research how React Testing Library works with Jest.

React Testing Library (RTL) is commonly used with Jest to test UI components by focusing on how users interact with the app, rather than implementation details. RTL provides utilities like render, screen, and fireEvent to simulate user behavior.

#### 2️⃣ Create a simple React component that displays a message.

Assuming we created a basic component like this

```
// Message.js
import React from 'react';

const Message = ({ text }) => {
  return <h1>{text}</h1>;
};

export default Message;
```

#### 3️⃣ Write a test that checks if the component renders correctly.

```
// Message.test.js
import { render, screen } from '@testing-library/react';
import Message from './Message';

test('renders the message correctly', () => {
  render(<Message text="Hello, Focus Bear!" />);
  expect(screen.getByText('Hello, Focus Bear!')).toBeInTheDocument();
});
```

#### 4️⃣ Write a test that simulates user interaction (e.g., clicking a button).

If we add a button interaction:

```
// ClickMessage.js
import React, { useState } from 'react';

const ClickMessage = () => {
  const [message, setMessage] = useState('');

  return (
    <div>
      <button onClick={() => setMessage('Clicked!')}>Click me</button>
      <p>{message}</p>
    </div>
  );
};

export default ClickMessage;
```

```
// ClickMessage.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import ClickMessage from './ClickMessage';

test('displays message after button click', () => {
  render(<ClickMessage />);
  fireEvent.click(screen.getByText('Click me'));
  expect(screen.getByText('Clicked!')).toBeInTheDocument();
});
```

#### 5️⃣ Run the tests and check that they pass.

```
npm test
```

#### 6️⃣ Push your test to GitHub.

#### 7️⃣ Reflection (in unit_tests.md):

##### What are the benefits of using React Testing Library instead of testing implementation details?

User-Centric Testing: It focuses on how the component behaves from the user’s perspective, not how it’s implemented internally.

Better Resilience to Refactors: Tests are less likely to break when internal implementation changes, as long as the user-facing behavior remains the same.

Encourages Best Practices: Promotes accessible queries like getByRole, getByLabelText, improving accessibility and test reliability.

##### What challenges did you encounter when simulating user interaction?

Async Behavior: Testing components with delayed responses (e.g., API calls or setTimeout) required using async utilities like waitFor or findBy.

Proper Setup: Ensuring that event handlers and state changes were tested correctly required careful setup of the component's initial state and props.

DOM Updates: Sometimes had to re-check DOM updates after user interaction using screen.getByText() or similar assertions.

---

## 📌 Introduction to Unit Testing with Jest #17

### 🎯 Goal

Learn the basics of unit testing in React using Jest.

### ❓ Why is this important?

Focus Bear relies on automated testing to ensure the stability of features across updates. Writing unit tests prevents regressions and improves code reliability.

### 🛠️ Task

#### 1️⃣ Research what Jest is and why unit tests are important.

Jest is a JavaScript testing framework maintained by Meta. It’s widely used for testing React applications and supports features like Snapshot testing,Mock functions, Code coverage, Built-in test runner.

It is important because it catches bugs before code is deployed helps prevent regressions during refactoring and documents intended behavior of functions/components.

#### 2️⃣ Set up Jest in your React project (if not already included).

The project was created using Create React App (CRA), Jest is already installed and configured.
Verify this by checking for "react-scripts" in your package.json:

```
"scripts": {
  "test": "react-scripts test"
}
```

Then you're ready to run:

```
npm test
```

#### 3️⃣ Write a simple test for a utility function (e.g., a function that adds two numbers).

Create a file called utils.js:

```
// utils.js
export function add(a, b) {
  return a + b;
}
```

Create utils.test.js in the same folder:

```
// utils.test.js
import { add } from './utils';

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds negative numbers', () => {
  expect(add(-2, -3)).toBe(-5);
});
```

#### 4️⃣ Run the test and check that it passes.

```
npm test
```

Expected output:

```
PASS  ./utils.test.js
✓ adds two numbers correctly
✓ adds negative numbers
```

#### 5️⃣ Push your test to GitHub.

#### 6️⃣ Reflection (in unit_tests.md):

##### Why is automated testing important in software development?

Automated testing is important in software development because it helps prevent regressions by catching bugs early when changes unintentionally break existing functionality. It also improves developer confidence, allowing teams to make changes without the fear of introducing new issues elsewhere in the codebase. Additionally, automated tests speed up development by reducing the need for repetitive manual QA, leading to faster and more reliable releases. Finally, unit tests serve as live documentation, clearly outlining the expected behavior of functions and components for current and future developers.

##### What did you find challenging when writing your first Jest test?

I found Syntax learning curve was challenging. Understanding describe, test, expect, and different matchers took a bit of initial practice.

Jest configuration: Making sure the project was correctly set up with Babel or CRA for Jest to run smoothly.

```
npx create-react-app my-app
cd my-app
npm test
```

The `npm test` command launches Jest without needing any extra setup — CRA handles the config behind the scenes. We can immediately start writing tests in files named like `\*.test.js.`

Testing edge cases: It was a bit tricky to think through and cover all possible edge cases for a function, even a simple one.

---

## 📌 Mocking API Calls in Jest #15

### 🎯 Goal

Learn how to mock API calls in Jest to test asynchronous code.

### ❓ Why is this important?

Focus Bear interacts with APIs for authentication, analytics, and more. Mocking API calls in tests ensures that components behave correctly without making real network requests.

### 🛠️ Task

#### 1️⃣ Research how to mock API calls in Jest using jest.fn() and jest.mock().

`jest.fn()` creates a mock function you can control and inspect.

`jest.mock()` allows you to mock entire modules, such as axios, so that real HTTP requests are not sent during tests.

#### 2️⃣ Create a React component that fetches and displays data from an API.

```
// User.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/api/user').then((response) => {
      setUser(response.data);
    });
  }, []);

  return <div>{user ? `Hello, ${user.name}` : 'Loading...'}</div>;
};

export default User;
```

#### 3️⃣ Write a Jest test that mocks the API call and verifies the component’s behavior.

```
// User.test.js
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import User from './User';

jest.mock('axios');

test('displays user name after API call', async () => {
  axios.get.mockResolvedValue({ data: { name: 'Focus Bear' } });

  render(<User />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('Hello, Focus Bear')).toBeInTheDocument();
  });
});
```

#### 4️⃣ Run the test and check that it passes.

```
npm test
```

The test should pass, confirming that:

- The mock API call works.

- The UI updates based on the returned data.

#### 5️⃣ Push your test to GitHub.

#### 6️⃣ Reflection (in unit_tests.md):

##### Why is it important to mock API calls in tests?

Mocking API calls ensures that tests are fast, reliable, and deterministic. It avoids making real network requests, which could fail due to external reasons and slow down the test suite. It also helps isolate the component logic from external services.

##### What are some common pitfalls when testing asynchronous code?

Some risks might be encountered while testing asynchronous code. These risks are ...

- Forgetting to await data updates may result in false test failures.

- Mock not being reset between tests can lead to flaky results.

- Not accounting for loading states or race conditions can make tests brittle.

---

## 📌 Testing Redux with Jest #14

### 🎯 Goal

Learn how to test Redux slices and actions using Jest.

### ❓ Why is this important?

State management is central to Focus Bear’s functionality. Writing tests for Redux ensures that reducers and actions work as expected.

### 🛠️ Task

#### 1️⃣ Research how to test Redux reducers and actions in Jest.

- Reducers: Test by passing initial state and action to see if state updates as expected.
- Async actions (thunks): Use redux-mock-store or manually mock the dispatch and API.

#### 2️⃣ Create a simple Redux slice (if not already created).

```
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

#### 3️⃣ Write a test that checks if a reducer updates state correctly.

```
// counterSlice.test.js
import counterReducer, { increment, incrementByAmount } from './counterSlice';

describe('counter reducer', () => {
  it('should handle initial state', () => {
    expect(counterReducer(undefined, {})).toEqual({ value: 0 });
  });

  it('should handle increment', () => {
    const previousState = { value: 0 };
    expect(counterReducer(previousState, increment())).toEqual({ value: 1 });
  });

  it('should handle incrementByAmount', () => {
    const previousState = { value: 2 };
    expect(counterReducer(previousState, incrementByAmount(5))).toEqual({ value: 7 });
  });
});
```

#### 4️⃣ Write a test for an asynchronous Redux action (if applicable).

asyncThunk.js (optional)

```
// asyncThunk.js (optional)
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCount = createAsyncThunk('counter/fetchCount', async () => {
  const response = await axios.get('/api/count');
  return response.data.count;
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCount.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default counterSlice.reducer;
```

asyncThunk.test.js

```
// asyncThunk.test.js
import reducer, { fetchCount } from './asyncThunk';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

test('fetchCount updates state after async call', async () => {
  mock.onGet('/api/count').reply(200, { count: 42 });

  const store = configureStore({ reducer, middleware: [thunk] });

  await store.dispatch(fetchCount());
  expect(store.getState().value).toBe(42);
});
```

#### 5️⃣ Run the tests and check that they pass.

```
npm test
```

#### 6️⃣ Push your test to GitHub.

#### 7️⃣ Reflection (in unit_tests.md):

##### What was the most challenging part of testing Redux?

Testing asynchronous actions required additional setup, like mocking API responses and configuring middleware. It was also important to ensure that state transitions were tested after async calls resolved.

##### How do Redux tests differ from React component tests?

Redux tests focus purely on state and action logic. They don’t involve rendering UI elements or simulating user behavior. React component tests use tools like React Testing Library to interact with the DOM, whereas Redux tests often assert object equality in reducer outputs.
