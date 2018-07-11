import axios from 'axios';

//  SHould be fetched from a configuration
const API_KEY: string = 'f79b0a0b568b4e4f9f858ed7590dd1d9';
const API_URL: string = 'https://newsapi.org/v2/everything';

/**
 * URL query parameters
 * @param parameters URL parameters { key1: value1, key2: value2 }
 */
const generateUrlQueryParameters = (parameters: {}): string => {
  const allParameters = { apiKey: API_KEY, ...parameters };
  return Object.keys(allParameters)
    .map(parameterKey => `${parameterKey}=${allParameters[parameterKey] || '""'}`)
    .join('&');
};

/**
 * get resources from URL
 * @param url API endpoint
 */
export const fetchNews = (parameters: {}): any => {
  const urlWithParameters = generateUrlQueryParameters(parameters);
  // this is a promise, not directly the response
  return axios.get(`${API_URL}?${urlWithParameters}`);
};
