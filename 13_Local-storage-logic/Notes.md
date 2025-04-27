# Intro to Local Storage

Local Storage ek **browser ki memory** hai jisme hum **small data** (usually strings) ko store kar sakte hain permanently. Jab tak user manually clear nahi karta, ya browser settings se nahi delete hota, tab tak data safe rehta hai.

- **Key-Value pairs** ke form mein data store hota hai.
- Local Storage mein stored data **refresh karne** ya **browser band karne** ke baad bhi rehta hai.
- JavaScript ke through use karte hain:  
  - `localStorage.setItem('key', 'value')` (Store karne ke liye)
  - `localStorage.getItem('key')` (Read karne ke liye)
  - `localStorage.removeItem('key')` (Delete karne ke liye)
  - `localStorage.clear()` (Sab kuch delete karne ke liye)

---

# Working with Local Storage in ReactJS

Chaliye ab ek **simple React example** banate hain:

> Ek input hoga, ek button hoga, aur ek paragraph tag mein data dikhayenge — jo hum local storage se le rahe honge.

---

## Code:

```jsx
import React, { useState, useEffect } from 'react';

function LocalStorageExample() {
  const [inputValue, setInputValue] = useState('');
  const [storedValue, setStoredValue] = useState('');

  // useEffect to load data from Local Storage when component mounts
  useEffect(() => {
    const saved = localStorage.getItem('myData');
    if (saved) {
      setStoredValue(saved);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('myData', inputValue);
    setStoredValue(inputValue);
    setInputValue(''); // clear input after saving
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Local Storage Example</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter something"
      />
      <button onClick={handleSave} style={{ marginLeft: '10px' }}>
        Save to Local Storage
      </button>

      <p style={{ marginTop: '20px' }}>
        <strong>Stored Value:</strong> {storedValue}
      </p>
    </div>
  );
}

export default LocalStorageExample;
```

---

# Breakdown:

- **inputValue**: input field ka current text store karta hai.
- **storedValue**: woh value store karta hai jo hum local storage se laate hain.
- **useEffect**: jab component load hota hai (first time page open hota hai), hum local storage check karte hain — agar koi pehle se value save hai to usse display karte hain.
- **handleSave**: jab user button click karta hai:
  - localStorage mein data save hota hai.
  - Page pe wahi naya value dikhane lagta hai.
  - Input field clear kar dete hain for better UX.

---

# Short Summary:

| Step | Action |
|:---|:---|
| 1 | Input mein likho |
| 2 | Button dabao |
| 3 | Data Local Storage mein save ho jayega |
| 4 | Data screen par paragraph mein dikhne lagega |
| 5 | Page reload karoge tab bhi data rahega |

---
