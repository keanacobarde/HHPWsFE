import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const initialState = {
  tip: '',
  paymentType: '',
};

const paymentTypes = ['Credit Card', 'Debit', 'Cash'];

function PaymentInfoForm({ paymentInfoObj }) {
  const [formInput, setFormInput] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {};

  useEffect(() => {
    if (paymentInfoObj !== initialState) {
      setFormInput(paymentInfoObj);
    }
  }, [paymentInfoObj]);

  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Payment Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="tip"
              required
              fullWidth
              id="customerName"
              label="Tip Amount"
              autoFocus
              value={formInput.tip}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              id="name"
              type="text"
              name="paymentType"
              fullWidth
              variant="standard"
              label="Payment Type"
              value={formInput.paymentType}
              onChange={handleChange}
              select
            >
              {paymentTypes.map((pt) => <MenuItem key={pt} value={pt}> {pt} </MenuItem>)}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained"> Close Order </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

PaymentInfoForm.propTypes = {
  paymentInfoObj: PropTypes.shape({
    tip: PropTypes.number,
    paymentType: PropTypes.string,
  }),
};

PaymentInfoForm.defaultProps = {
  paymentInfoObj: initialState,
};

export default PaymentInfoForm;
