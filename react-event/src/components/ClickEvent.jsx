import React from "react";

function ClickEvent() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h3>Click Event</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickEvent;
