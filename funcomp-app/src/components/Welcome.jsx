import React from 'react'

function Welcome(props) {
  return (
      <div>
          <h2>Hello, {props.name}!</h2>
          <p>My age is : { props.age}</p>
    </div>
  )
}

export default Welcome;
