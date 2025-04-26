Bahut badhiya!  
Ab hum **senior ReactJS developer trainer** ki tarah aapko sikhayenge:

# 🔥 CRUD Operation with Routing + `db.json` (Fake API)

Bilkul real-world jaise setup karenge — par simple aur easy language mein!

---

# 🛠 Step 1: Setup React App

```bash
npx create-react-app react-crud-routing
cd react-crud-routing
```

---

# 🛠 Step 2: Install Required Packages

```bash
npm install react-router-dom axios json-server
```

- `react-router-dom` ➔ Routing ke liye
- `axios` ➔ API calls ke liye
- `json-server` ➔ Fake backend banane ke liye

---

# 🛠 Step 3: Create `db.json` file (Fake API)

Project ke root folder me `db.json` banaiye:

```json
{
  "users": [
    { "id": 1, "name": "Pawan", "email": "pawan@example.com" },
    { "id": 2, "name": "Amit", "email": "amit@example.com" }
  ]
}
```

Ab **JSON Server** ko run karo:

```bash
npx json-server --watch db.json --port 3001
```

- Server chalega: `http://localhost:3001/users`
- Ye API hume CRUD operations ke liye milegi!

---

# 🛠 Step 4: Setup React Router in `App.js`

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import View from './components/View';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

# 📄 Create Components

## 🏡 Home.jsx (List All Users)

```jsx
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/users/${id}`)
      .then(() => window.location.reload());
  };

  return (
    <div>
      <h2>All Users</h2>
      <Link to="/create">Create New User</Link>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <Link to={`/view/${u.id}`}>View</Link> | 
                <Link to={`/update/${u.id}`}>Edit</Link> | 
                <button onClick={() => handleDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
```

---

## ➕ Create.jsx (Add New User)

```jsx
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Create() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/users', { name, email })
      .then(() => navigate('/'));
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" /><br />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" /><br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Create;
```

---

## ✏️ Update.jsx (Update Existing User)

```jsx
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Update() {
  const { id } = useParams();
  const [user, setUser] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`)
      .then(res => setUser(res.data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/users/${id}`, user)
      .then(() => navigate('/'));
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} /><br />
        <input value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;
```

---

## 🔍 View.jsx (View Single User)

```jsx
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function View() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`)
      .then(res => setUser(res.data));
  }, [id]);

  return (
    <div>
      <h2>User Detail</h2>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
    </div>
  );
}

export default View;
```

---

# 🔥 Final Result

- `/` ➔ All users list
- `/create` ➔ New user form
- `/update/:id` ➔ Edit user form
- `/view/:id` ➔ See user details
- 🔄 Delete user with one click

---

# 📚 In short:

| Feature | Tech |
|:--------|:-----|
| Navigation | `react-router-dom` |
| API Requests | `axios` |
| Backend | `json-server (db.json)` |
| CRUD Operations | Create, Read, Update, Delete Users |

---

# ❓ Ab bolo, aap chahte ho is project ko ek **professional beautiful UI** ke saath upgrade karein?  
(React Bootstrap ke buttons, tables, forms ke saath)

Bolna **"Yes Bootstrap Version"** — Main 1st class banana sikhaunga! 🚀✨  
(Production level design sikhenge!)