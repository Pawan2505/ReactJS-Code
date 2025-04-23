import React from 'react'

const FilterData = () => {
    let data = [12, 34, 5, 68, 89, 34, 56];
    data = data.filter((item) => item%2 === 0)
  return (
      <div>
          <h1>Even Data : </h1>
          <ul>
              {data.map((item, index) => (
                  <li key={index}>{ item}</li>
          ))}
          </ul>  
    </div>
  )
}

export default FilterData