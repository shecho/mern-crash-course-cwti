import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

export const coreApiInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL || 'http://localhost:4000',
})

// TODO add token if neeeded
// coreApiInstance.interceptors.request.use(async (config) => {
// const token = jwtToken;
// eslint-disable-next-line no-param-reassign
// config.headers.Authorization = `Bearer ${token}` || '';

// return config;
// });

const ApiService = <T>({ method, url, params, data, responseType }: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return coreApiInstance.request<T>({
    method,
    url,
    params,
    data,
    responseType,
  })
}

export default ApiService
