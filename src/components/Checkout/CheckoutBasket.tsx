import React from 'react';

import { CheckoutOrder } from './CheckoutOrder';
import { CheckoutTable } from './CheckoutTable';

export const CheckoutBasket = () => {
  return (
    <div className="checkout-order">
      <CheckoutTable />
      <CheckoutOrder />
    </div>
  );
};
