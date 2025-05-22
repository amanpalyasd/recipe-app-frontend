import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // Change as per your backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercept every request and attach the token
apiClient.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default apiClient;