import axios, { AxiosError } from "axios";
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
    const getUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
    getUsers();
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
