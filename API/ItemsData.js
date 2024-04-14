import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllItems = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => resolve(resp.json()))
    .catch(reject);
});

export default {
  getAllItems,
};
