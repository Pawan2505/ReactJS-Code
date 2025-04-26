# 🚦 What is Router in React?

> **Router** ek traffic police ki tarah kaam karta hai — aapka URL dekh kar decide karta hai ki kaunsa page (component) dikhana hai.

React by default sirf ek page ka app hota hai (Single Page Application - SPA).  
Router lagane ke baad multiple pages jaise experience milta hai **without page reload**.

---

# 🛠 Install Router

Project banane ke baad sabse pehle router install karte hain:

```bash
npm install react-router-dom
```

---

# 📚 Basic Router Setup

`App.jsx` me Router ka structure kuch aise hota hai:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

| Part | Explanation |
|:-----|:------------|
| `<BrowserRouter>` | Router ko on karta hai |
| `<Routes>` | Saare `<Route>` components ka group |
| `<Route>` | Path (URL) ke basis par kaunsa component dikhana hai |

---

# 🏡 Create Pages (Components)

Example ke liye do chhoti files banao:

### Home.jsx

```jsx
function Home() {
  return <h1>Welcome to Home Page</h1>;
}

export default Home;
```

### About.jsx

```jsx
function About() {
  return <h1>About Us Page</h1>;
}

export default About;
```

✅ Ab jab aap `/` jaoge to Home page dikhayega.  
✅ Aur jab `/about` jaoge to About page dikhayega.

---

# 🔗 Navigation karna (Linking pages)

React me `<a>` tag use nahi karte.  
Instead hum use karte hai **`<Link>`** ya **`<NavLink>`**.

Example:

```jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
```

| 🚫 `<a>` Tag | ✅ `<Link>` Tag |
|:------------|:---------------|
| Page Reload hota hai | Page Reload nahi hota |

---

# 🧠 Important Points (for Interviews):

| Topic | Detail |
|:------|:-------|
| BrowserRouter | URL change karta hai bina reload ke |
| Routes & Route | Saare paths aur pages define karte hain |
| Link | Ek page se dusre page par jaane ke liye |
| useNavigate() | Programmatically page switch karna |
| useParams() | URL se dynamic data read karna |

---

# ✨ Real World Example:

Jaise:

| URL | Page |
|:----|:-----|
| `/products` | Product Listing Page |
| `/products/123` | Product Detail Page |
| `/cart` | Shopping Cart Page |

Har URL ka apna ek alag component hoga!

---

# 📋 Final Summary

**Router** React App ka multiple page view banata hai bina reload ke.  
Isme **URL** ke hisaab se hum different **components** dikhate hain.

✅ Page navigation fast hoti hai  
✅ User experience better hota hai  
✅ App Single Page Application hi rehta hai

---

# 🔥 If you want next level training:

- Dynamic Routes (Params ke saath)
- Protected Routes (Login wale)
- Lazy Loading Routes (Speed optimization ke liye)
- Nested Routing (Subpages ke liye)

