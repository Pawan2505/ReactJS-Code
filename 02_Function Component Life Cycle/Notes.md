# 📘 Topic: Component Life Cycle in React (Functional Component)

---

## 🔹 Step 1: Samjho "Component" kya hota hai?

👉 React mein **component** ek function ya class hota hai jo UI (screen pe dikhne waala part) banata hai.

🧠 Jaise:

- Ek component ho sakta hai: Button
- Dusra component ho sakta hai: Header
- Teesra ho sakta hai: Profile Card

---

## 🔹 Step 2: Component Life Cycle ka matlab?

**Simple Language:**

> Jab ek component screen pe **aata hai**, **change hota hai**, ya **hatta diya jata hai**, toh ye teen stage uske **life cycle** ke parts hote hain.

### 👶 Birth → 👦 Update → ⚰️ Death  
*(Create → Change → Remove)*

---

## 🔹 Step 3: Teen Life Cycle Stages

| Stage Name     | Kab hota hai?                        | Kya hota hai? |
|----------------|--------------------------------------|---------------|
| Mounting       | Jab component first time screen pe aaye | Load hote waqt |
| Updating       | Jab state ya props change ho jaaye    | Re-render hota hai |
| Unmounting     | Jab component screen se hata diya jaye | Cleanup hota hai |

---

## 🔹 Step 4: Functional Component mein kaise handle karte hain?

👉 Functional component mein hum `useEffect()` ka use karte hain life cycle handle karne ke liye.

### ✅ Mounting – First time load
```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

### ✅ Updating – Jab state ya props change ho
```jsx
useEffect(() => {
  console.log("Component updated");
}, [count]);
```

### ✅ Unmounting – Jab component delete ho
```jsx
useEffect(() => {
  return () => {
    console.log("Component will unmount");
  };
}, []);
```

---

## 🔹 Step 5: Easy Example with Full Code

```jsx
import { useEffect, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // Mounting
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // Updating
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  // Unmounting
  useEffect(() => {
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

---

## 🔹 Step 6: Life Cycle Ko Yaad Kaise Rakhen?

### 🔁 Trick:

| Stage        | Yaad Rakhne Ka Tarika |
|--------------|-----------------------|
| Mount        | "Shuruaat" (start)     |
| Update       | "Badlaav" (change)     |
| Unmount      | "Ant" (end)            |

### ✅ useEffect ke through sab control hota hai.

---

## 🔚 Final Summary (Super Simple)

| Kaam                        | Code Syntax                            |
|-----------------------------|----------------------------------------|
| Component mount hona        | `useEffect(() => { ... }, [])`         |
| Component update hona       | `useEffect(() => { ... }, [value])`    |
| Component unmount hona      | `useEffect(() => { return () => {...} }, [])` |

---

Aap bas itna yaad rakho:

> "React functional component ka har kaam **`useEffect()`** se hota hai!"
