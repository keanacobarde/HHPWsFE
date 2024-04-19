import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import OrderForm from '../../../components/Forms/OrderForm';
import { orderToEditInfo } from '../../../API/OrderData';

function EditOrder() {
  const [orderInfo, setOrderInfo] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    orderToEditInfo(id).then(setOrderInfo);
  }, []);

  return (
    <OrderForm orderObj={orderInfo} />
  );
}

export default EditOrder;
