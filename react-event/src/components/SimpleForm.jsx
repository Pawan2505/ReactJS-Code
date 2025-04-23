import React, { useState } from "react";

const SimpleForm = () => {
  const [text, setText] = useState("");

  const formHandle = (e) => {
    e.preventDefault();
    alert(`Form submited...${text}`);
  };

  return (
    <div>
      <form onSubmit={formHandle}>
        <input
        type="text"
        value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Username..."
        />
              <button type="submit">Click Me</button>
              
      </form>
    </div>
  );
};

export default SimpleForm;
