'use client';

import { useState, useEffect, useCallback } from 'react';

interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image?: string;
  author: string;
  published: boolean;
  tags?: string[];
}

interface BlogEditorProps {
  post?: BlogPost;
  onSave?: (post: BlogPost) => void;
  onCancel?: () => void;
}

export default function BlogEditor({ post, onSave, onCancel }: BlogEditorProps) {
  const [formData, setFormData] = useState<BlogPost>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured_image: '',
    author: '',
    published: false,
    tags: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (post) {
      setFormData(post);
    }
  }, [post]);

  const generateSlug = useCallback((title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }, []);

  const handleTitleChange = useCallback((title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  }, [generateSlug]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setErrorMessage('');

      try {
        const url = post ? `/api/blog/${post.slug}` : '/api/blog';
        const method = post ? 'PUT' : 'POST';

        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json() as BlogPost & { error?: string };

        if (response.ok) {
          setFormData({
            title: '',
            slug: '',
            excerpt: '',
            content: '',
            featured_image: '',
            author: '',
            published: false,
            tags: []
          });
          if (onSave) {
            onSave(result);
          }
        } else {
          setErrorMessage(result.error ?? 'Failed to save blog post');
        }
      } catch {
        setErrorMessage('Network error. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, onSave, post]
  );

  const handleTagChange = useCallback((tags: string) => {
    const tagArray = tags.split(',').map(tag => tag.trim()).filter(Boolean);
    setFormData((prev) => ({ ...prev, tags: tagArray }));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-charcoal rounded-lg">
      <h2 className="text-2xl font-display text-off-white mb-6">
        {post ? 'Edit Blog Post' : 'Create New Blog Post'}
      </h2>

      {errorMessage && (
        <div className="mb-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-off-white mb-2">
              Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => {
                handleTitleChange(e.target.value);
              }}
              required
              className="w-full px-4 py-3 bg-[#232325] border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-neon-accent transition-colors"
              placeholder="Enter blog post title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-off-white mb-2">
              Slug *
            </label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, slug: e.target.value }));
              }}
              required
              className="w-full px-4 py-3 bg-[#232325] border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-neon-accent transition-colors"
              placeholder="blog-post-slug"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-off-white mb-2">
            Excerpt *
          </label>
          <textarea
            value={formData.excerpt}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, excerpt: e.target.value }));
            }}
            required
            rows={3}
            className="w-full px-4 py-3 bg-[#232325] border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-neon-accent transition-colors resize-none"
            placeholder="Brief description of the blog post..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-off-white mb-2">
            Content *
          </label>
          <textarea
            value={formData.content}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, content: e.target.value }));
            }}
            required
            rows={12}
            className="w-full px-4 py-3 bg-[#232325] border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-neon-accent transition-colors resize-none"
            placeholder="Write your blog post content here... (Markdown supported)"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-off-white mb-2">
              Featured Image URL
            </label>
            <input
              type="url"
              value={formData.featured_image ?? ''}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, featured_image: e.target.value }));
              }}
              className="w-full px-4 py-3 bg-[#232325] border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-neon-accent transition-colors"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-off-white mb-2">
              Author *
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, author: e.target.value }));
              }}
              required
              className="w-full px-4 py-3 bg-[#232325] border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-neon-accent transition-colors"
              placeholder="Author name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-off-white mb-2">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            value={formData.tags?.join(', ') ?? ''}
            onChange={(e) => {
              handleTagChange(e.target.value);
            }}
            className="w-full px-4 py-3 bg-[#232325] border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-neon-accent transition-colors"
            placeholder="animation, design, tips"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="published"
            checked={formData.published}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, published: e.target.checked }));
            }}
            className="accent-neon-accent w-5 h-5 focus:ring-2 focus:ring-neon-accent"
          />
          <label htmlFor="published" className="text-off-white/80 text-sm">
            Publish immediately
          </label>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-neon-accent text-charcoal font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Saving...' : (post ? 'Update Post' : 'Create Post')}
          </button>
          
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 bg-[#232325] text-off-white font-semibold rounded-lg border border-off-white/20 transition-all duration-300 hover:bg-[#2a2a2d]"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
} 