import React, { useRef } from 'react'

const UncontrolledForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;

        console.log("Name : ", name);
        console.log("Email : ", email);
    };

  return (
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter Name...' ref={nameRef} />
          <input type="email" placeholder='Enter Email...' ref={emailRef} />
          <button type='submit'>Submit</button>
     </form>
  )
}

export default UncontrolledForm