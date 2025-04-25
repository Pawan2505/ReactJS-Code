import "./App.css";
import UserList from "./components/UserList";
import withLoading from "./components/withLoading";
import { useEffect, useState } from "react";

const UserListWithLoading = withLoading(UserList);
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setUsers(["Pawan", "Manish", "Vivek", "Anoop"]);
      setIsLoading(false);
  },2000)
},[])

  return (
    <div>
      <UserListWithLoading isLoading={isLoading} users={users} />
  </div>
  )
}

export default App;
