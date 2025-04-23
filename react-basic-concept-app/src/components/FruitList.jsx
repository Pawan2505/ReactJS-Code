import React from 'react'

const FruitList = () => {
    const fruits = ["Apple", "Banana", "Orange", "Papaya"];
  return (
      <div>
          
          <ul>
              {fruits.map((fruit, index) => (
                  <li key={index}>{ fruit}</li>
              ))}
          </ul>
    </div>
  )
}

export default FruitList