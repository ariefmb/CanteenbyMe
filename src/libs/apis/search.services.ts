import algoliasearch from 'algoliasearch';
import {
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_SEARCH_ONLY_API_KEY,
} from '../utils/config';

// Create the search client for a future use
export const algoliaClient = algoliasearch(
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_SEARCH_ONLY_API_KEY
);
