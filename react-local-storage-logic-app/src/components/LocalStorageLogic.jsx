import React, { useState } from 'react'

const LocalStorageLogic = () => {
    const [name, setName] = useState('');

    // Save data in Localstorage
    function saveData() {
        localStorage.setItem('username', name);
        console.log("Saved Name : ", name);
    }

    // Read data from localStorage
    function readData() {
        const savedName = localStorage.getItem('username');
        console.log('Read name from localStorage : ', savedName);
    }

    // Remove specific data
    function removeData() {
        localStorage.removeItem('username');
        console.log('Username Removed from LocalStorage');
    }

    // Clear all LocalStorage
    function clearAllData() {
        localStorage.clear();
        console.log('All LocalStorage Data Cleared');
    }
  return (
      <div style={{ padding: '20px' }}>
          
          <h2>Local Storage</h2>
          <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
          <br />
          <button onClick={saveData}>Save Data</button>
          <button onClick={readData}>Read Data</button>
          <button onClick={removeData}>Remove Data</button>
          <button onClick={clearAllData}>Clear All Data</button>
    </div>
  )
}

export default LocalStorageLogic