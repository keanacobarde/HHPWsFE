import React, { useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import { getRevenue } from '../API/PaymentInfoData';

function Revenue() {
  const [rev, setRev] = useState([]);

  const getTheRevenue = () => {
    getRevenue().then(setRev);
  };

  useEffect(() => {
    getTheRevenue();
  }, []);

  console.warn(rev);

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignContent="center"
      spacing={2}
    >
      <Typography
        variant="h2"
      > Revenue
      </Typography>
      <Typography
        variant="h3"
      > Total Revenue: ${rev.totalRevenue}
      </Typography>
      <Typography
        variant="h5"
      > Total Number of Tips: {rev.tipTotal}
      </Typography>
      <Typography
        variant="h5"
      > Total Number of Dine-in: {rev.dineInTotal}
      </Typography>
      <Typography
        variant="h5"
      > Total Number of Pickup: {rev.pickupTotal}
      </Typography>
      <Typography
        variant="h5"
      > Total Number of Delivery: {rev.deliveryTotal}
      </Typography>
      <Typography
        variant="h4"
      >
        Payment Types
      </Typography>
      <Typography
        variant="h5"
      > Cash: {rev.cashTotal}
      </Typography>
      <Typography
        variant="h5"
      > Credit: {rev.creditTotal}
      </Typography>
      <Typography
        variant="h5"
      > Debit: {rev.debitTotal}
      </Typography>
    </Stack>
  );
}

export default Revenue;
