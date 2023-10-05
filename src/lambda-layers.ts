import https from 'https'
import http from 'http'

export const request = async (
  url: string,
  options?: https.RequestOptions,
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: any
): Promise<{ [key: string]: any }> => {
  const formattedUrl = new URL(url)

  const moduleToUse = formattedUrl.protocol === 'http:' ? http : https

  const requestOptions: https.RequestOptions = {
    hostname: formattedUrl.hostname,
    port: formattedUrl.port,
    path: formattedUrl.pathname,
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  }

  return new Promise((resolve, reject) => {
    const request = moduleToUse.request(requestOptions, (response) => {
      let returnData = ''

      response.on('data', (chunk) => {
        returnData += chunk
      })

      response.on('end', () => {
        try {
          const parsedJson = JSON.parse(returnData)
          resolve(parsedJson)
        } catch (err) {
          reject(err)
        }
      })
    })

    request.on('error', (err) => {
      reject(err)
    })

    if (body && method === 'POST') {
      request.write(JSON.stringify(body))
    }

    request.end()
  })
}
