import React from 'react'

const UserList = () => {
    const users = [
        { id: 1, name: "Ram" },
        { id: 2, name: "Manish" },
        { id: 3, name: "Pawan" },
        {id:4,name:"Shyam"}
    ]
  return (
      <div>
          <h1>User List</h1>
          <ul>
              {
                  users.map((user) => (
                      <li key={user.id }>{ user.name}</li>
                  ))
              }
          </ul>
    </div>
  )
}

export default UserList