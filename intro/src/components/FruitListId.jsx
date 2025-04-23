import React from "react";

const FruitListId = () => {
      const fruits = [
        { id: 1, name: "mango" },
        { id: 2, name: "Apple" },
        { id: 3, name: "Banana" },
      ];
    return (
      <div>
            <h1>Fruit List</h1>
            <ul>
                {fruits.map((item) => (
                    <li key={item.id}>{ item.name}</li>
                ))}
            </ul>
      </div>
    );
}

export default FruitListId;