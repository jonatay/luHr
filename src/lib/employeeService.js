/**
 * Created by Jono on 17 02 21.
 */

const baseUrl = 'http://localhost:5000/graphql';

export const loadEmployees = () => {
  return fetch(baseUrl)
    .then(res => res.json());
}