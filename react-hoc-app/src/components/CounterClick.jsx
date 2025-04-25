import React from 'react'

const CounterClick = ({count,incrementCount}) => {
 return (
      <div style={{ padding: "20px", textAlign: "center" }}>
          
          <h2>Simple Counter App using HOC</h2>

          <button onClick={incrementCount}>
              Clicked {count} time
          </button>
          
    </div>
  )
}

export default CounterClick
