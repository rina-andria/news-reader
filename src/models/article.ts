import { IArticle } from './article';

export interface IArticle {
  title: string;
  url: string;
  urlToImage: string;
  description: string;
  // by default we put the day of today
  publishedAt: string;
  author: string;
}
