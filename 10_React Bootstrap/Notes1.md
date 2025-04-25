## ✅ Topic: React Bootstrap

### 🧾 What is React Bootstrap?
React Bootstrap is a popular library that **replaces jQuery-based Bootstrap components** with **pure React components**.  
It allows you to use Bootstrap's design system with clean, reusable React code.

---

## 🛠 Step 1: Install Dependencies

### 🔹 Run this command in your React project:
```bash
npm install react-bootstrap bootstrap
```

### 🔹 Then, import Bootstrap CSS in your `index.js` or `App.js` file:
```js
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## 📦 Step 2: Use Bootstrap Components

React Bootstrap provides pre-built UI components like **Button, Alert, Card, Modal**, etc.

### ✅ Example 1: Button

```jsx
import React from 'react';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>React Bootstrap Button Example</h2>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}

export default App;
```

---

### ✅ Example 2: Alert

```jsx
import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      {show && (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          This is a success alert with dismiss button!
        </Alert>
      )}
      <Button onClick={() => setShow(true)} variant="outline-success">
        Show Alert Again
      </Button>
    </div>
  );
}

export default App;
```

---

### ✅ Example 3: Card

```jsx
import React from 'react';
import { Card } from 'react-bootstrap';

function App() {
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            This is a card from React Bootstrap. It's reusable and styled by Bootstrap.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
```

---

## 📚 Popular React Bootstrap Components to Explore:

| Component      | Description                          |
|----------------|--------------------------------------|
| `Button`       | Styled buttons                       |
| `Alert`        | Informative message box              |
| `Card`         | Structured content container         |
| `Modal`        | Popup dialog                         |
| `Navbar`       | Navigation bar                       |
| `Form`         | Form elements (input, checkbox, etc) |
| `Container`, `Row`, `Col` | Layout/Grid system        |

---

## 🧠 Summary:

- React Bootstrap ek library hai jo Bootstrap ke saare UI components ko React ke form me provide karta hai.
- `npm install react-bootstrap bootstrap` se install karo.
- CSS import karne ke baad aap har Bootstrap component ko React ke tarike se use kar sakte ho – jQuery ki zarurat nahi hai.

---
