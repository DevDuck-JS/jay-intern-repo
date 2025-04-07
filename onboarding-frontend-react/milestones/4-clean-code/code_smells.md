# 🏆 Milestone: Clean Code

## 📌 Understanding Clean Code Principles

### 🎯 Goal

Understand the core principles of clean code and why they matter in real-world development.

### 🛠️ Task

#### 1️⃣ Research and summarize the following clean code principles in clean_code.md:

##### Simplicity – Keep code as simple as possible.

##### Readability – Code should be easy to understand.

##### Maintainability – Future developers (including you!) should be able to work with the code easily.

##### Consistency – Follow style guides and project conventions.

##### Efficiency – Write performant, optimized code without premature over-engineering.

#### 2️⃣ Find an example of messy code online (or write one yourself) and describe why it's difficult to read.

#### 3️⃣ Rewrite the code in a cleaner, more structured way.

---

## 📌 Code Formatting & Style Guides

### 🎯 Goal

Understand the importance of code formatting and how to use tools like linters to enforce consistency.

### 🛠️ Task

#### 1️⃣ Research the importance of consistent code style.

#### 2️⃣ Review the Airbnb javascript style guide.

#### 3️⃣ Install and configure ESLint and Prettier in your development environment.

#### 4️⃣ Run the formatter and linter on your codebase and fix any issues.

#### 5️⃣ Write reflections in clean_code.md:

##### Why is code formatting important?

##### What issues did the linter detect?

##### Did formatting the code make it easier to read?

---

## 📌 Naming Variables & Functions

### 🎯 Goal

Learn how to choose clear and meaningful names for variables and functions.

### 🛠️ Task

#### 1️⃣ Research best practices for naming variables and functions.

#### 2️⃣ Find examples of unclear variable names in an existing codebase (or write your own).

#### 3️⃣ Refactor the code by renaming variables/functions for better clarity.

#### 4️⃣ Write reflections in clean_code.md:

##### What makes a good variable or function name?

##### What issues can arise from poorly named variables?

##### How did refactoring improve code readability?

### 🚀 Next Steps

Move on to **Writing Small, Focused Functions**

---

## 📌 Writing Small, Focused Functions

### 🎯 Goal

Learn how to break down large functions into smaller, more maintainable units.

### 🛠️ Task

#### 1️⃣ Research best practices for writing small, single-purpose functions.

#### 2️⃣ Find an example of a long, complex function in an existing codebase (or write your own).

#### 3️⃣ Refactor it into multiple smaller functions with clear responsibilities.

#### 4️⃣ Write reflections in clean_code.md:

##### Why is breaking down functions beneficial?

##### How did refactoring improve the structure of the code?

### 🚀 Next Steps

Move on to **Avoiding Code Duplication**

---

## 📌 Avoiding Code Duplication

### 🎯 Goal

Understand how to identify and eliminate unnecessary duplication in code.

### 🛠️ Task

#### 1️⃣ Research the "Don't Repeat Yourself" (DRY) principle.

#### 2️⃣ Find a section of code in your test repo with unnecessary repetition.

#### 3️⃣ Refactor the code to eliminate duplication.

#### 4️⃣ Write reflections in clean_code.md:

##### What were the issues with duplicated code?

##### How did refactoring improve maintainability?

### 🚀 Next Steps

## Move on to **Refactoring Code for Simplicity**

---

## 📌 Refactoring Code for Simplicity

### 🎯 Goal

Learn how to simplify complex or overly engineered code without losing functionality.

### 🛠️ Task

#### 1️⃣ Research common refactoring techniques.

#### 2️⃣ Find an example of overly complicated code in an existing project (or write your own).

#### 3️⃣ Write reflections in clean_code.md:

##### What made the original code complex?

##### How did refactoring improve it?

### 🚀 Next Steps

Move on to **Commenting & Documentation**

---

## 📌 Commenting & Documentation

### 🎯 Goal

Learn when and how to write helpful comments and documentation.

### 🛠️ Task

#### 1️⃣ Research best practices for writing comments and documentation.

#### 2️⃣ Find an example of poorly commented code and rewrite the comments to be more useful.

#### 3️⃣ Write reflections in clean_code.md:

##### When should you add comments?

##### When should you avoid comments and instead improve the code?

### 🚀 Next Steps

Move on to **Handling Errors & Edge Cases**

---

## 📌 Handling Errors & Edge Cases

### 🎯 Goal

Learn how to write robust code that gracefully handles errors and unexpected inputs.

### 🛠️ Task

#### 1️⃣ Research strategies for handling errors and edge cases in code (include Guard Clauses).

#### 2️⃣ Find an existing function that doesn’t properly handle errors or invalid inputs.

#### 3️⃣ Refactor the function to improve error handling.

#### 4️⃣ Write reflections in clean_code.md:

##### What was the issue with the original code?

##### How does handling errors improve reliability?

### 🚀 Next Steps

Doesn't specifiy a next step.

---

## 📌 Static Analysis Checks in CI/CD

### 🎯 Goal

Understand the purpose of Continuous Integration (CI) and Continuous Deployment (CD) and learn how to enforce Markdown linting and spell checks automatically in a project.

### 🛠️ Task

#### 1️⃣ Research what CI/CD is and why it’s used in software development.

#### 2️⃣ Set up a CI workflow that runs Markdown linting and spell checks on PRs in your repo.

#### 3️⃣ Experiment with Git Hooks (e.g., Husky) to enforce linting before commits.

#### 4️⃣ Open a test PR in your repository and review the automated checks.

#### 5️⃣ Push your CI/CD configuration to your repo.

#### 6️⃣ Write reflections in ci_cd_reflection.md:

##### What is the purpose of CI/CD?

##### How does automating style checks improve project quality?

##### What are some challenges with enforcing checks in CI/CD?

##### How do CI/CD pipelines differ between small projects and large teams?

---

## 📌 Identifying & Fixing Code Smells

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

##### How did refactoring improve the readability and maintainability of the code?

##### How can avoiding code smells make future debugging easier?

---

## 📌 Writing Unit Tests for Clean Code

### 🎯 Goal

Learn how writing unit tests helps maintain clean and reliable code.

### 🛠️ Task

#### 1️⃣ Research the importance of unit testing in software development.

#### 2️⃣ Choose a testing framework (e.g., Jest for JavaScript, PyTest for Python).

#### 3️⃣ Write a few unit tests for a function in your test repo.

#### 4️⃣ Write reflections in clean_code.md:

##### How do unit tests help keep code clean?

##### What issues did you find while testing?

### 🚀 Next Steps

Now you’re ready to apply clean code principles in real-world projects! 🎉
