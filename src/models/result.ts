import { IArticle } from './article';

export interface IResult {
  readonly loading: boolean;
  readonly articles: IArticle[];
  readonly count: number;
}
