# 🏆 Milestone: 7. Redux

## 📌 Introduction to Redux Toolkit (State Management) #25

### 🎯 Goal

Manage global state effectively using Redux Toolkit.

### ❓ Why is this important?

### 🛠️ Task

#### 1️⃣ Install Redux Toolkit and React Redux.

#### 2️⃣ Create a Redux store and configure a slice for a counter.

#### 3️⃣ Use useSelector and useDispatch to connect Redux to the Counter.js component.

#### 4️⃣ Push your Redux setup to GitHub.

#### 5️⃣ Reflection (in redux_fundamentals.md):

##### When should you use Redux instead of useState?

I should use Redux instead of useState when:

- I need to share state across multiple components that aren’t directly connected in the component tree.

- The application state is complex, such as nested or deeply structured data.

- I require a predictable and centralized store to help with debugging, logging, and time travel (via Redux DevTools).

- The app involves side effects like async API calls and needs middleware like redux-thunk or redux-saga.

Example: In a productivity app like Focus Bear, global user settings (e.g. theme, preferences, authentication) are better managed with Redux since they are accessed by various components across the app.

---

## 📌 Using Selectors in Redux Toolkit #24

### 🎯 Goal

Learn how to extract state efficiently from Redux.

### ❓ Why is this important?

### 🛠️ Task

#### 1️⃣ Create a selector function to get the current counter value from Redux.

#### 2️⃣ Use useSelector to access the counter value in multiple components.

#### 3️⃣ Modify the app to display different messages based on the counter value.

#### 4️⃣ Push your Redux setup to GitHub.

#### 5️⃣ Reflection (in redux_fundamentals.md):

##### What are the benefits of using selectors instead of directly accessing state?

Encapsulation: Selectors hide the shape of the state, so components don’t depend on the exact structure of the Redux store.

- Reusability: Once created, selectors can be reused across multiple components, reducing duplicated logic.

- Performance Optimization: Memoized selectors (e.g., using `reselect`) prevent unnecessary re-renders by caching results when state hasn’t changed.

- Improved Readability: Selectors give meaningful names to data access logic, making code easier to understand.

Example: Instead of accessing `state.counter.value` directly in every component, a `selectCounterValue(state)` function makes the code cleaner and more maintainable.
