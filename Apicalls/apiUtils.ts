import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:3004/api';

// Function to handle GET requests
export async function getApiCall<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  try {
    const response = await axios.get<T>(`${BASE_URL}${url}`, {
      headers: { Authorization: "Bearer IAmAuthorized" },
      ...config,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

// Function to handle POST requests
export async function postApiCall<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  try {
    const response = await axios.post<T>(`${BASE_URL}${url}`, data, {
      headers: { Authorization: "Bearer IAmAuthorized" },
      ...config,
    });
    return response;
  } catch (error) {
    throw error;
  }
}
