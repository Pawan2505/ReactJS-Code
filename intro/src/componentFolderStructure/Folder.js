import React, { useState } from "react";

function Folder({ explorer }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!explorer.isFolder) {
    return <p style={{ marginLeft: "20px" }}>📄 {explorer.name}</p>;
  }

    return (
      
    <div style={{ marginLeft: "20px" }}>
    
      <p
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer", fontWeight: "bold" }}
      >
        {isOpen ? "📂" : "📁"} {explorer.name}
      </p>

      {isOpen &&
        explorer.items.map((item, index) => (
          <Folder explorer={item} key={index} />
        ))}
    </div>
  );
}

export default Folder;
