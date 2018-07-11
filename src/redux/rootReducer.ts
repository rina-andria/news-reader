import { IAppState, initialState } from './../models/app';
import { SEARCH_SUCCEED, SEARCH_FAILED, SEARCH_PENDING, UPDATE_SEARCH } from './actions';

const rootReducer = (state: IAppState = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_PENDING: {
      return {
        ...state,
        results: {
          ...state.results,
          loading: true,
        },
      };
    }

    case SEARCH_FAILED: {
      return {
        ...state,
        error: action.payload,
        results: {
          ...state.results,
          loading: true,
        },
      };
    }

    case SEARCH_SUCCEED:
      const { results, search } = action.payload;
      return {
        ...state,
        results: {
          loading: false,
          articles: results.articles,
          count: results.count,
        },
        search,
      };

    case UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    default:
      break;
  }
  return state;
};

export default rootReducer;
