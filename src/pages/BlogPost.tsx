import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft, Share2, Clock, MessageCircle, Send } from 'lucide-react';
import { blogsApiService, WordPressPost, WordPressComment, CommentSubmission } from '../services/blogsApiService';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [comments, setComments] = useState<WordPressComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [commentForm, setCommentForm] = useState({
    author_name: '',
    author_email: '',
    author_url: '',
    content: '',
    parent: 0
  });
  const [submittingComment, setSubmittingComment] = useState(false);
  const [commentSuccess, setCommentSuccess] = useState(false);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  useEffect(() => {
    if (post) {
      fetchComments(post.id);
    }
  }, [post]);

  const fetchPost = async (postSlug: string) => {
    try {
      setLoading(true);
      const postData = await blogsApiService.getPostBySlug(postSlug);
      setPost(postData);
      setError(null);
    } catch (err) {
      setError('Failed to fetch blog post');
      console.error('Error fetching post:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async (postId: number) => {
    try {
      setCommentsLoading(true);
      const response = await blogsApiService.getComments(postId, {
        orderby: 'date',
        order: 'asc',
        per_page: 100
      });
      setComments(response.comments);
    } catch (err) {
      console.error('Error fetching comments:', err);
    } finally {
      setCommentsLoading(false);
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post || !commentForm.author_name || !commentForm.author_email || !commentForm.content) {
      return;
    }

    try {
      setSubmittingComment(true);
      const commentData: CommentSubmission = {
        post: post.id,
        author_name: commentForm.author_name,
        author_email: commentForm.author_email,
        author_url: commentForm.author_url || undefined,
        content: commentForm.content,
        parent: commentForm.parent || undefined
      };

      await blogsApiService.submitComment(commentData);
      
      // Reset form
      setCommentForm({
        author_name: '',
        author_email: '',
        author_url: '',
        content: '',
        parent: 0
      });
      setReplyingTo(null);
      setCommentSuccess(true);
      
      // Refresh comments
      await fetchComments(post.id);
      
      // Hide success message after 3 seconds
      setTimeout(() => setCommentSuccess(false), 3000);
    } catch (err) {
      console.error('Error submitting comment:', err);
      alert('Failed to submit comment. Please try again.');
    } finally {
      setSubmittingComment(false);
    }
  };

  const handleReply = (commentId: number, authorName: string) => {
    setReplyingTo(commentId);
    setCommentForm(prev => ({
      ...prev,
      parent: commentId,
      content: `@${authorName} `
    }));
    
    // Scroll to comment form
    const commentFormElement = document.getElementById('comment-form');
    if (commentFormElement) {
      commentFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cancelReply = () => {
    setReplyingTo(null);
    setCommentForm(prev => ({
      ...prev,
      parent: 0,
      content: ''
    }));
  };

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: blogsApiService.stripHtml(post.title.rendered),
          text: blogsApiService.stripHtml(post.excerpt.rendered),
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const renderComments = (parentId: number = 0, level: number = 0) => {
    const filteredComments = comments.filter(comment => comment.parent === parentId);
    
    return filteredComments.map(comment => (
      <div key={comment.id} className={`${level > 0 ? 'ml-8 border-l-2 border-gray-200 pl-4' : ''} mb-6`}>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <img
                src={comment.author_avatar_urls['48'] || comment.author_avatar_urls['96'] || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'}
                alt={comment.author_name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{comment.author_name}</h4>
                <p className="text-sm text-gray-500">
                  {blogsApiService.formatDate(comment.date)}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleReply(comment.id, comment.author_name)}
              className="text-green-600 hover:text-green-700 text-sm font-medium"
            >
              Reply
            </button>
          </div>
          <div 
            className="text-gray-700 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
          />
        </div>
        
        {/* Render nested comments */}
        {level < 3 && renderComments(comment.id, level + 1)}
      </div>
    ));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h2>
          <p className="text-gray-600 mb-6">{error || 'The requested blog post could not be found.'}</p>
          <Link
            to="/blogs"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const featuredImage = blogsApiService.getFeaturedImage(post);
  const author = blogsApiService.getAuthor(post);
  const categories = blogsApiService.getCategories(post);
  const tags = blogsApiService.getTags(post);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/blogs"
            className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="mb-4">
              {categories.map(category => (
                <span key={category.id} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                  {category.name}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blogsApiService.stripHtml(post.title.rendered)}
          </h1>

          {/* Excerpt */}
          <div className="text-xl text-gray-600 mb-6 leading-relaxed prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
            {author && (
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>By {author.name}</span>
              </div>
            )}
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{blogsApiService.formatDate(post.date)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{blogsApiService.estimateReadingTime(post.content.rendered)} min read</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>{comments.length} comments</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center hover:text-green-600 transition-colors"
            >
              <Share2 className="w-4 h-4 mr-2" />
              <span>Share</span>
            </button>
          </div>

          {/* Featured Image */}
          {featuredImage && (
            <div className="mb-8">
              <img
                src={featuredImage}
                alt={blogsApiService.stripHtml(post.title.rendered)}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div 
            className="text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-8 pt-8 border-t border-gray-200">
            <div className="flex items-center flex-wrap gap-2">
              <Tag className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 font-medium mr-2">Tags:</span>
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Comments Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <MessageCircle className="w-6 h-6 mr-2" />
            Comments ({comments.length})
          </h3>

          {/* Comment Form */}
          <div id="comment-form" className="mb-8 bg-white p-6 rounded-lg shadow-sm">
            {replyingTo && (
              <div className="mb-4 p-3 bg-blue-50 rounded-lg flex items-center justify-between">
                <span className="text-blue-700">Replying to comment</span>
                <button
                  onClick={cancelReply}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Cancel
                </button>
              </div>
            )}
            
            {commentSuccess && (
              <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg">
                Comment submitted successfully! It may take a moment to appear.
              </div>
            )}

            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="author_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="author_name"
                    required
                    value={commentForm.author_name}
                    onChange={(e) => setCommentForm(prev => ({ ...prev, author_name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="author_email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="author_email"
                    required
                    value={commentForm.author_email}
                    onChange={(e) => setCommentForm(prev => ({ ...prev, author_email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="author_url" className="block text-sm font-medium text-gray-700 mb-1">
                  Website (optional)
                </label>
                <input
                  type="url"
                  id="author_url"
                  value={commentForm.author_url}
                  onChange={(e) => setCommentForm(prev => ({ ...prev, author_url: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Comment *
                </label>
                <textarea
                  id="content"
                  required
                  rows={4}
                  value={commentForm.content}
                  onChange={(e) => setCommentForm(prev => ({ ...prev, content: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Share your thoughts..."
                />
              </div>
              <button
                type="submit"
                disabled={submittingComment}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center"
              >
                {submittingComment ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Post Comment
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Comments List */}
          <div>
            {commentsLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600 mr-2"></div>
                <span className="text-gray-600">Loading comments...</span>
              </div>
            ) : comments.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No comments yet. Be the first to share your thoughts!
              </div>
            ) : (
              <div>
                {renderComments()}
              </div>
            )}
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link
            to="/blogs"
            className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Posts
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;