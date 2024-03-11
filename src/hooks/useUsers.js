import { useState, useEffect } from "react";
const useUsers = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetUsers();
  }, []);
  const fetUsers = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const results = await response.json();
    setUsers(results?.users);
  };

  return users;
};

export default useUsers;
