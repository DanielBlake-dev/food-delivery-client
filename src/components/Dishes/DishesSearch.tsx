import React, { useState } from 'react';

import Search from '../../assets/icons/search.svg';

export const DishesSearch: React.FC = () => {
  const [value, setValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    setValue(target.value);
  };
  return (
    <div className="dishes-search">
      <img src={Search} className="dishes-search__icon" alt="Search" />
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Название, кухня или блюдо"
        className="dishes-search__input"
      />
    </div>
  );
};
