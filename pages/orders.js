import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { getAllOrders } from '../API/OrderData';
import OrderCard from '../components/Cards/OrderCard';

function Orders() {
  const [orders, setOrders] = useState([]);

  const getAllTheOrders = () => {
    getAllOrders().then(setOrders);
  };

  useEffect(() => {
    getAllTheOrders();
  }, []);

  return (
    <Box
      display="grid"
      sx={{ width: '100%' }}
      gridTemplateColumns="repeat(2, 1fr)"
      gridTemplateRows="repeat(8, 1fr)"
      gap="0.5rem"
      alignItems="start"
    >
      {orders.map((order) => <OrderCard orderObj={order} onUpdate={getAllTheOrders} />)}
    </Box>
  );
}

export default Orders;
