import React, { useState } from 'react';

import classNames from 'classnames';

import Filters from '../../assets/icons/filter.svg';

const categories = [
  'Бургеры',
  'Горячие блюда',
  'Гарниры',
  'Бургеры',
  'Горячие блюда',
  'Гарниры',
];

export const DishesFilters: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handleUnselect = (category: string) => {
    setSelected(selected.filter((el) => el !== category));
  };

  const handleSelect = (category: string) => {
    setSelected([...selected, category]);
    setVisible(false);
  };

  return (
    <div className="dishes__filters">
      <div className="dishes__filters-select">
        <button
          onClick={toggleVisible}
          className="dishes__filters-select__button"
        >
          <img src={Filters} alt="Add Filters" />
          Добавить фильтр
        </button>
        <div
          className={classNames('dishes__filters-select__list', { visible })}
        >
          {categories.map((category) => (
            <div
              onClick={() => handleSelect(category)}
              className="dishes__filters-select__list-item"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="dishes__filters-selected">
        {selected.map((item) => (
          <div
            onClick={() => handleUnselect(item)}
            className="dishes__filters-selected__item"
          >
            {item}
            <div className="dishes__filters-selected__item-remove"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
