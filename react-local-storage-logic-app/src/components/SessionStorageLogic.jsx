import React, { useState } from "react";

const sessionStorageLogic = () => {
  const [name, setName] = useState("");

  // Save data in sessionStorage
  function saveData() {
    sessionStorage.setItem("username", name);
    console.log("Saved Name : ", name);
  }

  // Read data from sessionStorage
  function readData() {
    const savedName = sessionStorage.getItem("username");
    console.log("Read name from sessionStorage : ", savedName);
  }

  // Remove specific data
  function removeData() {
    sessionStorage.removeItem("username");
    console.log("Username Removed from sessionStorage");
  }

  // Clear all sessionStorage
  function clearAllData() {
    sessionStorage.clear();
    console.log("All sessionStorage Data Cleared");
  }
  return (
    <div style={{ padding: "20px" }}>
      <h2>Local Storage</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={saveData}>Save Data</button>
      <button onClick={readData}>Read Data</button>
      <button onClick={removeData}>Remove Data</button>
      <button onClick={clearAllData}>Clear All Data</button>
    </div>
  );
};

export default sessionStorageLogic;
