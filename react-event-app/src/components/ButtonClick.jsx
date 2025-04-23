import React from "react";

const ButtonClick = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ButtonClick;
