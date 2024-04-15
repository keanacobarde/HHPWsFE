import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';
import {
  IconButton,
  Card, Grid, CardContent, Typography,
} from '@mui/material';
import { deleteItemFromOrder, addItemToOrder } from '../../API/OrderItemData';

function ItemCard({
  itemObj, context, orderId, onUpdate,
}) {
  const router = useRouter();

  const deleteThisItem = () => {
    if (window.confirm(`Delete ${itemObj.name}?`)) {
      const payload = {
        orderId,
        orderItemId: itemObj.orderItemId,
      };
      deleteItemFromOrder(payload).then(() => onUpdate());
    }
  };

  const addItemToThisOrder = () => {
    const payload = {
      orderId,
      itemId: itemObj.id,
    };
    addItemToOrder(payload).then(() => router.push(`/orders/${orderId}`));
  };

  return (
    <Grid item xs={8} sm={6}>
      <Card
        sx={{ display: 'flex', width: '25rem' }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {itemObj.name}
          </Typography>
          <Typography>
            ${itemObj.price}
          </Typography>
          {context !== 'orderdetails' ? (
            <IconButton aria-label="delete" onClick={addItemToThisOrder}>
              <AddIcon />
            </IconButton>
          ) : (
            <IconButton aria-label="delete" onClick={deleteThisItem}>
              <DeleteIcon />
            </IconButton>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}

ItemCard.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    orderItemId: PropTypes.number,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  context: PropTypes.string.isRequired,
  orderId: PropTypes.number.isRequired,
  onUpdate: PropTypes.func,
};

ItemCard.defaultProps = {
  onUpdate: () => {},
};

export default ItemCard;
