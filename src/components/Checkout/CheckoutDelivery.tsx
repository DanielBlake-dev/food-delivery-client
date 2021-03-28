import React from 'react';
import { Select } from '../Select/Select';
import { Input } from '../Input/Input';

const options = [
  { value: 'Приморский', title: 'Приморский' },
  { value: 'Киевский', title: 'Киевский' },
  { value: 'Суворовский', title: 'Суворовский' },
  { value: 'Малиновский', title: 'Малиновский' },
];

export const CheckoutDelivery = () => {
  return (
    <div className="checkout-delivery">
      <h2 className="title">Доставка</h2>
      <Select
        name="adress.district"
        label="Район"
        placeholder="Выберете район"
        options={options}
      />
      <Input
        name="adress.street"
        placeholder="Введите название улицы"
        label="Улица: "
      />
      <div className="checkout-delivery__row">
        <Input
          name="adress.numberApartment"
          placeholder="Номер дома"
          label="Дом:"
        />
        <Input
          name="adress.numberHouse"
          placeholder="Номер квартиры"
          label="Квартира: "
        />
      </div>
      <button className="button button_filled" type="submit">
        Отправить
      </button>
    </div>
  );
};
