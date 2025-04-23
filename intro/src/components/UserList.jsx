import React from "react";

const UserList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Phone", price: 30000 },
    { id: 3, name: "Headphones", price: 5000 },
  ];

    return (
        <div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>Name : {product.name} Price : {product.price}</li>
                ))}
            </ul>
      </div>
  )
};

export default UserList;
