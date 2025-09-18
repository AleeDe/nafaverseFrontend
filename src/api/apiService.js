import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Change this to your backend API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example usage: api.get('/user')
export default api;
