import React from "react";

const FilterData = () => {
  let data = [12, 3, 5, 67, 89, 90];
  data = data.filter((item) => item % 2 === 0);
  return (
    <div>
      <h1>Even Data</h1>
      <ul>
    {data.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterData;
