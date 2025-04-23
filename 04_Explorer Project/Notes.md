## ✅ Step-by-Step Setup

**Folder Structure:**
```
file-explorer/
├── src/
│   ├── components/
│   │   └── Explorer.js
│   ├── data/
│   │   └── explorerData.js
│   ├── App.js
│   └── index.js
```

---

## 🔸 `explorerData.js`

```js
// explorerData.js

// This is the folder and file structure data
// Ye ek sample folder/file ka nested data structure hai

const explorerData = {
  name: 'root',
  isFolder: true,
  items: [
    {
      name: 'public',
      isFolder: true,
      items: [
        { name: 'index.html', isFolder: false }
      ]
    },
    {
      name: 'src',
      isFolder: true,
      items: [
        { name: 'App.js', isFolder: false },
        { name: 'index.js', isFolder: false },
        {
          name: 'components',
          isFolder: true,
          items: [
            { name: 'Explorer.js', isFolder: false }
          ]
        }
      ]
    },
    {
      name: 'package.json',
      isFolder: false
    }
  ]
};

export default explorerData;
```

---

## 🔸 `Explorer.js`

```jsx
// Explorer.js

// React and useState import
import React, { useState } from 'react';

const Explorer = ({ data }) => {
  // Track whether folder is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // If it's not a folder, return file
  if (!data.isFolder) {
    return <div style={{ paddingLeft: 20 }}>📄 {data.name}</div>;
  }

  // If it's a folder
  return (
    <div style={{ paddingLeft: 20 }}>
      {/* Folder Name - Click to open/close */}
      <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        📁 {data.name}
      </div>

      {/* Show child items if open */}
      {isOpen &&
        data.items.map((item, index) => (
          <Explorer key={index} data={item} />
        ))}
    </div>
  );
};

export default Explorer;
```

---

## 🔸 `App.js`

```jsx
// App.js

import React from 'react';
import Explorer from './components/Explorer';
import explorerData from './data/explorerData';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>📁 File Explorer</h2>
      <Explorer data={explorerData} />
    </div>
  );
}

export default App;
```

---

## 🔸 `index.js`

```jsx
// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---
