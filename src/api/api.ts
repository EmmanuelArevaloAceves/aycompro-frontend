const BASE_URL = "http://localhost:8000";

export async function apiGet<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) throw new Error("Error en GET");
  return response.json() as Promise<T>;
}

export async function apiPost<TResponse, TBody>(endpoint: string, data: TBody): Promise<TResponse> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Error en POST");
  return response.json() as Promise<TResponse>;
}
