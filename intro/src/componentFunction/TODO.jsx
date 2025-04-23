import React, { useState } from "react";

const TODO = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, seteditIndex] = useState(null);

  const addTask = () => {
    if (task.trim === "") {
      return;
    }

    if (isEditing) {
      const updatedList = [...taskList];
      updatedList[editIndex] = task;
      setTaskList(updatedList);
      setIsEditing(false);
      seteditIndex(null);
    } else {
      setTaskList([...taskList, task]);
    }

    setTask("");
  };

  const editTask = (index) => {
    setTask(taskList[index]);
    setIsEditing(true);
    seteditIndex(index);
  };

  const deleteTask = (index) => {
    let newtaskList = taskList.filter((_, i) => i !== index);
    setTaskList(newtaskList);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>To Do App with Edit</h1>
      <input
        type="text"
        placeholder="Enter your task..."
        onChange={(e) => setTask(e.target.value)}
        value={task}
        style={{ width: "70%", padding: "8px" }}
      />
      <button onClick={addTask} style={{ marginLeft: "10px", padding: "8px" }}>
        {isEditing ? "Update" : "Add"}
      </button>
      <ul style={{ marginTop: "20px" }}>
        {taskList.map((item, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            {item}
            <button
              onClick={() => editTask(index)}
              style={{ marginLeft: "5px" }}
            >
              Edit
            </button>
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "5px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TODO;
