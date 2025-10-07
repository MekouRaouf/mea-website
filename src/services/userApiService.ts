export interface User {
  id: number;
  username: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserRequest {
  username: string;
  password: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

class UserApiService {
  private baseUrl: string;
  private token: string | null = null;

  constructor() {
    this.baseUrl = import.meta.env.VITE_NEWS_API_URL || 'https://mea-api-production.up.railway.app';
    this.token = localStorage.getItem('authToken');
  }

  private getAuthHeaders() {
    return {
      'Content-Type': 'application/json',
      ...(this.token && { 'Authorization': `Bearer ${this.token}` })
    };
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('authToken');
  }

  async login(credentials: LoginRequest): Promise<string> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Login failed');
      }
      
      const data: LoginResponse = await response.json();
      this.setToken(data.token);
      return data.token;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }

  async register(userData: CreateUserRequest): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/register`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(userData)
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout() {
    this.clearToken();
  }
}

export const userApiService = new UserApiService();