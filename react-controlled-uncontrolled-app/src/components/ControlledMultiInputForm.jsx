import React, { useState } from 'react'

const ControlledMultiInputForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData, [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data : ", formData)
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type="text" name='name' placeholder='Enter name...' value={formData.name} onChange={handleChange} />
              <input type="email" name='email' placeholder='Enter email...' value={formData.email} onChange={handleChange} />
              <input type="password" name='password' placeholder='Enter Password...' value={formData.password} onChange={handleChange} />
              <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default ControlledMultiInputForm