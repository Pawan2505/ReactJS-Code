import React, { useState } from 'react';

const Fruits = () => {

    const [fruits, setFruits] = useState(['Mango', 'banana', 'Orange']);

    function add() {
        setFruits((item) => [...item, 'Pinepal']);
    }
    return (
        <div>
            <h1>Fruits List</h1>
            <ul>
                {fruits.map((fruit,index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>

            <button onClick={add}>Add Pinepal</button>
       </div> 
    )
}

export default Fruits;