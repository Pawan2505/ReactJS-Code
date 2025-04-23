import React, { useState } from "react";

const Toggle = () => {
  const [show, setShow] = useState(true);

  const togglePara = () => setShow(!show);
  return (
    <div>
      <button onClick={togglePara}>
        {show ? "Hide" : "Show"}
        Paragraph
      </button>

      {show && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          aperiam!
        </p>
      )}
    </div>
  );
};

export default Toggle;
