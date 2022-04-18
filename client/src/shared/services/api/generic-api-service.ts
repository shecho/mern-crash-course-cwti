import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export const genericApiInstance = axios.create();

const GenericApiService = <T>({
  method,
  url,
  params,
  data,
  headers,
}: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return genericApiInstance.request<T>({
    method,
    url,
    params,
    data,
    headers,
  });
};

export default GenericApiService;
