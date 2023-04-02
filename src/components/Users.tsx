import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";
import {
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";

import { Alert, Button } from ".";

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
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
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

    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .catch((err) => {
        setError(err.message);
        setUsers(newUsers);
      });
  };

  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <Alert status="error">{error}</Alert>}
      <TableContainer>
        <Table>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
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
