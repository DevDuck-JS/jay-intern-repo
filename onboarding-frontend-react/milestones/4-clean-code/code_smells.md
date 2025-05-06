# 🏆 Milestone: Clean Code

## 📌 Understanding Clean Code Principles #44

### 🎯 Goal

Understand the core principles of clean code and why they matter in real-world development.

### 🛠️ Task

#### 1️⃣ Research and summarize the following clean code principles in clean_code.md:

##### Simplicity – Keep code as simple as possible.

Keep code as simple as possible, avoid unnecessary complexity. Use straightforward logic and avoid clever hacks that are hard to follow.
Example: Prefer if (user.isActive) over complex nested ternary operators.

##### Readability – Code should be easy to understand.

Code should be written for humans first, not just machines. Clear variable names, spacing, and structure improve readability.
Example: Naming a variable totalPrice is better than tp.

##### Maintainability – Future developers (including you!) should be able to work with the code easily.

Well-structured code should be easy to update, debug, and extend. Avoid hardcoding values or duplicating logic.
Example: Use constants and reusable functions instead of repeating logic.

##### Consistency – Follow style guides and project conventions.

Stick to a unified code style across the project. Follow naming conventions, indentation, and formatting rules.
Example: If camelCase is used for variables, don’t mix in snake_case.

##### Efficiency – Write performant, optimized code without premature over-engineering.

Write performant code without unnecessary operations. But avoid premature optimization—focus on clarity first, then optimize bottlenecks.
Example: Use appropriate data structures like Set instead of Array for faster lookups.

#### 2️⃣ Find an example of messy code online (or write one yourself) and describe why it's difficult to read.

```
function a(x) {
  var y = 0; for (var i = 0; i < x.length; i++) {
    if(x[i] % 2 === 0) y+=x[i];
  } return y;
}

```

#### 3️⃣ Rewrite the code in a cleaner, more structured way.

```
function sumEvenNumbers(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    if (current % 2 === 0) {
      total += current;
    }
  }

  return total;
}
```

---

## 📌 Code Formatting & Style Guides #43

### 🎯 Goal

Understand the importance of code formatting and how to use tools like linters to enforce consistency.

### 🛠️ Task

#### 1️⃣ Research the importance of consistent code style.

#### 2️⃣ Review the Airbnb javascript style guide.

#### 3️⃣ Install and configure ESLint and Prettier in your development environment.

#### 4️⃣ Run the formatter and linter on your codebase and fix any issues.

#### 5️⃣ Write reflections in clean_code.md:

##### Why is code formatting important?

Consistent code formatting is essential because it ...

- Improves readability for you and your team.
- Makes it easier to spot bugs and inconsistencies.
- Helps maintain a professional, clean codebase.
- Reduces unnecessary discussions during code reviews about spacing, indentation, or styling.
- Enables automation of style checks with tools like ESLint and Prettier.

##### What issues did the linter detect?

After setting up ESLint with the Airbnb JavaScript style guide and running it on my codebase, the linter detected:

- Missing semicolons.
- Improper indentation.
- Unused variables.
- Use of var instead of let or const.
- Arrow function formatting inconsistencies.
- Missing spacing around operators and brackets.

##### Did formatting the code make it easier to read?

Yes, absolutely. For me, fomatting the code with Prettier made it:

- Easier to scan through long functions and nested structures.
- Visually consistent, especially across files written by different contributors.
- Cleaner and less error-prone, since the structure now highlights logical blocks clearly.

Example Before:

```
function greet(name){return "Hello, "+name;}
```

Example After Prettier:

```
function greet(name) {
  return "Hello, " + name;
}
```

Even this small change makes a big difference in clarity.

---

## 📌 Naming Variables & Functions #42

### 🎯 Goal

Learn how to choose clear and meaningful names for variables and functions.

### 🛠️ Task

#### 1️⃣ Research best practices for naming variables and functions.

#### 2️⃣ Find examples of unclear variable names in an existing codebase (or write your own).

#### 3️⃣ Refactor the code by renaming variables/functions for better clarity.

#### 4️⃣ Write reflections in clean_code.md:

##### What makes a good variable or function name?

A good name should be:

- Descriptive – clearly communicates the purpose or data it holds.
- Consistent – follows naming conventions like camelCase for variables/functions.
- Concise – long enough to be meaningful, but not overly verbose.
- Contextual – makes sense within its scope and avoids ambiguity.

Example:
Use `userEmail` instead of `ue` or `data`.

##### What issues can arise from poorly named variables?

Poorly named variables can:

- Make the code hard to understand for others (or your future self).
- Increase the chance of bugs due to confusion or incorrect assumptions.
- Slow down debugging and onboarding for new developers.
- Lead to repetition or duplication of logic due to unclear intent.

##### How did refactoring improve code readability?

Example of badly unclear variable naming

```
function c(x) {
  let t = 0;
  for (let i = 0; i < x.length; i++) {
    t += x[i];
  }
  return t / x.length;
}
```

After refactored:

```
function calculateAverage(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length;
}
```

### 🚀 Next Steps

Move on to **Writing Small, Focused Functions**

---

## 📌 Writing Small, Focused Functions #41

### 🎯 Goal

Learn how to break down large functions into smaller, more maintainable units.

### 🛠️ Task

#### 1️⃣ Research best practices for writing small, single-purpose functions.

#### 2️⃣ Find an example of a long, complex function in an existing codebase (or write your own).

#### 3️⃣ Refactor it into multiple smaller functions with clear responsibilities.

#### 4️⃣ Write reflections in clean_code.md:

##### Why is breaking down functions beneficial?

Breaking down function helps me work easier in multiple ways. It ..

- makes the code easier to understand, test, and debug.
- improves reusability of logic across different parts of the codebase.
- simplifies unit testing, since each function handles one responsibility.
- encourages cleaner separation of concerns, making future changes easier.

##### How did refactoring improve the structure of the code?

Before Refactor (Monolithic Function):

```
function processOrder(order) {
  // Validate order
  if (!order.items || order.items.length === 0) return 'Invalid order';
  // Calculate total
  let total = 0;
  order.items.forEach(item => {
    total += item.price * item.quantity;
  });
  // Save order
  database.save(order);
  // Send confirmation
  email.send(order.customerEmail, 'Your order was placed.');
  return total;
}
```

After Refactor (Smaller, Focused Functions):

```
function isValidOrder(order) {
  return order.items && order.items.length > 0;
}

function calculateTotal(order) {
  return order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function processOrder(order) {
  if (!isValidOrder(order)) return 'Invalid order';
  const total = calculateTotal(order);
  database.save(order);
  email.send(order.customerEmail, 'Your order was placed.');
  return total;
}
```

Improvements includes:

- Modular: Each function has a single, well-defined purpose.
- Readable: Easier to scan and understand what each step does.
- Maintainable: Can update logic (e.g., email format or calculation method) independently.
- Testable: Each function can be unit tested in isolation.

### 🚀 Next Steps

Move on to **Avoiding Code Duplication**

---

## 📌 Avoiding Code Duplication #40

### 🎯 Goal

Understand how to identify and eliminate unnecessary duplication in code.

### 🛠️ Task

#### 1️⃣ Research the "Don't Repeat Yourself" (DRY) principle.

#### 2️⃣ Find a section of code in your test repo with unnecessary repetition.

#### 3️⃣ Refactor the code to eliminate duplication.

#### 4️⃣ Write reflections in clean_code.md:

##### What were the issues with duplicated code?

- Hard to maintain – Making changes required editing multiple places, increasing the risk of missing one.
- Error-prone – Inconsistencies can creep in when repeated logic is slightly altered in one spot but not others.
- Reduced readability – Long repeated blocks make it harder to follow the core logic.
- Bloated codebase – More lines of code than necessary, making the project harder to navigate.

##### How did refactoring improve maintainability?

Before Refactor (Repeated Code):

```
function greetUser(name) {
  console.log("Hello " + name);
  console.log("Welcome to Focus Bear!");
  console.log("Have a productive day.");
}

function greetAdmin(name) {
  console.log("Hello " + name);
  console.log("Welcome to Focus Bear!");
  console.log("Have a productive day.");
  console.log("Here are your admin tools.");
}
```

After Refactor (DRY Applied):

```function baseGreeting(name) {
  console.log("Hello " + name);
  console.log("Welcome to Focus Bear!");
  console.log("Have a productive day.");
}

function greetUser(name) {
  baseGreeting(name);
}

function greetAdmin(name) {
  baseGreeting(name);
  console.log("Here are your admin tools.");
}
```

Benefits of this refactoring include ..

- Centralized logic – One place to update shared messaging.
- Easier to maintain – Less chance of introducing inconsistencies or missing updates.
- Cleaner structure – Each function now handles only its unique additions to the base greeting.

### 🚀 Next Steps

## Move on to **Refactoring Code for Simplicity**

---

## 📌 Refactoring Code for Simplicity #39

### 🎯 Goal

Learn how to simplify complex or overly engineered code without losing functionality.

### 🛠️ Task

#### 1️⃣ Research common refactoring techniques.

#### 2️⃣ Find an example of overly complicated code in an existing project (or write your own).

#### 3️⃣ Write reflections in clean_code.md:

##### What made the original code complex?

Here are a few things that make code complex.

- Too many nested conditions – Made the logic hard to follow.
- Unnecessary abstractions – The code used extra classes/functions that didn’t add value.
- Verbose and repetitive syntax – Required more lines than necessary to express a simple idea.
- Lack of clear naming – Variables and functions didn’t communicate their purpose well.

##### How did refactoring improve it?

Before Refactor (Over-engineered Code):

```
function getUserStatus(user) {
  if (user !== null && user !== undefined) {
    if (user.isActive === true) {
      return "Active";
    } else {
      return "Inactive";
    }
  } else {
    return "Unknown";
  }
}
```

After Refactor (Simplified Version):

```
function getUserStatus(user) {
  if (!user) return "Unknown";
  return user.isActive ? "Active" : "Inactive";
}
```

Benefits of Refactoring:

- Fewer lines – Same logic in fewer, clearer lines.
- More readable – Easier for others (and future you) to scan and understand.
- Less error-prone – Simpler logic means less chance of introducing bugs during updates.

### 🚀 Next Steps

Move on to **Commenting & Documentation**

---

## 📌 Commenting & Documentation #38

### 🎯 Goal

Learn when and how to write helpful comments and documentation.

### 🛠️ Task

#### 1️⃣ Research best practices for writing comments and documentation.

#### 2️⃣ Find an example of poorly commented code and rewrite the comments to be more useful.

#### 3️⃣ Write reflections in clean_code.md:

##### When should you add comments?

Here are the main purposes I found writing comments serves:

- To explain why, not what – when logic is non-obvious or context is important.
- For complex algorithms – where the reasoning isn’t immediately clear from the code itself.
- To clarify workarounds or technical constraints – especially when dealing with third-party libraries or legacy systems.
- When writing TODOs or FIXMEs – to leave notes for future improvements or pending issues.
- To document assumptions – especially in business logic that may not be intuitive.

##### When should you avoid comments and instead improve the code?

Here are situtaions where I don't find writing comments are so helpful:

- When the code is self-explanatory with better naming – good function and variable names reduce the need for comments.

- When a comment just repeats what the code says – these are redundant and clutter the code.

- When comments try to explain messy code – it's better to refactor the code for clarity.

Here are some examples I could think of
Before (Poor Commenting):

```let x = 5; // set x to 5
if (x > 3) {
  // check if x is greater than 3
  console.log("x is big");
}
```

After (Better Naming, Fewer Comments):

```let itemCount = 5;
if (itemCount > 3) {
  console.log("High stock level");
}
```

Or, if necessary:

```// Threshold determined by user research: users feel overwhelmed when >3 items are shown
if (itemCount > 3) {
  console.log("High stock level");
}
```

### 🚀 Next Steps

Move on to **Handling Errors & Edge Cases**

---

## 📌 Handling Errors & Edge Cases #37

### 🎯 Goal

Learn how to write robust code that gracefully handles errors and unexpected inputs.

### 🛠️ Task

#### 1️⃣ Research strategies for handling errors and edge cases in code (include Guard Clauses).

#### 2️⃣ Find an existing function that doesn’t properly handle errors or invalid inputs.

#### 3️⃣ Refactor the function to improve error handling.

#### 4️⃣ Write reflections in clean_code.md:

##### What was the issue with the original code?

- The function didn’t validate input types or values.

- It assumed certain data always existed (e.g., user.name), leading to potential runtime errors.

- There were no early exits or guard clauses, making the function harder to follow and more error-prone.

- Unexpected inputs (like null, undefined, or wrong data types) weren’t accounted for.

##### How does handling errors improve reliability?

- Prevents crashes – Code fails gracefully instead of throwing unhandled exceptions.

- Improves user experience – Displays helpful error messages or fallback behavior.

- Simplifies debugging – Clear error messages and conditions help isolate issues faster.

- Enhances maintainability – Easier for teammates to understand edge cases and system limits.

This is my example of refactoring with `Guard Clauses`
Before (No Validation):

```
function getUserGreeting(user) {
  return "Hello, " + user.name.toUpperCase();
}
```

After (With Guard Clauses):

```
function getUserGreeting(user) {
  if (!user || !user.name) {
    return "Hello, guest!";
  }

  return "Hello, " + user.name.toUpperCase();
}
```

Improvements made are

- Adds safety checks for null or missing name.

- Returns a friendly fallback message.

- Clear logic with early return keeps the function clean and predictable.

### 🚀 Next Steps

Doesn't specifiy a next step.

---

## 📌 Static Analysis Checks in CI/CD #34

### 🎯 Goal

Understand the purpose of Continuous Integration (CI) and Continuous Deployment (CD) and learn how to enforce Markdown linting and spell checks automatically in a project.

### 🛠️ Task

#### 1️⃣ Research what CI/CD is and why it’s used in software development.

- Markdown linting via markdownlint-cli2
- Spell checking via cspell

```
.github/workflows/lint-and-spellcheck.yml
```

#### 2️⃣ Set up a CI workflow that runs Markdown linting and spell checks on PRs in your repo.

```
name: Markdown Lint and Spell Check

on:
  pull_request:
    branches:
      - main

jobs:
  markdown-check:
    name: Run markdownlint and cspell
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install markdownlint and cspell
        run: |
          npm install -g markdownlint-cli2 cspell

      - name: Run markdownlint
        run: |
          markdownlint-cli2 "**/*.md" "#node_modules"

      - name: Run spell check
        run: |
          cspell "**/*.md"
```

Optional: Add cspell.json config (in the root folder)

```
{
  "version": "0.2",
  "language": "en",
  "dictionaries": ["typescript", "node", "softwareTerms"],
  "ignorePaths": ["node_modules", "dist", ".github"],
  "ignoreWords": ["ci", "eslint", "markdownlint", "prettier", "vite"]
}
```

Optional: Add markdownlint.json config

```
{
  "default": true,
  "MD013": false, // ignore line length rule
  "MD033": false  // allow inline HTML in markdown
}
```

Commit structure suggestion

```
mkdir -p .github/workflows
touch .github/workflows/lint-and-spellcheck.yml
npm init -y
npm install --save-dev markdownlint-cli2 cspell
```

#### 3️⃣ Experiment with Git Hooks (e.g., Husky) to enforce linting before commits.

#### 4️⃣ Open a test PR in your repository and review the automated checks.

#### 5️⃣ Push your CI/CD configuration to your repo.

#### 6️⃣ Write reflections in ci_cd_reflection.md:

##### What is the purpose of CI/CD?

- CI (Continuous Integration) makes sure that code changes are automatically built, tested, and validated before being merged.

- CD (Continuous Deployment/Delivery) automates the release of new features or updates after successful testing.

- The goal is to catch issues early (best before the production release), speed up development cycles, and maintain high software quality.

##### How does automating style checks improve project quality?

- Enforces consistent formatting and spelling across markdown files and code.

- Prevents minor issues from accumulating, making the codebase easier to read and maintain.

- Reduces manual review time by automating basic checks before human review.

- Builds a professional, polished product by catching typos and style inconsistencies early.

##### What are some challenges with enforcing checks in CI/CD?

- Developers may face setup issues or delays if tools are misconfigured.

- False positives can block PRs unnecessarily if the rules are too strict.

- Team members need to understand and follow the standards, which can require training.

- In large teams, maintaining and updating CI rules requires coordination and shared responsibility.

##### How do CI/CD pipelines differ between small projects and large teams?

- Small Projects: Pipelines are simpler, often just linting and testing. Fewer steps mean faster builds.

- Large Teams: Pipelines are more complex, with parallel jobs, staging environments, deployment previews, security scans, and testing across multiple platforms.

- Larger projects also require more robust error handling, caching, and scaling strategies to support team-wide collaboration.

---

## 📌 Identifying & Fixing Code Smells #35

### 🎯 Goal

Learn how to recognize common code smells and refactor them for better readability, maintainability, and performance.

### 🛠️ Task

#### 1️⃣ Research common code smells and how they impact code quality.

#### 2️⃣ Find or write code examples that demonstrate the following code smells:

##### Magic Numbers & Strings – Using hardcoded values instead of constants.

##### Long Functions – Functions that do too much and should be broken into smaller parts.

##### Duplicate Code – Copy-pasting logic instead of reusing functions.

##### Large Classes (God Objects) – Classes that handle too many responsibilities.

##### Deeply Nested Conditionals – Complex if/else trees that make code harder to follow.

##### Commented-Out Code – Unused code that clutters the codebase.

##### Inconsistent Naming – Variable names that don't clearly describe their purpose.

#### 3️⃣ Refactor the code to eliminate these code smells.

#### 4️⃣ Write reflections in code_smells.md:

##### What code smells did you find in your code?

- Magic Numbers & Strings: Hardcoded values like 0.07 or "USD" were scattered across functions.

Before

```
function calculateTax(amount) {
  return amount * 0.07; // 7% tax hardcoded
}
```

After

```
const TAX_RATE = 0.07;

function calculateTax(amount) {
  return amount * TAX_RATE;
}
```

- Long Functions: A single function was handling both data fetching and UI rendering.

Before

```
async function fetchUserAndRender() {
  const res = await fetch("/api/user");
  const user = await res.json();
  document.getElementById("name").textContent = user.name;
  document.getElementById("email").textContent = user.email;
}
```

After

```
async function fetchUser() {
  const res = await fetch("/api/user");
  return await res.json();
}

function renderUser(user) {
  document.getElementById("name").textContent = user.name;
  document.getElementById("email").textContent = user.email;
}

async function fetchUserAndRender() {
  const user = await fetchUser();
  renderUser(user);
}
```

- Duplicate Code: Several blocks repeated the same API call logic.

Before

```
response1 = requests.get("https://api.example.com/data")
if response1.status_code == 200:
    data1 = response1.json()

response2 = requests.get("https://api.example.com/data")
if response2.status_code == 200:
    data2 = response2.json()
```

After

```
def fetch_data():
    response = requests.get("https://api.example.com/data")
    return response.json() if response.status_code == 200 else None

data1 = fetch_data()
data2 = fetch_data()
```

- Commented-Out Code: Old logic was left commented instead of removed.

Before

```
# old_function()
# print("debug info")

print("Running new logic")
```

After

```
print("Running new logic")
```

- Inconsistent Naming: Variables like res, x, or data1 didn’t communicate their purpose.

Before

```
const x = getUserInfo();
const y = x.email;
```

After

```
const userInfo = getUserInfo();
const userEmail = userInfo.email;
```

##### How did refactoring improve the readability and maintainability of the code?

- Replacing magic numbers with constants like TAX_RATE made the purpose of values clearer.

- Splitting long functions into smaller, single-purpose functions made the code easier to follow and reuse.

- Extracting repeated logic into a utility function reduced duplication and potential bugs.

- Removing commented-out code reduced visual noise and confusion.

- Renaming variables to descriptive names improved self-documentation and helped collaborators understand intent quickly.

##### How can avoiding code smells make future debugging easier?

- Clean, well-structured code makes it easier to trace bugs and understand the flow of logic.

- Clear variable names and consistent structure reduce the mental effort required when fixing or reviewing code.

- Removing duplication and nested conditionals narrows down where bugs can occur, saving time in debugging sessions.

- Future developers (including your future self) can work faster and with fewer mistakes when the codebase is clean.

---

## 📌 Writing Unit Tests for Clean Code #36

### 🎯 Goal

Learn how writing unit tests helps maintain clean and reliable code.

### 🛠️ Task

#### 1️⃣ Research the importance of unit testing in software development.

#### 2️⃣ Choose a testing framework (e.g., Jest for JavaScript, PyTest for Python).

#### 3️⃣ Write a few unit tests for a function in your test repo.

Sample Function (to be tested)

```
// math.js
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Inputs must be numbers");
  }
  return a + b;
}

module.exports = { add };
```

Unit Test (Using Jest)

```
// math.test.js
const { add } = require('./math');

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

test('throws error when input is not a number', () => {
  expect(() => add(2, 'a')).toThrow("Inputs must be numbers");
});
```

#### 4️⃣ Write reflections in clean_code.md:

##### How do unit tests help keep code clean?

Unit tests comfirms modularity and simplicity, as writing tests becomes easier when functions do one thing well. They prevent regressions when making changes to code. They also act as documentation for how each function is expected to behave.

##### What issues did you find while testing?

I initially didn’t handle input validation. Adding a test for non-numeric inputs made me realize I needed to throw a proper error.

Writing tests encouraged me to simplify logic and make the function more robust.

### 🚀 Next Steps

Now you’re ready to apply clean code principles in real-world projects! 🎉
