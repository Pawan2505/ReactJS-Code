import React from 'react'

const Destructuring = () => {
    const arr = ['Apple', 'Banana', 'Orange', 'Papaya'];

    const [x, y, z, a] = arr;
  return (
      <div>
          <h1>First : {x}</h1>
          <h1>second : {y}</h1>
          <h1>third : {z}</h1>
          <h1>fourth : { a}</h1>
    </div>
  )
}

export default Destructuring