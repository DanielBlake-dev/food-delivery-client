import React, { useState } from "react";

import { Link, Route, useHistory } from "react-router-dom";

import { Dish as DishT } from "../../stores/Checkout";

import { DishPopup } from "./DishPopup";

import DishImage from "../../assets/dish.png";
import usePath from "../../hooks/usePath";

type DishProps = {
  dish: DishT;
};

export const Dish: React.FC<DishProps> = ({ dish }) => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => setVisible(true);
  const hadleClose = () => setVisible(false);

  return (
    <>
      <div className='dish'>
        <div className='dish__image'>
          <img src={DishImage} alt={dish.name} />
        </div>
        <div className='dish__info'>
          <h3 className='dish__info-name'>{dish.name}</h3>
          <p className='dish__info-ingridients'>{dish.ingredients.join(" ")}</p>
        </div>
        <div className='dish__footer'>
          <h4 className='dish__price'>{dish.price} &#8372;</h4>
          <button className='button button_outlined' onClick={handleOpen}>
            Выбрать
          </button>
        </div>
      </div>
      <DishPopup dish={dish} visible={visible} onClose={hadleClose} />
    </>
  );
};
