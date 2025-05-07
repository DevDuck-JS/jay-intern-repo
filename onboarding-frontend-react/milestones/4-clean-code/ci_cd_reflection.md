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
