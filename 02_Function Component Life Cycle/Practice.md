# 📘 React Functional Component Life Cycle – Simple Examples

### 👉 Bas ek baat yaad rakho:
> Functional Component ka life cycle sirf `useEffect()` ke through control hota hai.

---

## ✅ Example 1: Component Mount hone par Message Show karo

```jsx
import React, { useEffect } from 'react';

function WelcomeMessage() {
  useEffect(() => {
    console.log("Component mounted: Welcome to React!");
  }, []); // empty array => sirf ek baar chalega

  return <h2>Welcome to React App!</h2>;
}
```

🧠 **Explanation:**  
`useEffect(..., [])` ka matlab hai component **first time render** hone par hi chale.

---

## ✅ Example 2: State Change hone par Message Show karo

```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated: ", count);
  }, [count]); // count change hone par chalega

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

🧠 **Explanation:**  
Jab bhi `count` badlega, tab `useEffect()` chalega.

---

## ✅ Example 3: Unmount hone par Cleanup karo (Timer clear)

```jsx
import React, { useEffect, useState } from 'react';

function TimerComponent() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    // Cleanup (Unmount hone par)
    return () => {
      clearInterval(interval);
      console.log("Component unmounted, timer cleared");
    };
  }, []);

  return <h2>Timer: {time} sec</h2>;
}
```

🧠 **Explanation:**  
- `setInterval()` timer start karta hai  
- `return () => {}` cleanup karta hai jab component remove ho jaata hai

---

## ✅ Example 4: Multiple Life Cycle in One Component

```jsx
import React, { useEffect, useState } from 'react';

function LifeCycleExample() {
  const [name, setName] = useState("John");

  // Mounting
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // Updating
  useEffect(() => {
    console.log("Name updated: ", name);
  }, [name]);

  // Unmounting
  useEffect(() => {
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  return (
    <div>
      <h2>Name: {name}</h2>
      <button onClick={() => setName("Alex")}>Change Name</button>
    </div>
  );
}
```

---

## 🔚 Summary Table (Easy to Remember)

| Kaam                          | `useEffect()` Format                          |
|-------------------------------|-----------------------------------------------|
| Mounting (Start)              | `useEffect(() => { ... }, [])`               |
| Updating (State/Props Change) | `useEffect(() => { ... }, [value])`          |
| Unmounting (Cleanup)          | `useEffect(() => { return () => {...} }, [])`|

