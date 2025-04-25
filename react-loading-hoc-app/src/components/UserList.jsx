import React from 'react'

const UserList = ({users}) => {
  return (
      <div style={{ textAlign: "center" }}>
          
          <h2>User List</h2>

          <ul style={{ listStyle: "none" }}>
              
              {users.map((user, index) => (
                  <li key={index}>👤{ user}</li>
              ))}
              
          </ul>
          
    </div>
  )
}

export default UserList