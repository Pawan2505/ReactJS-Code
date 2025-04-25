import React, { useState } from 'react'

const ControlledForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name : ", name);
        console.log("Email : ", email);
    }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Enter name...' value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder='Enter email...' value={email} onChange={(e) => setEmail(e.target.value)} />
              <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default ControlledForm