import React, { useState, useEffect } from 'react';
import {
  Box, Button, Stack, Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { getAllOrdersById, getItemsFromOrderId } from '../../API/OrderData';
import ItemCard from '../../components/Cards/ItemCard';

function OrderDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState([]);
  const [items, setItems] = useState([]);

  const getTheOrder = () => {
    getAllOrdersById(id).then(setOrder);
  };

  const getAllTheOrderItems = () => {
    getItemsFromOrderId(id).then(setItems);
  };

  useEffect(() => {
    getTheOrder();
    getAllTheOrderItems();
  }, []);

  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="center"
    >
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Total: ${order.subtotal}
      </Typography>
      <Box
        display="grid"
        sx={{ width: '100%' }}
        gridTemplateColumns="repeat(2, 1fr)"
        gridTemplateRows="repeat(2, 1fr)"
        gap="0.5rem"
        alignItems="start"
      >
        {items[0]?.items?.map((item) => <ItemCard itemObj={item} context="orderdetails" orderId={parseInt(id, 10)} onUpdate={getAllTheOrderItems} />)}
        <footer />
        <Button variant="contained" onClick={() => router.push(`/Items/${id}`)}>Add Item</Button>
        <Button variant="contained" onClick={() => router.push(`/paymentInfo/${id}`)}> Go to Payment </Button>
      </Box>
    </Stack>
  );
}

export default OrderDetails;
