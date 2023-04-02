import apiClient from "./apiClient";

const httpApi = (endpoint: string) => ({
  getAll: <T>() => {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  },
  create: <T>(entity: T) => apiClient.post(endpoint, entity),
  update: (id: number, updatedField: any) =>
    apiClient.put(`${endpoint}/${id}`, updatedField),
  delete: (id: number) => apiClient.delete(`${endpoint}/${id}`),
});

export default httpApi;
