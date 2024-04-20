import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getPaymentInfoByOrderId = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order/payment/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => resolve(resp.json()))
    .catch(reject);
});

const editOrderPaymentInfo = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/paymentinfo/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(resolve)
    .catch(reject);
});

const getRevenue = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => resolve(resp.json()))
    .catch(reject);
});

export {
  getPaymentInfoByOrderId,
  editOrderPaymentInfo,
  getRevenue,
};
