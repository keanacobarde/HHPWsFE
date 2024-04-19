import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { createOrder } from '../../API/OrderData';

const initialState = {
  name: '',
  phone: '',
  email: '',
  orderType: '',
};

const orderTypes = ['Dine-in', 'Pickup', 'Delivery'];

function OrderForm({ orderObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder(formInput).then(() => router.push('/'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (orderObj !== initialState) {
      setFormInput(orderObj);
    }
  }, [orderObj]);

  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          CREATE AN ORDER
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="name"
              required
              fullWidth
              id="customerName"
              label="Customer Name"
              autoFocus
              value={formInput.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="phone"
              label="Customer Phone"
              name="phone"
              autoComplete="family-name"
              value={formInput.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formInput.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              id="name"
              type="text"
              name="orderType"
              fullWidth
              variant="standard"
              label="Order Type"
              value={formInput.orderType}
              onChange={handleChange}
              select
            >
              {orderTypes.map((pt) => <MenuItem key={pt} value={pt}> {pt} </MenuItem>)}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit"> Create Order </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

OrderForm.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    orderType: PropTypes.string,
  }),
};

OrderForm.defaultProps = {
  orderObj: initialState,
};

export default OrderForm;
