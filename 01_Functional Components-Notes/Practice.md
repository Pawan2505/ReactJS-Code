## ✅ 1. `UserProfile` Component (Props ka use)

```jsx
// UserProfile.jsx
function UserProfile(props) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

// App.jsx (ya main file)
function App() {
  return (
    <div>
      <UserProfile name="Ravi Sharma" age={22} />
    </div>
  );
}

export default App;
```

📝 **Explanation (Hindi + English):**  
- `UserProfile` ek functional component hai.  
- `props.name` aur `props.age` ke through data receive kiya gaya hai.  
- Parent component (`App`) ne data bheja hai child component (`UserProfile`) ko.

---

## ✅ 2. `Counter` Component (useState ka use – State)

```jsx
// Counter.jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial value is 0

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div>
      <h2>Counter Value: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

// App.jsx (ya main file)
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
```

📝 **Explanation:**  
- `useState` se `count` naam ka state banaya.  
- `setCount` se value update hoti hai.  
- `Increase` aur `Decrease` buttons se state badalte hain.

---

## ✅ 3. `Toggle` Component (Show/Hide logic using State)

```jsx
// Toggle.jsx
import { useState } from 'react';

function Toggle() {
  const [show, setShow] = useState(true);

  const togglePara = () => setShow(!show);

  return (
    <div>
      <button onClick={togglePara}>
        {show ? 'Hide' : 'Show'} Paragraph
      </button>
      {show && <p>This is a toggleable paragraph. You can show or hide it.</p>}
    </div>
  );
}

// App.jsx
function App() {
  return (
    <div>
      <Toggle />
    </div>
  );
}

export default App;
```
