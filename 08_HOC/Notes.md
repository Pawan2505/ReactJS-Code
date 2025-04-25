### ✅ What is HOC (Higher Order Component)?
HOC is a **function that takes a component as input and returns a new component** with some added functionality.  
It helps in **code reuse, logic abstraction**, and is used widely in large React applications.

---

### 🛠 Goal:
We’ll create a HOC that provides **counter logic** (increment functionality) to any wrapped component.

---

### 🗂 File Structure:
```
CounterApp/
│
├── App.js
├── withCounter.js
└── ClickCounter.js
```

---

### 🔹 1. `withCounter.js` (HOC component)

```jsx
// withCounter.js
import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  const EnhancedComponent = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    return (
      <WrappedComponent count={count} incrementCount={incrementCount} />
    );
  };

  return EnhancedComponent;
};

export default withCounter;
```

---

### 🔹 2. `ClickCounter.js` (UI component)

```jsx
// ClickCounter.js
import React from "react";

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Simple Counter App using HOC</h2>
      <button onClick={incrementCount}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default ClickCounter;
```

---

### 🔹 3. `App.js` (Main App)

```jsx
// App.js
import React from "react";
import ClickCounter from "./ClickCounter";
import withCounter from "./withCounter";

const EnhancedClickCounter = withCounter(ClickCounter);

function App() {
  return (
    <div>
      <EnhancedClickCounter />
    </div>
  );
}

export default App;
```

---

### ✅ Output:
You will see a button saying `Clicked 0 times`.  
On clicking the button, the count increases.  
All the logic is handled by HOC and reused by `ClickCounter`.

---

### 🧠 Summary in Hindi-English:

- `withCounter` ek HOC hai jo counter ka logic deta hai.
- `ClickCounter` sirf UI dikhata hai aur logic ko props se use karta hai.
- Ye approach helpful hai jab aap multiple components me same counter logic reuse karna chahte ho.

Agar aap chaho to `HoverCounter`, `DoubleClickCounter` jaise aur bhi bana sakte ho using the same HOC.

---

