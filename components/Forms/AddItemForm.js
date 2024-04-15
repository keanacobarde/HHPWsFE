import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Stack, Typography,
} from '@mui/material';
import getAllItems from '../../API/ItemsData';
import ItemCard from '../Cards/ItemCard';

function AddItemToOrderForm({ orderId }) {
  const [items, setItems] = useState([]);

  const getAllTheItems = () => {
    getAllItems().then(setItems);
  };

  useEffect(() => {
    getAllTheItems();
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
        Add Items
      </Typography>
      <Box
        display="grid"
        sx={{ width: '100%' }}
        gridTemplateColumns="repeat(2, 1fr)"
        gridTemplateRows="repeat(2, 1fr)"
        gap="0.5rem"
        alignItems="start"
      >
        {items?.map((item) => <ItemCard itemObj={item} context="additems" orderId={orderId} />)}
      </Box>
    </Stack>
  );
}

AddItemToOrderForm.propTypes = {
  orderId: PropTypes.number.isRequired,
};

export default AddItemToOrderForm;
