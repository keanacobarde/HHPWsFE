import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import {
  IconButton,
  Card, Grid, CardContent, Typography,
} from '@mui/material';
import deleteItemFromOrder from '../../API/OrderItemData';

function ItemCard({
  itemObj, context, orderId, onUpdate,
}) {
  const deleteThisItem = () => {
    if (window.confirm(`Delete ${itemObj.name}?`)) {
      const payload = {
        orderId,
        orderItemId: itemObj.orderItemId,
      };
      deleteItemFromOrder(payload).then(() => onUpdate());
    }
  };

  const addItemToOrder = () => {};

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
            <IconButton aria-label="delete" onClick={addItemToOrder}>
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
    orderItemId: PropTypes.number.isRequired,
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
