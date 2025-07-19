import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/database';

interface BlogPostUpdatePayload {
  title?: string;
  excerpt?: string;
  content?: string;
  featured_image?: string;
  published?: boolean;
  tags?: string[];
}

// GET - Get blog post by slug
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const post = await db.getBlogPostBySlug(slug);
    
    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(post);
  } catch (error) {
    console.error('Blog post fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}

// PUT - Update blog post
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json() as BlogPostUpdatePayload;
    const { title, excerpt, content, featured_image, published, tags } = body;

    // First get the post to get its ID
    const existingPost = await db.getBlogPostBySlug(slug);
    if (!existingPost?.id) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    const updatedPost = await db.updateBlogPost(existingPost.id, {
      title,
      excerpt,
      content,
      featured_image,
      published,
      published_at: published ? new Date().toISOString() : undefined,
      tags,
      updated_at: new Date().toISOString()
    });

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error('Blog post update error:', error);
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

// DELETE - Delete blog post
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ slug:string }> }
) {
  try {
    const { slug } = await params;
    // First get the post to get its ID
    const existingPost = await db.getBlogPostBySlug(slug);
    if (!existingPost?.id) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    await db.deleteBlogPost(existingPost.id);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Blog post deletion error:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
} 