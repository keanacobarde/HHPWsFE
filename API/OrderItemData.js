import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const deleteItemFromOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order/deleteitem`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const addItemToOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order/additem`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export { deleteItemFromOrder, addItemToOrder };
