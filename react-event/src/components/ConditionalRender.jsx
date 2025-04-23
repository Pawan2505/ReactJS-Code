import React, { useState } from "react";

const ConditionalRender = () => {
  const [isLogIn, setIsLoginIn] = useState(false);

  return (
    <div>
      <h3>Conditional Rendring...</h3>
      {isLogIn ? <h1>Login Successfully...</h1> : <h1>Logout Page...</h1>}
      <button onClick={() => setIsLoginIn(!isLogIn)}>
        {isLogIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default ConditionalRender;
