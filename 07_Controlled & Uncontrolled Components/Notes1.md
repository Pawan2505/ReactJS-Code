## 🚀 Topic: Form Handling in React – Controlled & Uncontrolled Components

### 🔹 1. Introduction – Form ka kya role hai?
React mein forms use hote hain user input lene ke liye — jaise login form, registration form, feedback form, etc.

In traditional HTML, input fields manage their own state. Lekin React mein humko yeh state **React component ke andar control** karna hota hai — isse bolte hain **Controlled Components**.

Agar hum input ki value ko directly DOM se lete hain (without state), toh use bolte hain **Uncontrolled Components**.

---

### 🔹 2. Controlled Components – React ke under full control

**Definition:**  
Jab input field ki value React ke `state` se control hoti hai, use bolte hain Controlled Component.

**Key points:**
- React `useState()` se input ka data manage karta hai.
- Input field ki `value` attribute hoti hai jo state se linked hoti hai.
- Har change pe `onChange` event update karta hai state.

**Example:**
```jsx
import React, { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted name:", name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Name:</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

🧠 *Yahan pe input field ka data React ke state ke andar hai — toh React is fully in control.*

---

### 🔹 3. Uncontrolled Components – thoda traditional way

**Definition:**  
Jab input ki value direct DOM se access hoti hai using `ref`, use bolte hain Uncontrolled Component.

**Key points:**
- React state use nahi hoti.
- Hum `useRef()` hook se input field ka direct access lete hain.
- Yeh simpler hota hai chhoti applications ke liye.

**Example:**
```jsx
import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted name:", nameInput.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Name:</label>
      <input type="text" ref={nameInput} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

🧠 *Yahan pe input ki value React state ke through nahi ja rahi — React is not in control.*

---

### 🔸 4. Controlled vs Uncontrolled Summary

| Feature              | Controlled              | Uncontrolled            |
|----------------------|-------------------------|--------------------------|
| Value control        | React `state`           | DOM via `ref`            |
| Setup                | More code, better control | Less code, less control |
| Validation           | Easy and dynamic        | Manual and less flexible |
| Best use case        | Large forms, dynamic input | Simple, one-time input  |

---



