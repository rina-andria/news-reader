import { ISearch } from '../models/search';
import { Dispatch } from 'redux';
import { fetchNews } from '../services/api';

export const SEARCH_SUCCEED = '@@app/SEARCH_SUCCEED';
export const SEARCH_FAILED = '@@app/SEARCH_FAILED';
export const SEARCH_PENDING = '@@app/SEARCH_PENDING';
export const UPDATE_SEARCH = '@@app/UPDATE_SEARCH';

export const filterNews = (search: ISearch) => {
  const { onFilterChange, onSearch, ...rest } = search;
  return async (dispatch: Dispatch) => {
    dispatch({
      type: SEARCH_PENDING,
    });

    return fetchNews(rest)
      .then((response: any) => {
        return dispatch({
          type: SEARCH_SUCCEED,
          payload: {
            results: {
              articles: response.data.articles,
              count: response.data.totalResults,
            },
            search,
          },
        });
      })
      .catch((err: any) => {
        dispatch({
          type: SEARCH_FAILED,
          payload: err,
        });
      });
  };
};

export const updateSearch = (search: ISearch) => {
  return {
    type: UPDATE_SEARCH,
    payload: search,
  };
};
