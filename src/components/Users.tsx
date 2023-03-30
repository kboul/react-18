import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from ".";

interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error ? (
        <Alert status="error">{error}</Alert>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
