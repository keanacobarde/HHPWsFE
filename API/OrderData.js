import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const createOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getAllOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => resolve(resp.json()))
    .catch(reject);
});

const getAllOrdersById = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => resolve(resp.json()))
    .catch(reject);
});

const getItemsFromOrderId = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${id}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => resolve(resp.json()))
    .catch(reject);
});

const orderToEditInfo = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order/edit/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => resolve(resp.json()))
    .catch(reject);
});

const deleteOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => resolve(resp.json()))
    .catch(reject);
});

const editOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(resolve)
    .catch(reject);
});

export {
  getAllOrders,
  getAllOrdersById,
  getItemsFromOrderId,
  orderToEditInfo,
  deleteOrder,
  createOrder,
  editOrder,
};
