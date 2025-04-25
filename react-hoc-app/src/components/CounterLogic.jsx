import React, { useState } from "react";

const CounterLogic = (WrappedComponent) => {
  const EnhancedComponent = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + 1);
    };

    return <WrappedComponent count={count} incrementCount={incrementCount} />;
  };
  return EnhancedComponent;
};

export default CounterLogic;
