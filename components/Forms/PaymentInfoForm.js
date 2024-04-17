import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function PaymentInfoForm() {
  const handleSubmit = () => {};
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
              name="firstName"
              required
              fullWidth
              id="customerName"
              label="Tip Amount"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Payment Type</InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Order Type"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained"> Close Order </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default PaymentInfoForm;
