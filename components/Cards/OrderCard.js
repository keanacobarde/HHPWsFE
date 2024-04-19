import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router';
import {
  IconButton,
  Card, Grid, CardContent, Typography, Button,
} from '@mui/material';
import { deleteOrder } from '../../API/OrderData';

function OrderCard({ orderObj, onUpdate }) {
  const router = useRouter();
  const deleteThisOrder = () => {
    if (window.confirm(`Delete order ${orderObj.id}?`)) {
      deleteOrder(orderObj.id).then(() => onUpdate());
    }
  };

  return (
    <Grid item xs={8} sm={6}>
      <Card
        sx={{ display: 'flex', width: '100%' }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {orderObj.name}
          </Typography>
          {orderObj.status ? <Typography>Open</Typography> : <Typography>Closed</Typography>}
          <Typography>
            {orderObj.phone}
          </Typography>
          <Typography>
            {orderObj.email}
          </Typography>
          <Typography>
            {orderObj.orderType}
          </Typography>
          <IconButton aria-label="delete" onClick={deleteThisOrder}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit" onClick={() => router.push(`/orders/edit/${orderObj.id}`)}>
            <EditIcon />
          </IconButton>
          <Button size="small" onClick={() => router.push(`/orders/${orderObj.id}`)}>View Details</Button>
        </CardContent>
      </Card>
    </Grid>
  );
}

OrderCard.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    orderType: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default OrderCard;
