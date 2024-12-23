//! imports
import axios from 'axios';

//! enviroments
const tokenName = import.meta.env.VITE_TOKEN_LOCAL
const urlDev = import.meta.env.VITE_URL_DEVELOP;
const time = import.meta.env.VITE_CONFIG_API_TIME;
const credentials = import.meta.env.VITE_CONFIG_WITH_CREDENTIAL;

const ApiConfig = axios.create({
    baseURL: urlDev,
    timeout: time,
    withCredentials: credentials
});


ApiConfig.interceptors.request.use(
    (config) => {
        
      const token = localStorage.getItem(tokenName);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`; 
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  

export default ApiConfig;