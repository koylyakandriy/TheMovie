import { AxiosRequestConfig } from 'axios';

export type Request = <T>(url: string, data?: T, config?: AxiosRequestConfig) => Promise<T>;
