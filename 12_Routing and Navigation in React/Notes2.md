# 🏗️ Project Name: Simple Routing App

---

# 📦 Basic Pages Banayenge:

| Page | Path |
|:-----|:-----|
| Home Page | `/` |
| About Page | `/about` |
| Contact Page | `/contact` |
| Product Page (Dynamic) | `/product/:id` |
| 404 Not Found Page | (Jab koi galat URL pe jaye) |

---

# 📋 Folder Structure:

```
src/
  ├── pages/
  │    ├── Home.jsx
  │    ├── About.jsx
  │    ├── Contact.jsx
  │    ├── Product.jsx
  │    ├── NotFound.jsx
  ├── components/
  │    └── Navbar.jsx
  ├── App.jsx
  └── index.js
```

---

# 📥 Step 1: Install React Router DOM

Terminal me run karein:

```bash
npm install react-router-dom
```

---

# ✏️ Step 2: Create Pages (simple simple)

**Home.jsx**
```jsx
const Home = () => {
  return <h2>Welcome to Home Page</h2>;
};
export default Home;
```

**About.jsx**
```jsx
const About = () => {
  return <h2>About Us</h2>;
};
export default About;
```

**Contact.jsx**
```jsx
const Contact = () => {
  return <h2>Contact Page</h2>;
};
export default Contact;
```

**Product.jsx**
```jsx
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  return <h2>Product Page - Product ID: {id}</h2>;
};
export default Product;
```

**NotFound.jsx**
```jsx
const NotFound = () => {
  return <h2>404 Page Not Found</h2>;
};
export default NotFound;
```

---

# 🧩 Step 3: Create Navbar.jsx

```jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      <Link to="/about" style={{ marginRight: 10 }}>About</Link>
      <Link to="/contact" style={{ marginRight: 10 }}>Contact</Link>
      <Link to="/product/101">Product 101</Link>
    </nav>
  );
};

export default Navbar;
```

---

# 🛠️ Step 4: Setup Routing in App.jsx

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

---

# 🚀 Step 5: index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---

# 🎯 Features aapko milenge:

| Feature | Description |
|:--------|:------------|
| Home, About, Contact pages ready |
| Product page with **dynamic routing** (Product ID fetch karega URL se) |
| 404 Page agar wrong URL pe jaoge |
| Navbar se har page pe smoothly navigate |

---

# 🧠 Interview me kaise bolenge:

> Sir/Mam, maine React Router DOM use karke ek real-world routing system banaya hai jisme multiple pages (Home, About, Contact),  
> dynamic routes (Product/:id) aur not found (404) page ka integration kiya hai without full page reload.

---

# 🔥 Bonus Tip:

- `Link` ka use karo page reload se bachne ke liye.  
- `useParams()` se dynamic URL parameters (jaise Product ID) nikaal sakte ho.  
- `*` ka path dene se 404 page automatically handle hota hai.

---

