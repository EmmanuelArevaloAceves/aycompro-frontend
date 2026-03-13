const BASE_URL = "http://localhost:8000"

export async function apiGet(endpoint: string) {
  const response = await fetch(`${BASE_URL}${endpoint}`)
  if (!response.ok) throw new Error("Error en GET")
  return response.json()
}

export async function apiPost(endpoint: string, data: any) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  if (!response.ok) throw new Error("Error en POST")
  return response.json()
}