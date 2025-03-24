# 🏆 Milestone: Learn Git

## 📌 Creating & Reviewing Pull Requests

### 🎯 Goal

Learn how to create, review, and collaborate on Pull Requests (PRs) in GitHub.

### 🛠️ Task

#### 1️⃣ Research what a Pull Request (PR) is and why it’s used

A Pull Request (PR) is a way to propose changes to a codebase on platforms like GitHub. It allows developers to submit their changes from one branch (usually a feature branch) to be reviewed and merged into another branch (usually the main branch).

PRs are used to collaborate, review code, catch bugs, and discuss improvements before the changes are added to the main project. They help maintain code quality and encourage teamwork.

#### 2️⃣ Create a new branch in your Git desktop client ✅

#### 3️⃣ Make a small change and push the branch to GitHub ✅

#### 4️⃣ Open a Pull Request on GitHub ✅

- Add a meaningful PR title and description.
- Link to a related issue (if applicable).

#### 5️⃣ Review an existing PR in a public open-source repo (e.g., React PRs) ✅

- Read through comments and discussions.
- Observe how changes are requested and approved.

#### 6️⃣ Write reflections in git_understanding.md ✅

##### Why are PRs important in a team workflow?

Pull Requests are important because they enable collaboration, maintain code quality, and prevent conflicts in team projects. PRs give teammates a chance to review changes before they’re merged, helping catch bugs early, ensure coding standards, and foster shared understanding of the codebase.

##### What makes a well-structured PR?

A well-structured PR is focused, descriptive and easy to review. Here is more explanation for each quality:

- A focused PR only includes changes related to a specific task or feature.

- A descriptive PR has a clear title and a summary explaining the purpose, what was changed, and any context or screenshots if applicable.

- An easy to review PR avoids unnecessary file changes and includes clean, readable code with helpful comments if needed.

Example:

```
Title: Add Timer UI Component
Description:

Built a new timer component using React

Integrated with existing routine start flow

Includes basic styling and placeholder for logic

Closes #23
```

##### What did you learn from reviewing an open-source PR?

I learned how important it is to communicate clearly and respectfully in code reviews. Even small suggestions or questions can lead to better solutions. I also saw how maintainers ask for changes, suggest improvements, and encourage collaboration, which keeps the project healthy and inclusive.

#### 7️⃣ Request feedback on your PR from a peer or mentor ✅

#### 8️⃣ Merge the PR (if approved) and delete the branch ✅

I decided to keep the branch.

## 📌 Writing Meaningful Commit Messages

### 🎯 Goal

Learn how to write clear, meaningful commit messages that improve collaboration and code history readability.

### 🛠️ Task

#### 1️⃣ Research best practices for writing commit messages ✅

Here are a few sources that I followed for the best practices:

- [7 Best Practices of Git Commit Messages, codefitnity](https://codefinity.com/blog/7-Best-Practices-of-Git-Commit-Messages)
- [How to Write Better Git Commit Messages – A Step-By-Step Guide, FreeCodeCamp](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
- [Conventional Commits 1.0.0, Conventional Commits Organization](https://www.conventionalcommits.org/en/v1.0.0/)

#### 2️⃣ Explore commit histories in an open-source GitHub project (e.g., React, Node.js) and analyze good vs. bad commit messages

While exploring the React GitHub repo, I noticed examples of both good and bad commit messages:

✅ Good Example: `fix(react-compiler): optimize components declared with arrow function and implicit return and compilationMode: 'infer' (#31792)`

Follows a clear structure (type: description), communicates exactly what was fixed.

❌ Bad Example: `Stop creating Owner Stacks if many have been created recently (#32529)`

1. Missing a clear intention (type): As you said, it doesn't include a type like fix:, feat:, or refactor:—which makes it harder to understand why the change was made (Was it a bug fix? A performance tweak? A feature update?).

2. Ambiguous phrasing ("many have been created recently"): It’s vague and doesn’t clarify how many is “many” or what defines “recently”. That kind of language can be confusing when reading through history.

3. No context or reason provided: The message doesn't explain why this behavior is important—what problem it solves or what outcome is expected. That context could be included in a longer body (if needed).

#### 3️⃣ Make three commits in your repo with different commit message styles ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

1. A vague commit message
   `git commit -m "fixed stuff"`

2. An overly detailed commit message
   `git commit -m "Fixed an issue where the timer wouldn't reset when the user clicked the stop button after a focus session, which caused the session to continue tracking even though it visually appeared to be stopped."`

3. A well-structured commit message (following Conventional Commits)
   `git commit -m "fix(timer): reset timer correctly when session is stopped"`

#### 4️⃣ Write reflections in git_understanding.md

##### What makes a good commit message?

A good commit message is clear, concise, and descriptive. It typically includes a brief summary of the change, follows a consistent format (e.g., Conventional Commits), and focuses on the “what” and “why” more than the “how.”

##### How does a clear commit message help in team collaboration?

Clear commit messages make it easier for teammates to understand changes without digging into the code. This speeds up code reviews, simplifies debugging, and improves communication across the team—especially in large or long-term projects.

##### How can poor commit messages cause issues later?

Poor messages (e.g., “fixed stuff”) offer no context, making it hard to understand the purpose of a change. This can slow down bug tracking, make merges riskier, and frustrate team members trying to trace the history or logic behind updates.

#### 5️⃣ Commit and push your changes to GitHub ✅
