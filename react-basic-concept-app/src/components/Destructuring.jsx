import React from 'react'

const Destructuring = () => {
    const arr = ['Apple', 'Banana', 'Orange', 'Papaya'];

    const [x, y, z, a] = arr;

  return (
      <div>
          
          <h1>First : {x}</h1>
          <h1>Second : {y}</h1>
          <h1>Third : {z}</h1>
          <h1>Fourth : {a }</h1>
    </div>
  )
}

export default Destructuring