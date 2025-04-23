## React Functional Component

### What is a Functional Component?
- It is a **normal JavaScript function**.
- It returns **JSX code** (HTML-like syntax) which is shown on the web page.
- Very simple and mostly used in **modern React projects**.

---

### Real-Life Example:
Think of a **welcome message** component for a student portal:

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>Namaste, {props.name}</h1>;
}

export default Welcome;
```

If we use:
```jsx
<Welcome name="Amit" />
```
Output will be: **Namaste, Amit**

---

### Key Points:
- No need to write `class` keyword
- Use `props` to send data
- Works faster and easier than class component
- Used mostly in **modern React (with hooks)**

---

### Arrow Function Style (More common today):

```jsx
const Welcome = (props) => {
  return <h1>Namaste, {props.name}</h1>;
};
```

---

### Example with `useState` (like a counter):

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
```

This is like making a small **attendance counter** for students.

---

### Notes:

| Feature              | Functional Component                     |
|----------------------|-------------------------------------------|
| Based on             | Function (not class)                      |
| Props                | Yes                                       |
| State                | Yes (with `useState` hook)                |
| Easy to write        | Yes (shorter code)                        |
| Used in India        | Yes, used in most React-based websites    |

---
build **Mini Project like:**
- Student ID Card (using props)
- Counter for “No. of Students Present”
- Simple To-Do App
