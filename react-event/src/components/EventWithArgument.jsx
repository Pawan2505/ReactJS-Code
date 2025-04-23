import React from 'react'

const EventWithArgument = () => {

    const handleArgument =(name)=>{
        alert(`Your data handled : ${name}`);
    }
  return (
      <div>
          <h1>Event with argument</h1>
          <button onClick={() => handleArgument("Pawan")}>Click</button>
    </div>
  )
}

export default EventWithArgument