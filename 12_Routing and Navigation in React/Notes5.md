# 🏗️ Mini Project: Students CRUD with LocalStorage

---

# 📂 Folder Structure:

```
src/
  ├── pages/
  │    ├── Home.jsx
  │    ├── AddStudent.jsx
  │    ├── EditStudent.jsx
  ├── App.jsx
  └── index.js
```

---

# 📥 Prerequisite:
Install `react-router-dom` (agar pehle nahi kiya to):

```bash
npm install react-router-dom
```

---

# 🏡 1. Home.jsx — (Student List Page)

```jsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  const handleDelete = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  return (
    <div>
      <h1>Students List</h1>
      <Link to="/add">Add New Student</Link>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.age} years old
            <Link to={`/edit/${index}`} style={{ marginLeft: '10px' }}>Edit</Link>
            <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
```

---

# ➕ 2. AddStudent.jsx — (Add New Student)

```jsx
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const existingStudents = JSON.parse(localStorage.getItem('students')) || [];
    existingStudents.push(data);
    localStorage.setItem('students', JSON.stringify(existingStudents));
    navigate('/');
  };

  return (
    <div>
      <h1>Add New Student</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Name" required />
        <input {...register('age')} type="number" placeholder="Age" required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddStudent;
```

---

# ✏️ 3. EditStudent.jsx — (Update Student)

```jsx
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const EditStudent = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const student = students[id];
    if (student) {
      setValue('name', student.name);
      setValue('age', student.age);
    }
  }, [id, setValue]);

  const onSubmit = (data) => {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students[id] = data;
    localStorage.setItem('students', JSON.stringify(students));
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Student</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Name" required />
        <input {...register('age')} type="number" placeholder="Age" required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditStudent;
```

---

# 🌐 4. App.jsx — (Routing Setup)

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

---

# ✅ Flow of the App:

1. **Home.jsx** me Students ka List dikh raha hai (LocalStorage se).
2. **Add Student** page se new student add kar sakte hain.
3. **Edit Student** page se existing student ka data update kar sakte hain.
4. **Delete** button se student ko remove kar sakte hain.

---

# 🎯 Skills aapko isme seekhne milenge:

| Skill | Kya sikhenge? |
|:------|:--------------|
| React Router DOM | Routing, Dynamic Route (Edit ke liye id pass) |
| LocalStorage | Data ko store aur update karna |
| CRUD Operations | Create, Read, Update, Delete full flow |
| useForm Hook | Form ko simple aur clean banaya |
| useNavigate Hook | Programmatic navigation after form submit |
| useParams Hook | URL ke through data access karna |
| useEffect Hook | LocalStorage se data fetch karna page load par |

---

# 🔥 Interview Me Kaise Bolenge:

> Sir/Mam, main ek LocalStorage based CRUD React project banaya hai jisme react-router-dom ka use karke navigation aur routing ki gayi hai.  
> Form handling ke liye react-hook-form use kiya hai. LocalStorage ke through data ka persistence manage kiya gaya hai.  
> Home page par listing, Add page par new entry, Edit page par update, aur Delete button se data remove karte hain.

---
