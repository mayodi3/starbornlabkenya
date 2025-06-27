export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  author?: string;
  readTime?: string;
  content?: string;
  tags?: string[];
}

export interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
    search?: string;
  }>;
}

export interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}
