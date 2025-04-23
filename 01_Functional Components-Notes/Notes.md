

## 🚀 Working with Component in Functional Component – State & Props

---

## 🔹 1. Introduction to Functional Component
**English:**  
A functional component is a simple JavaScript function that returns JSX.  
**Hindi:**  
Functional component ek simple JavaScript function hota hai jo JSX return karta hai.

### 📌 Syntax Example:
```jsx
function MyComponent() {
  return <h1>Hello World</h1>;
}
```

Ya ES6 arrow function ke saath:
```jsx
const MyComponent = () => {
  return <h1>Hello World</h1>;
};
```

---

## 🔹 2. What is JSX?

**English:**  
JSX is a syntax extension which looks like HTML, but it's used in JavaScript code to describe UI.

**Hindi:**  
JSX ek syntax hai jo HTML jaise dikhta hai, lekin JavaScript ke andar use hota hai UI banane ke liye.

---

## 🔹 3. Component Lifecycle in Functional Component (Basic)

**English:**  
In functional components, we don't have lifecycle methods like class components. Instead, we use `useEffect()` for side effects (like fetching data, etc.)

**Hindi:**  
Functional component me class component jaise lifecycle methods nahi hote. Iski jagah hum `useEffect()` hook ka use karte hain.

---

## 🔹 4. Props in Functional Component

### ✅ What are Props?
**English:**  
Props are used to pass data from one component to another, like from parent to child.

**Hindi:**  
Props ka use ek component se dusre component tak data bhejne ke liye hota hai, jaise parent se child component tak.

### 📌 Syntax Example:

```jsx
function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  return <Welcome name="Ravi" />;
}
```

> **Note:** Props are **read-only**, you can't modify them inside the child component.

---

## 🔹 5. State in Functional Component

### ✅ What is State?
**English:**  
State is used to store and manage data inside a component.

**Hindi:**  
State component ke andar ka data hota hai jise hum update bhi kar sakte hain.

### 🔧 How to use State?

We use `useState()` hook in functional components to handle state.

### 📌 Syntax Example:

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial value is 0

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

> **Note:** `useState` ek React Hook hai jo state ko initialize karta hai aur usse update karne ka method return karta hai.

---

## 🔹 6. Difference Between Props and State

| Feature        | Props                            | State                             |
|----------------|----------------------------------|-----------------------------------|
| Mutability     | Read-only                        | Can be changed                    |
| Usage          | Passed from parent component     | Local to the component            |
| Purpose        | Data transfer between components | Manage component-specific data    |

---

## 🔹 7. Real-life Analogy (for better understanding)

- **Props** → Jaise ek chef (parent) ne recipe (data) apne assistant (child component) ko di.
- **State** → Jaise assistant apne kitchen mein rakhi cheezein update karta rahe (local data).

---

## 🔹 8. Practice Exercises

1. Create a component `UserProfile` that receives `name` and `age` via props.
2. Create a `Counter` component using state to increase/decrease number.
3. Create a `Toggle` component to show/hide a paragraph on button click using state.

---

## 🔹 9. Conclusion

- Functional components are lightweight and easy to use.
- `Props` → Data passed to component.
- `State` → Internal data of component.
- React hooks like `useState()` and `useEffect()` give functional components power similar to class components.
