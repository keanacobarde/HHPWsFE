import React from 'react';
import { useRouter } from 'next/router';
import AddItemToOrderForm from '../../components/Forms/AddItemForm';

function AddItems() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <AddItemToOrderForm orderId={parseInt(id, 10)} />
  );
}

export default AddItems;
