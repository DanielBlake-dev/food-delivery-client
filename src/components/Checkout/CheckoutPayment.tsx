import React from 'react';

import { CheckoutPaymentTabs } from './CheckoutPaymentTabs';
import { CheckoutDelivery } from './CheckoutDelivery';

export const CheckoutPayment = () => {
  return (
    <div className="checkout-payment">
      <div className="checkout-payment__info">
        <CheckoutPaymentTabs />
        <CheckoutDelivery />
      </div>
    </div>
  );
};
