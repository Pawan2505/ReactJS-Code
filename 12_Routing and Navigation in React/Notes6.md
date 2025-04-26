# 🧩 Step 1: Bootstrap Install

Terminal me type karo:

```bash
npm install bootstrap
```

**Aur** apne `index.js` file me **Bootstrap CSS** ko import kar do:

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

✅ Ab Bootstrap ready hai!

---

# 📦 Step 2: Update Pages with Bootstrap Classes

---

# 🏡 Home.jsx (Professional Listing Page)

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
    <div className="container mt-4">
      <h2 className="text-center mb-4">Students List</h2>
      <div className="text-end mb-3">
        <Link to="/add" className="btn btn-primary">Add New Student</Link>
      </div>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? students.map((student, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <Link to={`/edit/${index}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="4" className="text-center">No Students Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
```

---

# ➕ AddStudent.jsx (Professional Form)

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
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add New Student</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
        <div className="mb-3">
          <label>Name</label>
          <input {...register('name')} className="form-control" placeholder="Enter Name" required />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input {...register('age')} type="number" className="form-control" placeholder="Enter Age" required />
        </div>
        <div className="d-grid">
          <button className="btn btn-success">Add Student</button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
```

---

# ✏️ EditStudent.jsx (Professional Edit Form)

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
    <div className="container mt-4">
      <h2 className="text-center mb-4">Edit Student</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
        <div className="mb-3">
          <label>Name</label>
          <input {...register('name')} className="form-control" placeholder="Enter Name" required />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input {...register('age')} type="number" className="form-control" placeholder="Enter Age" required />
        </div>
        <div className="d-grid">
          <button className="btn btn-primary">Update Student</button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
```

---

# 🌐 App.jsx remains same (Routing)

(Already humne browser router, route setup kar liya tha.)

---

# ✅ Output Ab Professional Ban Gaya:

- List page -> Stylish table view.
- Add page -> Form center aligned with validation.
- Edit page -> Form center aligned pre-filled data ke saath.
- Delete button -> Clean red button look.
- Full Bootstrap powered responsive design.

---

# 🎯 Interview Me Bolne Layak Line:

> Sir/Mam, maine ReactJS me ek CRUD application banaya hai jisme Bootstrap ka use karke UI ko professional aur responsive banaya hai.  
> Data persistence ke liye LocalStorage use kiya hai. Routing, Forms, Validation, aur Page Navigation handle kiya gaya hai react-router-dom aur react-hook-form se.

---

# 🚀 Future Upgrades Ideas (Agar chaaho to):

| Feature | Explanation |
|:--------|:------------|
| Search Bar | List me students ko search karna |
| Sorting | Name ya Age ke hisaab se sort karna |
| Pagination | Bahut saare students hone par page divide karna |
| Toast Alerts | Add/Edit/Delete ke baad success ya error message show karna |

---
