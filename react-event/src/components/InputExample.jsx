import React, { useState } from "react";

const InputExample = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Username.."
      />
      <p>Text : {text}</p>
    </div>
  );
};

export default InputExample;
