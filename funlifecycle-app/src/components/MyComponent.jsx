import React, { useEffect, useState } from 'react'

const MyComponent = () => {

    const [count, setCount] = useState(0);

    // Mounting ->Fist time load

    useEffect(() => {
        console.log("Component mounted!");
    },[])


    // updating -> Jab state ya props change ho
    useEffect(() => {
    console.log("Component updating!");
    }, [count]);

    // unmounting -> jab component delete/remove ho

    useEffect(() => {
        return () => {
                 console.log("Component Unmounted!");
            }
        }, []);


  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
  );
}

export default MyComponent