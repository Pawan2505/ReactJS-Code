import React from "react";

const FruitList = () => {
  const fruits = ["Apple", "Banana", "Papaya"];
  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((item, index) => (
            
          <li key={index}>{item}</li>
        )
        )}
      </ul>
    </div>
  );
};

export default FruitList;
