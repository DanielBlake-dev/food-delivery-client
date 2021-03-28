import React from "react";

export const CheckoutFinish = () => {
  return (
    <div className='checkout-finish'>
      <div className='checkout-finish__item'>
        <svg
          width='200'
          height='200'
          viewBox='0 0 200 200'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <circle cx='100' cy='100' r='100' fill='#FA5421' />
          <rect
            x='64.8242'
            y='103.586'
            width='2.19069'
            height='36.5115'
            rx='1.09534'
            transform='rotate(-45 64.8242 103.586)'
            fill='white'
          />
          <rect
            x='144.94'
            y='71'
            width='3'
            height='80'
            rx='1.5'
            transform='rotate(45 144.94 71)'
            fill='white'
          />
        </svg>
        <div className='checkout-finish__item-text'>
          <h2 className='title'>Заказ успешно оформлен</h2>
          <p className='description'>Ожидайте доставки в течении 30 минут</p>
        </div>
      </div>
    </div>
  );
};
