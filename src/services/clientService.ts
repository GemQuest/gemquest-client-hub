// src/services/clientService.ts
export async function fetchClients() {
    const response = await fetch('/api/clients') // Adjust to your backend API URL
    const data = await response.json()
    return data
  }
  