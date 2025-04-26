# 🏗️ Mini Project: Pass Student Data to Another Page

---

# 📂 1. Folder Structure:

```
src/
  ├── pages/
  │    ├── Home.jsx
  │    └── Student.jsx
  ├── App.jsx
  └── index.js
```

---

# 📥 2. Install React Router DOM

Terminal mein:

```bash
npm install react-router-dom
```

---

# 🏡 3. Home.jsx — (Data Send karna)

```jsx
import { Link } from 'react-router-dom';

const Home = () => {
  const student = {
    name: "Pawan",
    age: 22,
    marks: 87
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/student" state={{ student }}>
        Go to Student Details
      </Link>
    </div>
  );
};

export default Home;
```

---

# 🎓 4. Student.jsx — (Data Receive karna)

```jsx
import { useLocation } from 'react-router-dom';

const Student = () => {
  const location = useLocation();
  const { student } = location.state || {};

  return (
    <div>
      <h1>Student Details</h1>
      {student ? (
        <>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Marks:</strong> {student.marks}</p>
        </>
      ) : (
        <p>No student data found.</p>
      )}
    </div>
  );
};

export default Student;
```

---

# 🛠️ 5. App.jsx — (Routing Setup)

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Student from './pages/Student';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

---

# 🚀 6. index.js — (Normal Setup)

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---

# ✅ Output Flow:

- User Home page pe aayega.
- "Go to Student Details" link pe click karega.
- Student page pe student ka name, age aur marks dikhenge.
- Data smoothly pass hoga bina reload ke.

---

# 🎯 Key Points:

| Concept | Explanation |
|:--------|:------------|
| `Link to="/student" state={{ student }}` | Sending student object via Link |
| `useLocation()` | Receiving the `state` (student object) |
| `{ student?.name }` | Safe way to access values |

---

# 🧠 Interview Me Is Project ko Kaise Explain Kare:

> Sir/Mam, is project me maine `react-router-dom` ka use karke ek simple navigation banayi hai.  
> Maine Home page se Student object ko dusre page pe bheja hai Link ke `state` ke through,  
> aur `useLocation` hook se data receive karke Student page pe display kiya hai.  
> Isse efficient aur reload-free navigation achieve hoti hai.

---
