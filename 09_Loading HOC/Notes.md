### 🔄 What is a Loading HOC?

A **Loading HOC** is a Higher Order Component that wraps any component and shows a **"Loading..." message** (or spinner) **until the data is ready**.

---

### 🧩 Use Case:

You have a component that needs to **wait for some data** (like an API response or delay), and you want to **show a loading indicator** while it's waiting.

---

### 🗂 File Structure Example:
```
LoadingApp/
├── App.js
├── withLoading.js
└── UserList.js
```

---

### 🔹 1. `withLoading.js` – HOC component

```jsx
// withLoading.js
import React from "react";

const withLoading = (WrappedComponent) => {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
```

---

### 🔹 2. `UserList.js` – UI Component

```jsx
// UserList.js
import React from "react";

const UserList = ({ users }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>User List</h2>
      <ul style={{ listStyle: "none" }}>
        {users.map((user, index) => (
          <li key={index}>👤 {user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

---

### 🔹 3. `App.js` – Main Component

```jsx
// App.js
import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import withLoading from "./withLoading";

const UserListWithLoading = withLoading(UserList);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setUsers(["Alice", "Bob", "Charlie"]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <UserListWithLoading isLoading={isLoading} users={users} />
    </div>
  );
}

export default App;
```

---

### ✅ Output:

- Initially, it will show: **"Loading..."**
- After 2 seconds, it will show the **list of users**.

---

### 🧠 Summary:

- `withLoading()` ek HOC hai jo kisi bhi component ko loading feature de deta hai.
- Jab `isLoading=true` hota hai, tab "Loading..." message dikhata hai.
- Jab `isLoading=false` hota hai, tab actual component render karta hai.

