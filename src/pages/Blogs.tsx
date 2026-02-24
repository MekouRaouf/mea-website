import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag, ChevronRight, Loader as Loader2, AlertCircle, ListFilter as Filter } from 'lucide-react';
import { blogsApiService, WordPressPost, BlogResponse } from '../services/blogsApiService';

const Blogs: React.FC = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<WordPressPost[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const POSTS_PER_PAGE = 9;

  useEffect(() => {
    fetchPosts();
    fetchFeaturedPosts();
    fetchCategories();
  }, [currentPage, selectedCategory, searchTerm]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response: BlogResponse = await blogsApiService.getPosts({
        page: currentPage,
        per_page: POSTS_PER_PAGE,
        categories: selectedCategory || undefined,
        search: searchTerm || undefined,
        orderby: 'date',
        order: 'desc'
      });
      
      setPosts(response.posts);
      setTotalPages(response.totalPages);
      setError(null);
    } catch (err) {
      setError('Failed to fetch blog posts');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchFeaturedPosts = async () => {
    try {
      const response: BlogResponse = await blogsApiService.getPosts({
        per_page: 3,
        orderby: 'date',
        order: 'desc'
      });
      // For demo purposes, we'll use the latest posts as featured
      // You can modify this to use sticky posts or a custom field
      setFeaturedPosts(response.posts.slice(0, 3));
    } catch (err) {
      console.error('Error fetching featured posts:', err);
    }
  };

  const fetchCategories = async () => {
    try {
      const cats = await blogsApiService.getCategories();
      setCategories(cats);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchPosts();
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const truncateText = (text: string, maxLength: number) => {
    const stripped = blogsApiService.stripHtml(text);
    return stripped.length > maxLength ? stripped.substring(0, maxLength) + '...' : stripped;
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Blog</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Insights, updates, and stories about renewable energy, sustainability, and our journey towards a cleaner future
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Featured Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => {
                const featuredImage = blogsApiService.getFeaturedImage(post);
                const author = blogsApiService.getAuthor(post);
                const categories = blogsApiService.getCategories(post);
                
                return (
                  <Link
                    key={post.id}
                    to={`/blogs/${post.slug}`}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                      <img
                        src={ featuredImage || 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg'}
                        alt={blogsApiService.stripHtml(post.title.rendered)}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {blogsApiService.formatDate(post.date)}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                        {blogsApiService.stripHtml(post.title.rendered)}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {truncateText(post.excerpt.rendered, 120)}
                      </p>
                      <div className="flex items-center justify-between">
                        {categories.length > 0 && (
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {categories[0].name}
                          </span>
                        )}
                        <ChevronRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </form>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="w-5 h-5 text-gray-500" />
              <button
                onClick={() => handleCategoryChange('')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === ''
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id.toString())}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id.toString()
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-green-600" />
              <span className="ml-2 text-gray-600">Loading posts...</span>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Posts Found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => {
                  const featuredImage = blogsApiService.getFeaturedImage(post);
                  const author = blogsApiService.getAuthor(post);
                  const categories = blogsApiService.getCategories(post);
                  const tags = blogsApiService.getTags(post);
                  
                  return (
                    <Link
                      key={post.id}
                      to={`/blogs/${post.slug}`}
                      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                        <img
                          src={featuredImage || 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg'}
                          alt={blogsApiService.stripHtml(post.title.rendered)}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {blogsApiService.formatDate(post.date)}
                          </div>
                          {author && (
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {author.name}
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                          {truncateText(post.title.rendered, 60)}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {truncateText(post.excerpt.rendered, 100)}
                        </p>
                        <div className="flex items-center justify-between">
                          {categories.length > 0 && (
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                              {categories[0].name}
                            </span>
                          )}
                          <ChevronRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                        {tags.length > 0 && (
                          <div className="flex items-center mt-3 pt-3 border-t border-gray-100">
                            <Tag className="w-4 h-4 text-gray-400 mr-2" />
                            <div className="flex flex-wrap gap-1">
                              {tags.slice(0, 3).map((tag, index) => (
                                <span key={tag.id} className="text-xs text-gray-500">
                                  #{tag.name}
                                  {index < Math.min(tags.length, 3) - 1 && ', '}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Previous
                    </button>
                    
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      const page = i + 1;
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-4 py-2 border rounded-lg ${
                            currentPage === page
                              ? 'bg-green-600 text-white border-green-600'
                              : 'border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                    
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;