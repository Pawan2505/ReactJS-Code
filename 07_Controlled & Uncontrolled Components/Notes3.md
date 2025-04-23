## 🎯 Uncontrolled Components in React

### 📘 Concept:
Uncontrolled components wo hote hain jisme **input ka value React ke `state` me nahi hota**, balki **direct DOM se access** kiya jata hai using `ref`.

React sirf tabhi involve hota hai jab hume value "read" karni ho, jaise `form submit` pe.

> ☝️ **Think like:** React ko nahi pata input me kya chal raha hai jab tak aap specifically `ref.current.value` se check na karo.

---

## 🛠 Example: Uncontrolled Form with Multiple Inputs

```jsx
import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        ref={nameRef}
      />
      <input 
        type="email" 
        placeholder="Email" 
        ref={emailRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

### 🔍 Breakdown:
| Feature       | Controlled             | Uncontrolled            |
|---------------|-------------------------|--------------------------|
| Value stored  | React state (`useState`) | DOM (`ref.current.value`) |
| Update onChange | Haan, har baar             | Nahi, sirf jab read karna ho |
| Suitable for  | Complex logic, validation | Simple forms, read-only |

---

### 📦 Kab Use Karein?

- Jab form simple ho, aur aapko **value sirf form submit pe chahiye**.
- Jab aapko quickly DOM se value uthani ho bina state banaye.

---

### ✅ Bonus Tip:
`defaultValue` prop uncontrolled me use hoti hai (instead of `value`):

```jsx
<input type="text" defaultValue="Guest" ref={nameRef} />
```

