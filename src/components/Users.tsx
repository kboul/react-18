import { useEffect, useState } from "react";
import {
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";

import { Alert, Button } from ".";
import apiClient, { AxiosError, CanceledError } from "../api/apiClient";

interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export default function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    const getUsers = async () => {
      try {
        const res = await apiClient.get<User[]>("/users", {
          signal: controller.signal,
        });
        setUsers(res.data);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        setIsLoading(false);
      }
    };
    getUsers();

    return () => controller.abort();
  }, []);

  const handleUserDelete = (user: User) => async () => {
    const newUsers = [...users];
    setUsers(newUsers.filter((u) => u.id !== user.id));
    if (error) setError("");

    apiClient.delete(`/users/${user.id}`).catch((err) => {
      setError(err.message);
      setUsers(newUsers);
    });
  };

  const handleUserAdd = async () => {
    const originalUsers = [...users];

    const newUser = {
      id: 0,
      name: "Mosh",
      email: "mosh@gmail.com",
      username: "Mosh",
      phone: "123456789",
      website: "mosh.com",
    };
    setUsers((prevState) => [newUser, ...prevState]);

    apiClient
      .post("/users", newUser)
      .then((res) =>
        setUsers((prevState) =>
          prevState.map((u) => (u.id === 0 ? res.data : u))
        )
      )
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const handleUserUpdate = (user: User) => async () => {
    const originalUsers = [...users];

    setUsers((prevState) =>
      prevState.map((u) =>
        u.id === user.id ? { ...user, name: `${user.name}!!!` } : u
      )
    );

    apiClient
      .patch(`/users/${user.id}`, {
        name: `${user.name}!!!`,
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <Alert status="error">{error}</Alert>}
      <Button variant="outline" onClick={handleUserAdd} width={20}>
        Add user
      </Button>
      <TableContainer>
        <Table>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>
                  <Button
                    variant="outline"
                    colorScheme="gray"
                    onClick={handleUserUpdate(user)}
                  >
                    Update
                  </Button>
                </Td>
                <Td>
                  <Button
                    variant="outline"
                    colorScheme="red"
                    onClick={handleUserDelete(user)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
