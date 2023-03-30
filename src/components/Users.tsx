import axios, { AxiosError, CanceledError } from "axios";
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
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal: controller.signal,
          }
        );
        setUsers(res.data);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
      }
    };
    getUsers();

    return () => controller.abort();
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
