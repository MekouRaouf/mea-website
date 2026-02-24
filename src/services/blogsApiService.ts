export interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: WordPressAuthor[];
    'wp:featuredmedia'?: WordPressMedia[];
    'wp:term'?: WordPressTerm[][];
  };
}

export interface WordPressAuthor {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    [key: string]: string;
  };
}

export interface WordPressMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    sizes: {
      [key: string]: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
    };
  };
  source_url: string;
}

export interface WordPressTerm {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
}

export interface WordPressComment {
  id: number;
  post: number;
  parent: number;
  author: number;
  author_name: string;
  author_url: string;
  author_email: string;
  date: string;
  date_gmt: string;
  content: {
    rendered: string;
  };
  link: string;
  status: string;
  type: string;
  author_avatar_urls: {
    [key: string]: string;
  };
  meta: any[];
}

export interface BlogResponse {
  posts: WordPressPost[];
  total: number;
  totalPages: number;
}

export interface CommentSubmission {
  post: number;
  author_name: string;
  author_email: string;
  author_url?: string;
  content: string;
  parent?: number;
}

class BlogsApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.REACT_APP_WORDPRESS_API_URL || 'https://backoffice.mea-energy.eu/wp-json/wp/v2';
  }

  async getPosts(params?: {
    page?: number;
    per_page?: number;
    search?: string;
    categories?: string;
    tags?: string;
    orderby?: string;
    order?: 'asc' | 'desc';
  }): Promise<BlogResponse> {
    try {
      const queryParams = new URLSearchParams();
      
      if (params?.page) queryParams.append('page', params.page.toString());
      if (params?.per_page) queryParams.append('per_page', params.per_page.toString());
      if (params?.search) queryParams.append('search', params.search);
      if (params?.categories) queryParams.append('categories', params.categories);
      if (params?.tags) queryParams.append('tags', params.tags);
      if (params?.orderby) queryParams.append('orderby', params.orderby);
      if (params?.order) queryParams.append('order', params.order);
      
      // Include embedded data for author, featured media, and terms
      queryParams.append('_embed', 'true');

      const response = await fetch(`${this.baseUrl}/posts?${queryParams}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const posts = await response.json();
      const total = parseInt(response.headers.get('X-WP-Total') || '0');
      const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0');
      
      return {
        posts,
        total,
        totalPages
      };
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  }

  async getPostBySlug(slug: string): Promise<WordPressPost> {
    try {
      const response = await fetch(`${this.baseUrl}/posts?slug=${slug}&_embed=true`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const posts = await response.json();
      
      if (posts.length === 0) {
        throw new Error('Post not found');
      }
      
      return posts[0];
    } catch (error) {
      console.error('Error fetching post:', error);
      throw error;
    }
  }

  async getPostById(id: number): Promise<WordPressPost> {
    try {
      const response = await fetch(`${this.baseUrl}/posts/${id}?_embed=true`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching post:', error);
      throw error;
    }
  }

  async getComments(postId: number, params?: {
    page?: number;
    per_page?: number;
    order?: 'asc' | 'desc';
    orderby?: string;
    parent?: number;
  }): Promise<{ comments: WordPressComment[]; total: number; totalPages: number }> {
    try {
      const queryParams = new URLSearchParams();
      
      queryParams.append('post', postId.toString());
      if (params?.page) queryParams.append('page', params.page.toString());
      if (params?.per_page) queryParams.append('per_page', params.per_page.toString());
      if (params?.order) queryParams.append('order', params.order);
      if (params?.orderby) queryParams.append('orderby', params.orderby);
      if (params?.parent !== undefined) queryParams.append('parent', params.parent.toString());

      const response = await fetch(`${this.baseUrl}/comments?${queryParams}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const comments = await response.json();
      const total = parseInt(response.headers.get('X-WP-Total') || '0');
      const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0');
      
      return {
        comments,
        total,
        totalPages
      };
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw error;
    }
  }

  async submitComment(commentData: CommentSubmission): Promise<WordPressComment> {
    try {
      const response = await fetch(`${this.baseUrl}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error submitting comment:', error);
      throw error;
    }
  }

  async getCategories(): Promise<WordPressTerm[]> {
    try {
      const response = await fetch(`${this.baseUrl}/categories?per_page=100`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }

  async getTags(): Promise<WordPressTerm[]> {
    try {
      const response = await fetch(`${this.baseUrl}/tags?per_page=100`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching tags:', error);
      throw error;
    }
  }

  // Helper methods
  stripHtml(html: string): string {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  estimateReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const text = this.stripHtml(content);
    const wordCount = text.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }

  getFeaturedImage(post: WordPressPost): string | null {
    if (post._embedded?.['wp:featuredmedia']?.[0]) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return null;
  }

  getAuthor(post: WordPressPost): WordPressAuthor | null {
    if (post._embedded?.author?.[0]) {
      return post._embedded.author[0];
    }
    return null;
  }

  getCategories(post: WordPressPost): WordPressTerm[] {
    if (post._embedded?.['wp:term']?.[0]) {
      return post._embedded['wp:term'][0].filter(term => term.taxonomy === 'category');
    }
    return [];
  }

  getTags(post: WordPressPost): WordPressTerm[] {
    if (post._embedded?.['wp:term']?.[1]) {
      return post._embedded['wp:term'][1].filter(term => term.taxonomy === 'post_tag');
    }
    return [];
  }
}

export const blogsApiService = new BlogsApiService();