import { IResult } from './result';
import { IAppState } from './app';
import { ISearch } from './search';

// App state
export interface IAppState {
  readonly results: IResult;
  readonly search: ISearch;
  readonly error?: string;
  onSearch: (search: ISearch) => void;
  onUpdateSearch: (search: ISearch) => void;
}

// default values
export const initialState: IAppState = {
  results: {
    articles: [],
    count: 0,
    loading: false,
  },
  search: {
    q: 'all',
    from: new Date().toISOString().substring(0, 10),
    to: new Date().toISOString().substring(0, 10),
    language: 'en',
    page: 1,
    sortby: 'publishedAt',
    onFilterChange: () => {},
    onSearch: () => {},
  },
  onSearch: () => {},
  onUpdateSearch: () => {},
};
