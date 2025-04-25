import React, { useState } from 'react'
import './FormValidation.css';
const FormValidation = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password:''
    })

    const [errors, setErrors] = useState({});

    const handlechange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => (
            {...prev,[name]:value}
        ))
    }

    const validate = () => {
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = "Name is required";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErrors.email = "Invalid Email";
        }

        if (!formData.password) {
            newErrors.password = "Password Required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters."
        }

        return newErrors;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();

        if (Object.keys(formErrors).length === 0) {
            alert("Form Submited Successfully!")
            console.log("Submited Data : ", formData);
        } else {
            setErrors(formErrors);
        }
    }

  return (
    <div className="form-container">
      <h2>React Form Validate</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter name..."
          onChange={handlechange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter email..."
          onChange={handlechange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter password..."
          onChange={handlechange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation