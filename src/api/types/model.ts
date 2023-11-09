export interface Result {
  id: string;
  author: string | null;
  content: string | null;
  description: string | null;
  imageUrl: string | null;
  publishedAt: string;
  section: string | null;
  sourceName: string;
  sourceUrl: string | null;
  title: string;
}
