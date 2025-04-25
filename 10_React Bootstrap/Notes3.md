create a simple **Dashboard Layout** using **React Bootstrap** that includes:

1. **Header / Navbar**
2. **Sidebar (Vertical Menu)**
3. **Main Content Area**
4. **Responsive Grid for Cards**

---

## ✅ Project: Simple Dashboard Layout

### 📦 Files We'll Create:
```
DashboardApp/
├── App.js
├── components/
│   ├── Header.js
│   ├── Sidebar.js
│   └── DashboardContent.js
```

---

### 🔹 1. `Header.js` – Top Navigation Bar

```jsx
// components/Header.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Dashboard</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#">Profile</Nav.Link>
          <Nav.Link href="#">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
```

---

### 🔹 2. `Sidebar.js` – Vertical Navigation

```jsx
// components/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';

function Sidebar() {
  return (
    <div style={{
      width: '200px',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px',
      position: 'fixed'
    }}>
      <h5>Menu</h5>
      <Nav className="flex-column">
        <Nav.Link href="#">Dashboard</Nav.Link>
        <Nav.Link href="#">Reports</Nav.Link>
        <Nav.Link href="#">Settings</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
```

---

### 🔹 3. `DashboardContent.js` – Main Area with Cards

```jsx
// components/DashboardContent.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function DashboardContent() {
  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>Welcome to Dashboard</h2>
      <Row className="mt-4">
        <Col md={4}>
          <Card bg="primary" text="white" className="mb-4">
            <Card.Body>
              <Card.Title>Users</Card.Title>
              <Card.Text>1,250</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="success" text="white" className="mb-4">
            <Card.Body>
              <Card.Title>Revenue</Card.Title>
              <Card.Text>$14,500</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="warning" text="white" className="mb-4">
            <Card.Body>
              <Card.Title>Pending Tasks</Card.Title>
              <Card.Text>24</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default DashboardContent;
```

---

### 🔹 4. `App.js` – Main File

```jsx
// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <DashboardContent />
    </>
  );
}

export default App;
```

---

### 🧠 Hindi-English Summary:

- **Header:** Top navbar with app title and user options.
- **Sidebar:** Vertical menu using `Nav` with fixed positioning.
- **DashboardContent:** Main area with 3 Bootstrap cards using `Row` and `Col`.

This layout is **responsive** and can be extended to show charts, tables, forms, etc.


