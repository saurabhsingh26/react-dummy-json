import { useState, useEffect } from "react";
const useUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const results = await response.json();
    setUsers(results?.users);
  };

  return users;
};

export default useUsers;
