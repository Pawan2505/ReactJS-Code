# Intro to Session Storage

- **Session Storage** bhi browser ki memory hoti hai.
- **Key-Value pairs** ke format mein data store karta hai.
- Lekin difference ye hai:
  - **Session Storage** ka data **sirf tab tak** rehta hai jab tak aapka **tab ya browser window open hai**.
  - **Page refresh karoge to data rahega**, lekin **browser band karoge to data gayab**.

Same JavaScript methods use hote hain:
- `sessionStorage.setItem('key', 'value')`
- `sessionStorage.getItem('key')`
- `sessionStorage.removeItem('key')`
- `sessionStorage.clear()`

---

# Working with Session Storage in ReactJS

Chaliye ek **simple React example** banaate hain:

> Ek input field hoga, ek button hoga, aur ek paragraph mein Session Storage ka data dikhayenge.

---

## Code:

```jsx
import React, { useState, useEffect } from 'react';

function SessionStorageExample() {
  const [inputValue, setInputValue] = useState('');
  const [storedValue, setStoredValue] = useState('');

  // useEffect to load data from Session Storage when component mounts
  useEffect(() => {
    const saved = sessionStorage.getItem('mySessionData');
    if (saved) {
      setStoredValue(saved);
    }
  }, []);

  const handleSave = () => {
    sessionStorage.setItem('mySessionData', inputValue);
    setStoredValue(inputValue);
    setInputValue(''); // clear input after saving
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Session Storage Example</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter something"
      />
      <button onClick={handleSave} style={{ marginLeft: '10px' }}>
        Save to Session Storage
      </button>

      <p style={{ marginTop: '20px' }}>
        <strong>Stored Value:</strong> {storedValue}
      </p>
    </div>
  );
}

export default SessionStorageExample;
```

---

# Human Language Explanation:

- **inputValue**: input field ka text ko store karta hai.
- **storedValue**: session storage se loaded value store karta hai.
- **useEffect**: jab component load hota hai (tab open karte hi), check karta hai koi purana data session storage mein to nahi.
- **handleSave**:
  - sessionStorage mein input value ko save karta hai.
  - Screen par wahi value dikhata hai.
  - Input clear kar deta hai for better UX.

---

# Important Difference between LocalStorage and SessionStorage:

| Feature         | Local Storage        | Session Storage      |
|-----------------|-----------------------|-----------------------|
| Data Lifetime   | Browser close hone ke baad bhi rehta hai | Tab close hote hi delete ho jaata hai |
| Scope           | Across all tabs/windows | Only current tab/window |
| Capacity        | Generally 5MB          | Generally 5MB          |

---

# Short Summary:

| Step | Action |
|:---|:---|
| 1 | Input mein likho |
| 2 | Button dabao |
| 3 | Data Session Storage mein save hoga |
| 4 | Page reload karoge to data dikhega |
| 5 | Tab close karoge to data chala jaayega |

