export interface Post {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  img: string;
  tags: string[];
  clan?: string;
}