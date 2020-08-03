import { makeVar, InMemoryCache } from '@apollo/client';

const activeBusiness = makeVar(localStorage.getItem('activeBusiness'));

export const setActiveBusiness = newVal => {
  if (newVal === undefined) return activeBusiness();

  localStorage.setItem('activeBusiness', newVal);
  return activeBusiness(newVal);
};

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
