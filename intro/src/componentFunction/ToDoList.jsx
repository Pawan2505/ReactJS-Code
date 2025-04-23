import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    
    if (task.trim() === "") return;

    if (isEditing) {
      const updatedList = [...taskList];
      updatedList[editIndex] = task;
      setTaskList(updatedList);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setTaskList([...taskList, task]);
    }

    setTask(""); // clear input
  };

  const deleteTask = (index) => {
    const newList = taskList.filter((_, i) => i !== index);
    setTaskList(newList);
  };

  const editTask = (index) => {
    setTask(taskList[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📝 To-Do App with Edit</h2>

      <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ width: "70%", padding: "8px" }}
      />
      <button onClick={addTask} style={{ marginLeft: "10px", padding: "8px" }}>
        {isEditing ? "Update" : "Add"}
      </button>

      <ul style={{ marginTop: "20px" }}>
        {taskList.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
            <button
              onClick={() => editTask(index)}
              style={{ marginLeft: "10px" }}
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
}

export default TodoApp;
