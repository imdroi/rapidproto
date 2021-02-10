/**
 * Environment values starting with ${} are replaced
 * on dockerization/ creating the image by the values
 * placed as -ENV or in the service environment.
 * The default is http://localhost:3333/api with time out at 3000 ms.
 */
export const environment = {
  production: true,
  backendApiHost: !'${BACKEND_API_HOST}'.startsWith('${') ? '${BACKEND_API_HOST}' : 'http://localhost',
  backendApiPort: !'${BACKEND_API_PORT}'.startsWith('${') ? '${BACKEND_API_PORT}' : '3333',
  backendApiPrefix: !'${BACKEND_API_PREFIX}'.startsWith('${') ? '${BACKEND_API_PREFIX}' : 'api',
  backendApiTimeout: !'${BACKEND_API_TIMEOUT}'.startsWith('${') ? '${BACKEND_API_TIMEOUT}' : '3000',
};
