import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import {
  IconButton,
  Card, Grid, CardActions, CardContent, Typography, Button,
} from '@mui/material';

function OrderCard({ orderObj }) {
  const router = useRouter();
  const deleteThisOrder = () => {};

  return (
    <Grid item xs={8} sm={6}>
      <Card
        sx={{ display: 'flex', width: '100%' }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {orderObj.name}
          </Typography>
          <Typography>
            {orderObj.status}
          </Typography>
          <Typography>
            {orderObj.phone}
          </Typography>
          <Typography>
            {orderObj.email}
          </Typography>
          <Typography>
            {orderObj.orderType}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="delete" onClick={deleteThisOrder}>
            <DeleteIcon />
          </IconButton>
          <Button size="small" onClick={() => router.push(`/orders/${orderObj.id}}`)}>View Details</Button>
        </CardActions>
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
};

export default OrderCard;
