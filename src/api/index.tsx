import axios, { AxiosRequestConfig } from 'axios';
import { API_LINK } from './constants';
import { store } from '../store';
const headers = { 'Connect-type': 'application/json' };
const axiosCfg: AxiosRequestConfig = {
  baseURL: API_LINK,
  headers: headers,
};
export const api = axios.create(axiosCfg);
api.interceptors.request.use((axiosCfg) => {
  try {
    const token = store.getState().user.token;
    axiosCfg.headers!.Authorization = `Bearer ${token}`;
    return axiosCfg;
  } catch {
    axiosCfg.headers!.Authorization = `Bearer `;
    return axiosCfg;
  }
});
