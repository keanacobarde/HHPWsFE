import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PaymentInfoForm from '../../components/Forms/PaymentInfoForm';
import { getPaymentInfoByOrderId } from '../../API/PaymentInfoData';

function PaymentInfo() {
  const [paymentInfo, setPaymentInfo] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const getThePaymentInfo = () => {
    getPaymentInfoByOrderId(id).then(setPaymentInfo);
  };

  useEffect(() => {
    getThePaymentInfo();
  }, []);

  return (
    <PaymentInfoForm paymentInfoObj={{ ...paymentInfo, orderId: parseInt(id, 10) }} />
  );
}

export default PaymentInfo;
