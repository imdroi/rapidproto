/**
 * Environment values starting with ${} are replaced
 * on dockerization/ creating the image by the values
 * placed as -ENV or in the service environment.
 * The default is http://localhost:3333/api with time out at 3000 ms.
 */
export const environment = {
  production: true,
};
