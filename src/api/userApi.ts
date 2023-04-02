import apiClient from "./apiClient";

const getUsers = () => {
  const controller = new AbortController();
  const request = apiClient.get<User[]>("/users", {
    signal: controller.signal,
  });
  return { request, cancel: () => controller.abort() };
};

const createUser = (user: User) => apiClient.post("/users", user);

const updateUser = (id: number, updatedUserField: any) =>
  apiClient.put(`/users/${id}`, updatedUserField);

const deleteUser = (id: number) => apiClient.delete(`/users/${id}`);

export default { getUsers, createUser, updateUser, deleteUser };
