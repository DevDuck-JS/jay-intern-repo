# 🏆 Milestone: 5. React Fundamentals

## 📌 Understanding Components & Props #29

### 🎯 Goal

Learn the core building blocks of React.

### 🛠️ Task

#### 1️⃣ Create a functional component called HelloWorld.js that displays "Hello, Focus Bear!"

HelloWorld.js

```
// src/components/HelloWorld.js
import React from 'react';

const HelloWorld = ({ name }) => {
  return <h1>Hello, {name || "Focus Bear"}!</h1>;
};
export default HelloWorld;
```

The component HelloWorld.js can be exported to and used in App.js.

```
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld name="Jay" />
    </div>
  );
}
```

#### 2️⃣ Pass a prop called name to the component and display it dynamically.

#### 3️⃣ Push this component to GitHub.

#### 4️⃣ Reflection (in react_fundamentals.md):

##### Why are components important in React?

Components are the building blocks of a React application. They allow you to break down the UI into reusable, self-contained pieces. Each component manages its own logic and layout, making the app modular and easier to maintain.

For example, a HelloWorld component can be reused across multiple pages and customized using props without duplicating code.

---

## 📌 Handling State & User Input #28

### 🎯 Goal

Learn how to manage state using useState.

### 🛠️ Task

#### 1️⃣ Create a component Counter.js with a button that increments a number when clicked.

```
// src/components/Counter.js
import React, { useState } from 'react';

const Counter = () => {
const [count, setCount] = useState(0);

const handleIncrement = () => {
setCount(count + 1);
};

return (

    <div>
        <p>Current Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
    </div>
    );
};

export default Counter;
```

The component Counter.js can be exported to and used in App.js:

```

import Counter from './components/Counter';

function App() {
    return (

    <div>
        <Counter />
    </div>
    );
}

```

#### 2️⃣ Use useState to manage the count value.

#### 3️⃣ Display the count value dynamically.

#### 4️⃣ Push this component to GitHub.

#### 5️⃣ Reflection (in react_fundamentals.md):

##### What happens if we modify state directly instead of using setState?

If state is modified directly (e.g., count = count + 1), React won’t detect the change, and the component won’t re-render. This breaks React’s internal state tracking and can cause bugs or stale UI.

Using setState (via setCount in useState) ensures React knows a state change occurred and triggers the necessary re-render.

---

## 📌 Styling with Tailwind CSS #27

### 🎯 Goal

Learn to style React components using Tailwind CSS.

### 🛠️ Task

#### 1️⃣ Convert Counter.js to use Tailwind CSS classes instead of regular CSS.

```
// src/components/Counter.js
import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-2xl font-bold mb-4">Count: {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
};

export default Counter;
```

#### 2️⃣ Create a Button component with Tailwind styling.

#### 3️⃣ Add hover and active states using Tailwind utilities.

```
// src/components/Button.js
import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:bg-blue-700 transition-colors"
    >
      {children}
    </button>
  );
};

export default Button;
```

This includes:

- `hover:bg-blue-600` → background color darkens on hover.

- `active:bg-blue-700` → background color changes again when actively clicked.

- `transition-colors` → smooth transitions between states.

#### 4️⃣ Push your styled components to GitHub.

#### 5️⃣ Reflection (in react_fundamentals.md):

##### What are the advantages of using Tailwind CSS?

There a several advantages of using Tailwind CSS. The framework essentially ..

- offers utility-first approach allows for rapid styling without leaving your HTML/JSX. Unlike conventional frameworks such as Bootstrap that come with ready-made components, Tailwind provides a broad set of low-level utility classes, allowing you to style elements directly within your HTML.

- makes responsive design easier with built-in breakpoint classes.

- eliminates the need to write custom CSS for most cases.

- promotes consistency through design tokens like spacing and colors.

- works well with component-based frameworks like React.

##### What are some potential pitfalls?

Some trade-offs from using Tailwind CSS can include but not limited to

- JSX becoming cluttered with many class names

- Custom components likely to lose reusability if Tailwind classes are hardcoded

- Maintaining utility-heavy code becoming messy without structure or naming conventions

- Requiring initial configuration and learning curve for new users

---

## 📌 Working with Lists & User Input #26

### 🎯 Goal

Learn to handle lists dynamically in React.

### 🛠️ Task

#### 1️⃣ Create a simple form with an input field and a button.

#### 2️⃣ When the user enters text and clicks the button, add the text to a list.

#### 3️⃣ Display the list dynamically using .map().

```
// src/components/TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (inputValue.trim() === '') return;
    setItems([...items, inputValue]);
    setInputValue('');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">My Todo List</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="border border-gray-300 px-3 py-1 w-full"
          type="text"
          placeholder="Enter a task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={handleAddItem}
          className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-6 space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
```

#### 4️⃣ Push your form component to GitHub.

#### 5️⃣ Reflection (in react_fundamentals.md):

##### What are some common issues when working with lists in React?

Some common issues found with lists in React are

- Missing or duplicate keys: React needs unique key props when rendering lists. Using the index as a key is not ideal in cases where list items may change order or be removed.

- Incorrect state updates: Accidentally mutating state directly can lead to bugs. Always use immutable update patterns (e.g., setItems([...items, newItem])).

- Uncontrolled input issues: Not binding form fields properly can cause unexpected behavior or React warnings.

- Performance concerns: Large lists can be slow if not optimized with virtualization techniques (e.g., react-window or react-virtualized).

---

## 📌 Navigation with React Router #23

### 🎯 Goal

Learn how to navigate between pages in React using React Router.

### 🛠️ Task

#### 1️⃣ Install React Router and set up a basic routing system.

```
npm install react-router-dom
```

#### 2️⃣ Create two pages: Home.js and Profile.js.

Home.js

```
// pages/Home.js
import React from 'react';

function Home() {
  return <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>;
}

export default Home;
```

Profile.js

```
// pages/Profile.js
import React from 'react';

function Profile() {
  return <h1 className="text-2xl font-bold">This is the Profile Page</h1>;
}

export default Profile;
```

#### 3️⃣ Add navigation between the two pages (e.g., using Link or useNavigate).

App.js using Link for navigation.

```
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/profile" className="text-blue-600 hover:underline">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
```

#### 4️⃣ Push your navigation setup to GitHub.

#### 5️⃣ Reflection (in react_fundamentals.md):

##### What are the advantages of client-side routing?

Major advantages of client-side routing are ...

- Faster navigation because client-side routing avoids full page reloads, creating a seamless and responsive user experience.

- Preserved states because switching between pages does not lose application state (like form inputs or scroll position).

- Better user experience from transitions smoother and more like a native app.

- More flexibility which allows for advanced navigation features like route guards, nested routes, and dynamic routes without server intervention.

---

## 📌 Handling Forms with Formik #19

### 🎯 Goal

Learn how to build and manage forms efficiently using Formik.

### 🛠️ Task

#### 1️⃣ Research what Formik is and why it's useful for handling forms in React.

Formik is a React library that simplifies form handling, including managing form state, validation, and submission. It's especially helpful for large or complex forms, and reduces boilerplate code.

#### 2️⃣ Create a form with the following fields:

```
npm install formik yup
```

- Name (text input)
- Email (validated with Formik & Yup)
- A submit button

#### 3️⃣ Use Formik’s useFormik hook or <Formik> component for form handling.

#### 4️⃣ Implement basic validation using Yup.

```
// FormikForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function FormikForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 max-w-md mx-auto mt-10">
      <div>
        <label className="block font-medium">Name:</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="border px-3 py-2 w-full"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-600 text-sm">{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label className="block font-medium">Email:</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="border px-3 py-2 w-full"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-600 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}

export default FormikForm;
```

#### 5️⃣ Push your form component to GitHub.

#### 6️⃣ Reflection (in form_handling.md):

##### How does Formik simplify form management compared to handling state manually?

Formik automatically manages input values, change handlers, touched state, and validation states. Without it, developers would need to manually set up useState, onChange, error checking, and submission logic—adding unnecessary complexity.

##### What are the benefits of using Formik’s validation instead of writing validation logic manually?

Using Yup with Formik allows for concise, declarative schema-based validation. It keeps validation rules in one place and improves maintainability. It also reduces repetitive condition checks and helps prevent inconsistent or missed validations.

---

## 📌 Implementing Internationalization with i18next #18

### 🎯 Goal

Learn how to add multi-language support to a React application using i18next.

### ✅ Why is this important?

Focus Bear supports multiple languages, allowing users worldwide to access the app in their native language. Internationalization (i18n) ensures a seamless experience for non-English speakers and makes the app more inclusive.

### 🛠️ Task

#### 1️⃣ Research how i18next works in React and why internationalization is important.

i18next is a internationalization framework for JavaScript. In React, it integrates through react-i18next, allowing developers to manage multiple languages efficiently.

Internationalization ensures apps are accessible to users across different languages and cultures, increasing global reach and inclusivity.

#### 2️⃣ Set up i18next in a React project.

#### 3️⃣ Create translations for at least two languages (e.g., English & Spanish).

```
/src
  /locales
    /en/translation.json
    /es/translation.json
  i18n.js
  App.js
```

#### 4️⃣ Use useTranslation to display a translated message in a React component.

Install Dependencies

```
npm install i18next react-i18next
```

translation.json - English

```
// /src/locales/en/translation.json
{
  "welcome": "Welcome to Focus Bear!"
}
```

translation.json - Spanish

```
// /src/locales/es/translation.json
{
  "welcome": "!Bienvenido to Focus Bear!"
}
```

#### 5️⃣ Push your i18next implementation to GitHub.

i18n.js

```
// /src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
```

App.js

```
// /src/App.js
import React from 'react';
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div className="App">
      <h1>{t('welcome')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
}

export default App;
```

#### 6️⃣ Reflection (in i18n.md):

##### What challenges did you face while setting up i18next?

The most challenging part was understanding how to structure translation files and configure the i18n instance correctly. Ensuring translations loaded before components rendered also took a few trial-and-error attempts.

##### Why is it important to use a library like i18next instead of manually handling translations?

i18next supports lazy loading, fallbacks, pluralization, and context-aware translations, which are hard to manage manually. It centralizes all translations, making the codebase easier to maintain and scale.

##### How would you handle dynamic content (e.g., user-generated text) in a multilingual app?

For dynamic content, such as user-generated posts, translations typically aren't applied unless users submit content in multiple languages. However, for dynamic UI text, you can pass variables to i18n like t('greeting', { name: 'Jay' }) with Hello, {{name}}! in the translation file.

## 📌 Making API Calls with Axios #13

### 🎯 Goal

Learn how to set up and manage API requests using Axios in a React project.

### ✅ Why is this important?

Focus Bear relies on API calls for authentication, payments, and data retrieval. Understanding how to use Axios properly ensures that API requests are efficient, secure, and well-structured.

### 🛠️ Task

#### 1️⃣ Research how Axios works and why it's commonly used for API calls.

Axios is a popular promise-based HTTP client for making API requests in JavaScript applications (especially React). It simplifies request/response handling and supports interceptors, timeouts, and request cancellation out of the box.

Key advantages are

- Easy syntax: `axios.get('/api/user')`

- Built-in request/response interceptors

- Supports setting a base URL and headers globally

- Automatically transforms JSON data

- Supports `AbortController` for cancellation

##### A base URL for API requests.

##### Default headers (including accept: "_/_" and a dynamically generated request ID).

##### Request timeouts to prevent hanging requests.

##### Request cancellation using AbortController.

#### 2️⃣ Set up an Axios instance with the following requirements:

#### 3️⃣ Add an Axios request interceptor that:

Axios Setup with Instance & Interceptor

```
// src/api/axiosInstance.js
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const axiosInstance = axios.create({
  baseURL: 'https://api.focusbear.io',
  timeout: 8000,
  headers: {
    Accept: '*/*',
    'X-Request-ID': uuidv4(),
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
```

##### Retrieves an authentication token from local storage.

##### Attaches the token to the request headers if available.

##### Properly handles errors.

#### 4️⃣ Make a test API request that:

Example POST Request with AbortController

```

// src/api/testRequest.js
import axiosInstance from './axiosInstance';

export const sendTestRequest = async () => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await axiosInstance.post(
      '/test-endpoint',
      { param1: 'value1' },
      { signal: controller.signal }
    );
    console.log('Success:', response.data);
    // Redirect or notify user
  } catch (error) {
    if (axios.isCancel(error)) {
      console.warn('Request was cancelled:', error.message);
    } else if (error.code === 'ECONNABORTED') {
      console.warn('Request timed out');
    } else {
      console.error('Request error:', error);
    }
  } finally {
    clearTimeout(timeout);
  }
};
```

##### Sends a POST request to an endpoint with parameters.

```
const response = await axiosInstance.post(
  '/test-endpoint',
  { param1: 'value1' }, // ✅ These are the parameters sent in the request body
  { signal: controller.signal } // Used for timeout cancellation
);
```

1. `/test-endpoint` is the API endpoint.

2. `{ param1: 'value1' }` is the parameter payload sent in the request body.

3. The request is sent using the `axiosInstance`, which includes auth headers and timeout config.

##### Handles the response and redirects if necessary.

```
console.log('Success:', response.data);
// Redirect or notify user
```

- `response.data` handles the successful response.
  A placeholder comment is included for redirection: You can replace // Redirect or notify user with actual routing logic such as:

```
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/dashboard');
```

or in a non-component context:

```
window.location.href = '/dashboard'; // simple redirect
```

#### 5️⃣ Push your Axios setup to GitHub.

#### 6️⃣ Reflection (in i18n.md):

##### Why is it useful to create a reusable Axios instance?

A reusable Axios instance helps centralize configuration, such as the base URL, timeouts, and default headers. It keeps your code clean and DRY, especially when making many API calls across the app.

##### How does intercepting requests help with authentication?

Interceptors automatically attach auth tokens to every request. This ensures secure and consistent authentication across the app without manually adding the token each time.

##### What happens if an API request times out, and how can you handle it?

If a request times out, Axios throws an `ECONNABORTED` error. We can handle this gracefully by showing a fallback UI or retry logic. Using `AbortController` or setting a `timeout` value ensures that requests don’t hang indefinitely, preserving UX performance.
