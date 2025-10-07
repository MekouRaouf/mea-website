export interface NewsArticle {
  id: number;
  title: string;
  description: string;
  excerpt: string;
  image?: string;
  author?: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewsResponse {
  articles: NewsArticle[];
  total: number;
  page: number;
  limit: number;
}

export interface CreateNewsRequest {
  title: string;
  description: string;
  excerpt?: string;
  image?: string;
}

export interface UpdateNewsRequest {
  title?: string;
  description?: string;
  excerpt?: string;
  image?: string;
}

class NewsApiService {
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

  isAuthenticated(): boolean {
    return !!this.token;
  }

  async getNews(): Promise<NewsArticle[]> {
    try {
      const response = await fetch(`${this.baseUrl}/news`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  }

  async getNewsById(id: number): Promise<NewsArticle> {
    try {
      const response = await fetch(`${this.baseUrl}/news/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching news article:', error);
      throw error;
    }
  }

  async createNews(newsData: CreateNewsRequest): Promise<NewsArticle> {
    try {
      const response = await fetch(`${this.baseUrl}/news`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(newsData)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error creating news:', error);
      throw error;
    }
  }

  async updateNews(id: number, newsData: UpdateNewsRequest): Promise<NewsArticle> {
    try {
      const response = await fetch(`${this.baseUrl}/news/${id}`, {
        method: 'PUT',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(newsData)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error updating news:', error);
      throw error;
    }
  }

  async deleteNews(id: number): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/news/${id}`, {
        method: 'DELETE',
        headers: this.getAuthHeaders()
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error deleting news:', error);
      throw error;
    }
  }

  async login(username: string, password: string): Promise<string> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      
      const data = await response.json();
      const token = data.token;
      this.setToken(token);
      return token;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }

}

export const newsApiService = new NewsApiService();