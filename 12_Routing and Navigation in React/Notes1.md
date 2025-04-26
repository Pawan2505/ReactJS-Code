# 📘 Topic: Routing and Navigation in React

---

## 🔥 1. Pehle Routing ka Simple Definition:

**Routing** ka matlab hota hai **"multiple pages ko React app ke andar handle karna"** — bina browser ko reload kiye.

**React me** jab aap different pages banana chahte ho jaise:
- `/home`
- `/about`
- `/contact`

tab **React Router** ki jarurat padti hai.

Browser me page reload nahi hoga, **single page app** ke tarike se content dynamically change hoga.  
Yehi hota hai **SPA** — Single Page Application.

---

## 🎯 2. Intro to Router — React Router

React by default routing nahi deta.  
Uske liye hume ek **third-party library** install karni padti hai jiska naam hai:

> **`react-router-dom`**

**React Router DOM** ke andar aapko kuch important tools milte hain jaise:
- `BrowserRouter`
- `Routes`
- `Route`
- `Link`
- `NavLink`
- `useNavigate`
- `useParams`
- `useLocation`

---

### 🤔 Simple Example Samjho:

Jaise hum ek **mall** me gaye.  
Mall ke andar kai saare shops hote hain — Home Decor, Electronics, Food Court, Clothing, etc.  
Agar hum bina mall ke bahar jaaye shop se shop ghumein — wahi React Router ka kaam hai.

---

## 📦 3. Installing Third-Party Package

Sabse pehla step hota hai:

### 👉 Install react-router-dom

Terminal me run karo:

```bash
npm install react-router-dom
```

**Ya yarn users ke liye:**

```bash
yarn add react-router-dom
```

**Yeh kya karega?**  
- Aapke project ke `node_modules` me React Router ka code le aayega
- Uske baad aap Router ke components use kar paoge.

---

# 🚀 4. Mini Example Step-by-Step

### Step 1: Wrap your app inside `<BrowserRouter>`

```jsx
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
```

---

### Step 2: Create Routes inside App.js

```jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <h1>My Website</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
```

---

### Step 3: Navigate between pages using `<Link>`

```jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
```

---

# 🧠 Concept Summary Table:

| Concept | Explanation |
|:--------|:------------|
| BrowserRouter | Poore app ko routing capable banata hai |
| Routes | Multiple routes ko group karta hai |
| Route | Single ek route define karta hai |
| Link | Page reload bina navigation karta hai |
| NavLink | Same as Link, but active class milta hai styling ke liye |
| useNavigate | Programmatic navigation (e.g., button click ke through move karwana) |
| useParams | URL ke dynamic parts ko read karta hai |
| useLocation | Current URL ka path, query params wagaira read karta hai |

---

# 🎯 Interview Tips:
> Sir/Mam, React me multiple screens ko manage karne ke liye React Router DOM ka use kiya jata hai.  
> Isse SPA behavior milta hai, aur user experience fast and smooth rehta hai without full page reload.  
> Routing setup karne ke liye pehle react-router-dom install karte hain, fir BrowserRouter, Routes, Route, Link components ka use karke pages banate hain.

---

# 🚀 Agla Step?

Main aapko ek **Real Routing Project** bhi dikha sakta hoon:  
- Home
- About
- Contact
- 404 Not Found Page
- Dynamic Routing (ex: /product/:id)

**Bataiye, kya aap ek real-world routing project banana chahenge next?** 🚀✨  
(Ready karoon simple se template ke saath?)