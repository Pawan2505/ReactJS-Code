import React, { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);

  function increase() {
    setCounter((count) => count + 1);
  }
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default Counter;
