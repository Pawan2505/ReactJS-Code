## 🧠 Topic: Apply Events and States on Forms in React

### 🤔 Kya hota hai?

React me jab bhi aap form me input bharte ho, to aapko us input ka data "track" karna padta hai — iske liye hum **state** ka use karte hain.

Aur jab form submit ya kisi input pe koi change hota hai, to hum **event handling** ka use karte hain — jaise `onChange`, `onSubmit`.

---

### ✅ Controlled Form Example:

```jsx
import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input 
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Send</button>
    </form>
  );
}
```

### 🧾 Notes:
- `onChange`: Event fire hota hai jab input change hota hai.
- `useState`: State bana ke hum value track kar rahe hain.
- `onSubmit`: Jab form submit hota hai.

---

## 🎨 Form Styling in React (Simple Inline Style)

```jsx
const inputStyle = {
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "5px"
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

function StyledForm() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={inputStyle}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button style={buttonStyle} type="submit">
        Submit
      </button>
    </form>
  );
}
```

---
