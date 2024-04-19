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

export default getPaymentInfoByOrderId;
