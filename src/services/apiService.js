import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/auth'; 

export const login = async (username, password) => {
    const response = await axios.post(`${API_BASE}/login`, {
      username,
      password
    });
    return response.data;
};






// New register function
export const register = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE}/register`, {
      username,
      password
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
