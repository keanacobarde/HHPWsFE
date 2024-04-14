import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getAllItems from '../../API/ItemsData';

function AddItemToOrderForm({ orderId }) {
  const [items, setItems] = useState([]);

  const getAllTheItems = () => {
    getAllItems().then(setItems);
  };

  useEffect(() => {
    getAllTheItems();
  }, []);

  console.warn(orderId, items);
  return (
    <div>AddItemForm</div>
  );
}

AddItemToOrderForm.propTypes = {
  orderId: PropTypes.number.isRequired,
};

export default AddItemToOrderForm;
