import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
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

  console.warn(id, order, items);

  return (
    <Stack
      sx={{ mt: 4 }}
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
        gridTemplateRows="repeat(8, 1fr)"
        gap="0.5rem"
        alignItems="start"
      >
        {items?.map((item) => <ItemCard itemObj={item} />)}
      </Box>
    </Stack>
  );
}

export default OrderDetails;
