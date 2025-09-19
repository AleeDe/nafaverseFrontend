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
    // Save token to localStorage if present
    if (response.data && response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  }

  // Google OAuth login/signup redirect
  googleLogin() {
    window.location.href = 'http://localhost:8080/api/google/login';
  }

  // You can add more methods here (getUser, etc.)
}

// Add this utility to handle Google OAuth callback
export function handleGoogleOAuthCallback() {
  // Check for token in URL (e.g., /?token=...)
  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');
  if (token) {
    localStorage.setItem('token', token);
    window.location.href = '/'; // Redirect to home page
  }
}

const apiService = new ApiService();
export default apiService;
