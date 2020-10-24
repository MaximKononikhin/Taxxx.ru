import axios from 'axios';
import { ENTRY_POINT } from '../utils/constants';


export const createAPI = () => {
  const api = axios.create({
    baseURL: ENTRY_POINT,
    headers: {'Content-Type': 'application/json'},
    timeout: 5000
  });

  return api;
};