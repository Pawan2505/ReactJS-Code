import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    message: "",
  });

  const handleForm = (e) => {
      e.preventDefault();
       alert(
      `Form submitted successfully!\n\nName: ${formData.name}\nEmail: ${formData.email}\nGender: ${formData.gender}\nMessage: ${formData.message}`
    );
  };

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
          <label>Username : </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Usename..."
            required
          />
        </div>
        <div>
          <label>Email : </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email..."
            required
          />
        </div>
        <div>
          <label>Gender : </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option>--Select Gender--</option>
            <option value="male">Male</option>
            <option value="femail">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Message : </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Your Message..."
          ></textarea>
        </div>
        <button type="submit" style={{ margin: "20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
