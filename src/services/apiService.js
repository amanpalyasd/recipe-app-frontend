import axios from 'axios';

const API_BASE = 'http://localhost:8080/auth'; 

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE}/login`, {
      username,
      password
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// export const register = async (userData) => {
//   try {
//     const response = await axios.post(`${API_BASE}/register`, userData);
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || error.message;
//   }
// };
