import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8080/api/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Attach token to every request if present
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers = config.headers || {};
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    });
  }

  // Signup API call
  async signup(userDetails) {
    const response = await this.api.post('auth/signup', userDetails);
    return response.data;
  }

  // Login API call
  async login(credentials) {
    const response = await this.api.post('auth/login', credentials);
    // Save token, username, and email in cookies (expires in 7 days)
    if (response.data && response.data.token) {
      const maxAge = 60 * 60 * 24 * 7; // 7 days
      document.cookie = `token=${response.data.token}; path=/; max-age=${maxAge}`;
      if (response.data.username) {
        document.cookie = `username=${encodeURIComponent(response.data.username)}; path=/; max-age=${maxAge}`;
      }
      if (response.data.email) {
        document.cookie = `email=${encodeURIComponent(response.data.email)}; path=/; max-age=${maxAge}`;
      }
    }
    return response.data;
  }

  // Google OAuth login/signup redirect
  googleLogin() {
    window.location.href = 'http://localhost:8080/api/google/login';
  }

  // Request password reset
  async requestPasswordReset(email) {
    // Assuming backend endpoint: POST /password/request?email=...
    const response = await this.api.post('password/request', null, { params: { email } });
    return response.data;
  }

  // Reset password
  async resetPassword(token, newPassword) {
    // Backend endpoint: POST /reset?token=...&newPassword=...
    const response = await this.api.post('password/reset', null, { params: { token, newPassword } });
    return response.data;
  }

  // You can add more methods here (getUser, etc.)
}

const apiService = new ApiService();
export default apiService;
