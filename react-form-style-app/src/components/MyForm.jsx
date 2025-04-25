import React, { useState } from "react";
import './Form.css'

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // e.target se hum input name aur value nikaal rahe hai.

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // yaha pe setFormdata ha use karke purana data (...prev) le raha hu.
    // aur jiska input change ho raha hai uska value update kar raha hu
  };
  function handleSubmit(e) {
    e.preventDefault();
    // form submit hone par page reload or navigate na ho isliye preventDefault()

    console.log("Form Data : ", formData);

    alert("Form Submitted!");
  }
  return (
    <div className="form-container">
      <h2>React Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
