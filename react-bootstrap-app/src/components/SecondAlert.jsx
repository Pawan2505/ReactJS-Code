import Alert from "react-bootstrap/Alert";
import React, { useState } from "react";

const SecondAlert = () => {
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      {show && (
        <Alert onClose={() => setShow(false)} dismissible>
          This is a success alert with dismiss button!
        </Alert>
      )}

      <button className="btn btn-success" onClick={() => setShow(true)}>
        Show Alert Again
      </button>
    </div>
  );
};

export default SecondAlert;
