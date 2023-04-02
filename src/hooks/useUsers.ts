import { useEffect, useState } from "react";

import userApi from "../api/userApi";
import { AxiosError, CanceledError } from "../api/apiClient";

export default function useUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = userApi.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  return { isLoading, users, error, setUsers, setError };
}
