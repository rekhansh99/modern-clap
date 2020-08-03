import { makeVar, InMemoryCache } from '@apollo/client';

export const setActiveBusiness = makeVar('');

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        activeBusiness: {
          read() {
            return setActiveBusiness();
          }
        }
      }
    }
  }
});