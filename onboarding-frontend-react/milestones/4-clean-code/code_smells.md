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
