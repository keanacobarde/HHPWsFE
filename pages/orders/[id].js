import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAllOrdersById } from '../../API/OrderData';

function OrderDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState([]);
  const getTheOrder = () => {
    getAllOrdersById(id).then(setOrder);
  };

  useEffect(() => {
    getTheOrder();
  }, []);

  console.warn(id, order);

  return (
    <div />
  );
}

export default OrderDetails;
