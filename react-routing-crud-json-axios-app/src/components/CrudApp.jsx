import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const CrudApp = () => {
  const { register, handleSubmit, reset } = useForm();
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);

  async function show() {
    const response = await axios.get("http://localhost:3001/users");
    setUsers(response.data);
  }

  useEffect(() => {
    show();
  }, []);

  async function signup(data) {
    if (userId === null) {
      await axios.post("http://localhost:3001/users", data);
    } else {
      await axios.put(`http://localhost:3001/users/${userId}`, data);
      alert("Updated successfully!");
    }
    reset();
    setUserId(null);
    show();
  }

  async function handleDelete(id) {
    await axios.delete(`http://localhost:3001/users/${id}`);
    show();
  }

  function handleEdit(id) {
    setUserId(id);
    const singleUser = users.find((user) => user.id === id);
    reset(singleUser);
  }

  return (
    <div
      style={{ maxWidth: "700px", margin: "30px auto", fontFamily: "Segoe UI" }}
    >
      <h2
        style={{ textAlign: "center", color: "#2c3e50", marginBottom: "20px" }}
      >
       👤 User CRUD App
      </h2>

      <form
        onSubmit={handleSubmit(signup)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <input
          type="text"
          {...register("username")}
          placeholder="Enter Username"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #bbb",
            fontSize: "16px",
          }}
        />
        <input
          type="email"
          {...register("email")}
          placeholder="Enter Email"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #bbb",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "5px",
            backgroundColor: userId === null ? "#27ae60" : "#e67e22",
            color: "white",
            fontWeight: "bold",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {userId === null ? "Submit" : "Update"}
        </button>
      </form>

      <table
        style={{
          width: "100%",
          marginTop: "30px",
          borderCollapse: "collapse",
          backgroundColor: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <thead style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
          <tr>
            <th style={{ padding: "10px" }}>#</th>
            <th style={{ padding: "10px" }}>Username</th>
            <th style={{ padding: "10px" }}>Email</th>
            <th style={{ padding: "10px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id} style={{ textAlign: "center" }}>
                <td style={{ padding: "10px" }}>{index + 1}</td>
                <td style={{ padding: "10px" }}>{user.username}</td>
                <td style={{ padding: "10px" }}>{user.email}</td>
                <td style={{ padding: "10px" }}>
                  <button
                    onClick={() => handleEdit(user.id)}
                    style={{
                      backgroundColor: "#3498db",
                      color: "white",
                      padding: "6px 10px",
                      borderRadius: "4px",
                      border: "none",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    style={{
                      backgroundColor: "#e74c3c",
                      color: "white",
                      padding: "6px 10px",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ padding: "15px", textAlign: "center" }}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudApp;
