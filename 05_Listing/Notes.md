## 📘 **Listing & Keys**  
---

### ✅ **1. What is Listing in React?**

- Jab humko ek **array of items** ko screen pe dikhana hota hai, toh hum **listing** ka use karte hain.
- React me mostly **`map()`** function se list banate hain.

---

### 🧪 **Example:**
```js
const fruits = ["Apple", "Banana", "Mango"];
```

```jsx
function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

---

### 🧠 Explanation:
- `fruits.map()` → har item ke liye ek `<li>` create karega.
- `{fruit}` → item ko print karega.
- `key={index}` → har item ko unique banane ke liye key dena padta hai.

---

### ✅ **2. What are Keys in React?**

- Jab React me list render hoti hai, toh har item ko **unique key** dena **must** hota hai.
- React ko key chahiye hoti hai taaki jab list update ho toh pata chal sake **kya change hua**.

---

### 🎯 **Important:**
- Key **unique** honi chahiye.
- Best hai agar **`id`** use karein instead of index.

---

### 🧪 **Example with Unique Key:**
```js
const users = [
  { id: 101, name: "Amit" },
  { id: 102, name: "Neha" },
];
```

```jsx
function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

### 🤓 **Best Practices:**

| Situation            | Key Use         |
|----------------------|-----------------|
| Static List (no change) | `index` se chalega |
| Dynamic List (CRUD)     | `id` ya unique field best hai |

---

### 🔚 Final Note:

- Listing me `map()` ka use karo.
- Har item me `key` zaroor do.
- `index` sirf tabhi use karo jab list change nahi hoti.
- Dynamic list me `id` use karo — safe & reliable.

