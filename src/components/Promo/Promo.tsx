import React from 'react';

import Illustration from '../../assets/illustration.png';

import Burger from '../../assets/icons/burger.svg';
import Curry from '../../assets/icons/curry.svg';
import Grill from '../../assets/icons/grill.svg';
import HotDog from '../../assets/icons/hot-dog.svg';
import Sandwich from '../../assets/icons/sandwich.svg';
import Shrimp from '../../assets/icons/shrimp.svg';

const categories = [
  { name: 'Бургеры', icon: Burger },
  { name: 'Завтраки', icon: Sandwich },
  { name: 'Гриль', icon: Grill },
  { name: 'Хот-доги', icon: HotDog },
  { name: 'Обеды', icon: Curry },
  { name: 'Морепродукты', icon: Shrimp },
];

export const Promo = () => {
  return (
    <div className="promo">
      <div className="promo__row">
        <div className="promo__text">
          <h1>Вкуснота - номер один в сфере доставки еды</h1>
          <p>
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться
          </p>
          <button className="button button_filled">Смотреть меню</button>
        </div>
        <div className="promo__image">
          <img src={Illustration} alt="Illustration" />
        </div>
      </div>
      <div className="promo__categories">
        {categories.map((category, index) => (
          <div key={`category-${index}`} className="promo__categories-item">
            <img src={category.icon} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <div className="promo__devider"></div>
    </div>
  );
};
