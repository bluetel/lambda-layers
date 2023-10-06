import axios, { AxiosRequestConfig } from 'axios'

export const request = async (
  url: string,
  headers?: { [key: string]: string },
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: any
): Promise<{ [key: string]: any }> => {
  const config: AxiosRequestConfig = {
    method: method ?? 'POST',
    url,
    headers: {
      'Content-Type': 'application/json',
      ...(headers ?? {}),
    },
    data: method === 'POST' && body ? body : undefined,
  }
  const response = await axios(config)
  return response.data
}
