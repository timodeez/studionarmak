import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/database';

// GET - Get all published blog posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published') !== 'false'; // Default to published only
    
    const posts = await db.getBlogPosts(published);
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Blog posts fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

// POST - Create new blog post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, excerpt, content, featured_image, author, published, tags } = body;

    // Validate required fields
    if (!title || !slug || !excerpt || !content || !author) {
      return NextResponse.json(
        { error: 'Title, slug, excerpt, content, and author are required' },
        { status: 400 }
      );
    }

    const post = await db.createBlogPost({
      title,
      slug,
      excerpt,
      content,
      featured_image,
      author,
      published: published || false,
      published_at: published ? new Date().toISOString() : undefined,
      tags: tags || []
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Blog post creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
} 