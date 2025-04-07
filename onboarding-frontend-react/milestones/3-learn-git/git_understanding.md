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

---

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

---

## 📌 Debugging with `git bisect`

### 🎯 Goal

Learn how to use `git bisect` to identify which commit introduced a bug in a project.

### 🛠️ Task

#### 1️⃣ Research `git bisect` and how it helps in debugging

1. Initialize a test repo and make a series of commits:

```
git init bisect-demo
cd bisect-demo
echo "Version 1" > app.js
git add .
git commit -m "feat: initial version"
```

#### 2️⃣ Create a test scenario

##### Make a series of commits in your test repo

##### Introduce a bug in one of the commits

##### Use git bisect to track down the commit that introduced the issue

#### 3️⃣ Experiment using your Git desktop client (or CLI if preferred)

#### 4️⃣ Write reflections in git_understanding.md

##### What does `git bisect` do?

git bisect uses binary search to help you identify the exact commit that introduced a bug. It automates the testing process by checking each commit between a known good and bad state.

##### When would you use it in a real-world debugging situation?

I’d use git bisect when:

- A bug was recently introduced, but I'm not sure which commit caused it
- The project has many commits, and manually checking each one would be time-consuming
- I can automate a test to detect the bug for each commit.

##### How does it compare to manually reviewing commits?

`git bisect` is much faster and more efficient because it narrows down the culprit commit using binary search. Manual review requires checking each commit one by one, which is slow and error-prone—especially in large projects. It’s ideal when you have a repeatable way to test whether a commit is good or bad.

#### 5️⃣ Commit and push your changes to GitHub ✅

---

## 📌 Advanced Git Commands & When to Use Them

### 🎯 Goal

Understand and experiment with advanced Git commands using your preferred Git desktop client.

### 🛠️ Task

#### 1️⃣ Research the following Git commands and test them in your repo

##### `git checkout main -- <file>` – Restore a specific file from main without affecting other changes

Restores a specific file from the main branch into the current working branch, without affecting other files. It’s useful for undoing local changes to one file or pulling a clean version from another branch.

##### `git cherry-pick <commit>` – Apply a specific commit from another branch without merging the whole branch

Applies a specific commit from one branch onto another. This is useful when you want to bring in a fix or feature without merging the entire branch history.

##### `git log` – View commit history and understand how changes evolved

Displays the full commit history, including author names, commit messages, and timestamps. You can view it in different formats, like compact (--oneline) or graphical (--graph).

##### `git blame <file>` – See who last modified each line in a file and when

Shows who last edited each line of a file, along with the commit hash and timestamp. It’s great for understanding when and why a specific line was changed.

#### 2️⃣ Experiment with each command in your test repo

##### Modify a file, then restore it using `checkout`

##### Commit changes on a branch, then cherry-pick one commit onto `main`

##### Use `git log` to explore the commit history

##### Use `git blame` to see past changes in a file

#### 3️⃣ Write reflections in `git_understanding.md`

##### What does each command do?

##### When would you use it in a real project (hint: these are all really important in long running projects with multiple developers)?

`git checkout main -- <file>`
When you accidentally mess up a config or key file and want to restore it from the main branch without reverting other progress.

`git cherry-pick <commit>`
When you want to apply a single bug fix or feature from a development branch into main without bringing unrelated changes.

`git log`
For tracking how a feature evolved, seeing who committed what, and helping in debugging or writing changelogs.

`git blame`
To understand who last modified a line of code, why it changed, or when a bug was introduced. Great for tracing regressions or reviewing legacy code.

##### What surprised you while testing these commands?

I was surprised by how precise and powerful `git cherry-pick` is. It gave me full control over what commits I wanted to include without needing to do a full merge.

`git blame` was more insightful than expected—being able to trace the history line by line helped me understand code ownership and decision history.

Using `git checkout main -- <file>` was a safer way to reset just one file without undoing other changes in progress, which is something I didn’t realize was possible before.

---

## 📌 Merge Conflicts & Conflict Resolution

### 🎯 Goal

Understand what merge conflicts are, why they happen, and how to resolve them.

### 🛠️ Task

#### 1️⃣ Research what causes merge conflicts in Git.

#### 2️⃣ Create a merge conflict in your test repo by:

##### Creating a branch and editing a file.

##### Switching back to main, making a conflicting edit in the same file, and committing it.

##### Merging the branch back into main.

#### 3️⃣ Use your Git desktop client to resolve the conflict.

#### 4️⃣ Write about your experience in git_understanding.md:

##### What caused the conflict?

The merge conflict occurred because I made conflicting edits to the same line in the same file on two different branches. Specifically, I edited greeting.txt on both the main branch and a feature branch called update-greeting. When I tried to merge the feature branch back into main, Git couldn't automatically decide which change to keep.

##### How did you resolve it?

I used my Git desktop client (GitHub Desktop) to open the conflicted file. Git highlighted both versions of the change:

- The version from HEAD (main)

- The version from the merging branch

I manually edited the file to choose the correct version—or combined both edits into a new line—and then marked the conflict as resolved. After that, I committed the merge.

##### What did you learn?

I learned that merge conflicts are normal in collaborative projects, especially when multiple people are working on the same file. The key is to stay calm, review the differences carefully, and communicate with teammates if needed.

I also realized how helpful Git tools are in visualizing and resolving conflicts. Now I feel more confident in handling conflicts without panicking or accidentally overriding someone’s work.

---

## 📌 Branching & Team Collaboration

### 🎯 Goal

Understand the importance of branching, avoiding direct pushes to main, and following a structured review process.

### 🛠️ Task

#### 1️⃣ Create a new branch in your Git desktop client (e.g., GitHub Desktop, VS Code, SourceTree).

#### 2️⃣ Make a small change in your repo and commit it to the new branch.

#### 3️⃣ Switch back to main and check that your changes are not there.

#### 4️⃣ Reflect on why teams use branches instead of pushing directly to main in git_understanding.md:

##### Why is pushing directly to main problematic?

##### How do branches help with reviewing code?

##### What happens if two people edit the same file on different branches?

---

## 📌 Git Concepts: Staging vs. Committing

### 🎯 Goal

Understand the difference between staging and committing in Git by experimenting in your own repository.

### 🛠️ Task

#### 1️⃣ Research the difference between staging and committing.

#### 2️⃣ Experiment with adding and committing files in your repo using either:

##### The terminal (git add / git commit)

##### A Git desktop client (e.g., GitHub Desktop, VS Code Git integration).

#### 3️⃣ Modify a file and try the following:

##### Stage it but don’t commit (git add <file> or equivalent in your client).

##### Check the status (git status).

##### Unstage the file (git reset HEAD <file> or equivalent).

##### Commit the file and observe the difference.

#### 4️⃣ Write a summary in git_understanding.md:

##### What is the difference between staging and committing?

##### Why does Git separate these two steps?

##### When would you want to stage changes without committing?

---

## 📌

### 🎯 Goal

### 🛠️ Task

#### 1️⃣

#### 2️⃣

#####

#####

#####

#### 3️⃣

#### 4️⃣

#####

#####

#####

---

## 📌

### 🎯 Goal

### 🛠️ Task

#### 1️⃣

#### 2️⃣

#####

#####

#####

#### 3️⃣

#### 4️⃣

#####

#####

#####

---
