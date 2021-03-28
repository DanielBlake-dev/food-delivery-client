import React, { useState } from 'react';

import classNames from 'classnames';
import { Input } from '../Input/Input';

type Tab = {
  type: TabType;
  title: string;
  component: React.ComponentType;
};

type TabType = 'cash' | 'card';

const Cash = () => {
  return (
    <div className="checkout-cash">
      <Input name="cash" placeholder="Введите сумму" label="Нужна сдача с :" />
    </div>
  );
};

const Card = () => {
  return (
    <div className="checkout-card">
      <Input
        name="card.number"
        placeholder="Введите номер карты"
        label="Номер карты: "
      />
      <Input
        name="card.expDate"
        placeholder="ММ / ГГ"
        label="Срок действия: "
      />
      <Input name="card.cvv" placeholder="CVV" label="Код CVV: " />
    </div>
  );
};

const tabs: Tab[] = [
  {
    type: 'cash',
    title: 'Оплата наличными',
    component: Cash,
  },
  {
    type: 'card',
    title: 'Оплата картой',
    component: Card,
  },
];

export const CheckoutPaymentTabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  const toggleTab = (index: number) => {
    setActiveTab(tabs[index]);
  };

  return (
    <div className="checkout-tabs">
      <div className="checkout-tabs__buttons">
        {tabs &&
          tabs.map((tab, index) => (
            <div
              className={classNames('checkout-tabs__buttons-item', {
                active: activeTab.title === tab.title,
              })}
              onClick={() => toggleTab(index)}
            >
              {tab.title}
            </div>
          ))}
      </div>
      {<activeTab.component />}
    </div>
  );
};
