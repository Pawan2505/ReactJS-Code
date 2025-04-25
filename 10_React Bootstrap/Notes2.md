## ✅ 1. React Bootstrap Form

```jsx
// FormExample.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function FormExample() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h3>Login Form</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </div>
  );
}

export default FormExample;
```

---

## ✅ 2. React Bootstrap Modal Example

```jsx
// ModalExample.js
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalExample() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="info" onClick={() => setShow(true)}>
        Show Info Modal
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>React Bootstrap Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is a modal! You can use it for messages, confirmations, or even forms.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
          <Button variant="primary" onClick={() => setShow(false)}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalExample;
```

---

## ✅ 3. React Bootstrap Grid Layout (Container, Row, Col)

```jsx
// LayoutExample.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function LayoutExample() {
  return (
    <Container>
      <h2 className="text-center my-4">React Bootstrap Grid Layout</h2>
      <Row>
        <Col md={4}>
          <Card body>This is Column 1</Card>
        </Col>
        <Col md={4}>
          <Card body>This is Column 2</Card>
        </Col>
        <Col md={4}>
          <Card body>This is Column 3</Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LayoutExample;
```

---

## 🔄 How to Use in `App.js`

```jsx
import React from 'react';
import FormExample from './FormExample';
import ModalExample from './ModalExample';
import LayoutExample from './LayoutExample';

function App() {
  return (
    <div>
      <LayoutExample />
      <hr />
      <FormExample />
      <hr />
      <ModalExample />
    </div>
  );
}

export default App;
```

---

## 🧠 Summary:

- **Form:** `Form`, `Form.Group`, `Form.Control` ka use karke Bootstrap form banana easy hai.
- **Modal:** Show/hide logic with `useState` and `<Modal show={}>` ka use.
- **Layout:** Responsive layout ke liye `Container`, `Row`, `Col` use karte hain (similar to Bootstrap grid).

