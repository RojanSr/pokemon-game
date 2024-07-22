export interface GlobalResponseNews<T> {
  status: string;
  totalResults: number;
  articles: T;
}

export interface ArticleDetails {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
