import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // Your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Change this line
export const apiService = {
  requestPasswordReset: (email) => {
    return apiClient.post(`/password/request?email=${email}`);
  },
  resetPassword: (token, newPassword) => {
    return apiClient.post(`/password/reset?token=${token}&newPassword=${newPassword}`);
  },
  // ... other api calls
};

// Remove any "export default apiService;" line if it exists
