import apiClient from "./apiClient";

const getUsers = () => {
  const controller = new AbortController();
  const request = apiClient.get<User[]>("/users", {
    signal: controller.signal,
  });
  return { request, cancel: () => controller.abort() };
};

export default { getUsers };
