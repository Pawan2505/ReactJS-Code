
# 🔥 Step 1: Install React Bootstrap

```bash
npm install react-bootstrap bootstrap
```

फिर `index.js` में Bootstrap की CSS को import करो:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

# 🔥 Step 2: Use React Bootstrap Components

अब हम अपने पुराने pages को React Bootstrap से सुंदर बनाएंगे.

---

# 🏡 Home.jsx (List with Bootstrap Table & Buttons)

```jsx
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";

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
    <Container className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>All Users</h2>
        <Link to="/create">
          <Button variant="primary">Create New User</Button>
        </Link>
      </div>
      <Table striped bordered hover>
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
                <Link to={`/view/${u.id}`}>
                  <Button variant="info" className="me-2">View</Button>
                </Link>
                <Link to={`/update/${u.id}`}>
                  <Button variant="warning" className="me-2">Edit</Button>
                </Link>
                <Button variant="danger" onClick={() => handleDelete(u.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Home;
```

---

# ➕ Create.jsx (Form with Bootstrap)

```jsx
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

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
    <Container className="mt-5">
      <h2>Create User</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit" variant="success">Create</Button>
      </Form>
    </Container>
  );
}

export default Create;
```

---

# ✏️ Update.jsx (Form with Bootstrap)

```jsx
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

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
    <Container className="mt-5">
      <h2>Edit User</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text"
            value={user.name}
            onChange={e => setUser({ ...user, name: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email"
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
            required
          />
        </Form.Group>

        <Button type="submit" variant="warning">Update</Button>
      </Form>
    </Container>
  );
}

export default Update;
```

---

# 🔍 View.jsx (Show Details Beautifully)

```jsx
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

function View() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`)
      .then(res => setUser(res.data));
  }, [id]);

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>Email: {user.email}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default View;
```

---

# 🚀 Final Professional Project

| Page | UI Element |
|:---|:---|
| Home | Table + Action Buttons |
| Create | Form with Name and Email |
| Update | Form with pre-filled values |
| View | Beautiful Card layout |
| Delete | Red button with reload |

---

# 🔥 Aapka Ready Professional Project:

- Full Responsive
- Modern look and feel
- Professional Code Structure
- Beginner Friendly

---

# ❓ Next Level 🚀
Chaho to main sikhau:

- Form Validation
- Toast Notifications (React Toastify)
- Confirm Delete popups
- Pagination
- Search and Filter

