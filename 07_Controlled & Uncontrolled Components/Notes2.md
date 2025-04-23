## 📝 Controlled Form with Multiple Input Fields (React)

### 🧠 Concept:
- Har input ke liye `useState` alag-alag use kar sakte hain **ya**
- Ek hi `useState` object mein multiple fields store kar sakte hain

---

### ✅ Method 1: Alag-Alag State for Each Input

```jsx
import React, { useState } from 'react';

function MultiFieldForm() {
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
        placeholder="Enter name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Enter email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

🧠 Yahan har input ke liye separate state aur `onChange` hai. Kaafi **clear and easy** for beginners.

---

### ✅ Method 2: Single State Object for All Inputs

```jsx
import React, { useState } from 'react';

function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={formData.name} 
        onChange={handleChange} 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email} 
        onChange={handleChange} 
      />
      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        value={formData.password} 
        onChange={handleChange} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### 📌 Yahan kya hua?
- Humne ek `formData` object banaya.
- Har input ka `name` attribute diya (must match object keys).
- `handleChange` ek generic function hai jo sab input ko handle kar raha hai.
- Yeh tarika large forms ke liye **best practice** mana jata hai.

---

### 🔁 Summary:

| Approach               | Suitable for       |
|------------------------|--------------------|
| Alag state per input   | Chhoti forms        |
| Single state object    | Badi dynamic forms  |

---

