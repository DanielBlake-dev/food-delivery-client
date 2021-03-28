import React, { useState } from "react";

import classNames from "classnames";

import { Dish, SelectedDish } from "../../stores/Checkout";
import { Count } from "../Count/Count";
import { observer } from "mobx-react";
import { useCheckoutStore } from "../../hooks/useCheckoutStore";

import DishImage from "../../assets/dish.png";

type DishPopupProps = {
  visible: boolean;
  onClose: () => void;
  dish: Dish;
};

export const DishPopup: React.FC<DishPopupProps> = observer(
  ({ visible, onClose, dish }) => {
    const checkoutStore = useCheckoutStore();

    const [comment, setComment] = useState("");
    const [count, setCount] = useState(1);

    const handleCountChange = (type: "add" | "sub") => {
      if (type === "add") {
        setCount((count) => count + 1);
      } else {
        setCount((count) => (count > 1 ? count - 1 : 1));
      }
    };

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setComment(value);
    };

    const addToCard = (dish: Dish) => {
      const total = dish.price * count;
      const selectedDish: SelectedDish = {
        dish,
        comment,
        count,
        total,
      };
      checkoutStore?.selectDish(selectedDish);
      checkoutStore?.setTotal(checkoutStore.getTotal() + total);
      onClose();
    };

    return (
      <div className={classNames("popup-container", { visible })}>
        <div className='dish-popup'>
          <div className='dish-popup__close' onClick={onClose}></div>
          <div className='dish-popup__left'>
            <h2 className='dish-popup__name'>{dish.name}</h2>
            <p className='dish-popup__ingredients'>
              {dish.ingredients.join(" ")}
            </p>
            <div className='dish-popup__comment'>
              <h3 className='dish-popup__comment-title'>Коментарий к заказу</h3>
              <textarea
                className='dish-popup__comment-textarea'
                name='comment'
                id='js-comment'
                value={comment}
                onChange={handleCommentChange}
                placeholder='Ваши пожелания к блюду'></textarea>
            </div>
          </div>
          <div className='dish-popup__right'>
            <img
              src={DishImage}
              className='dish-popup__image'
              alt='Dish Image'
            />
            <div className='dish-popup__price'>
              <span className='dish-popup__price-title'>Стоимость</span>
              <span className='dish-popup__price-value'>
                {dish.price} &#8372;
              </span>
            </div>
            <div className='dish-popup__delivery'>
              <p className='dish-popup__delivery-text'>
                Стоимость доставки: <span className='value'>40 &#8372;</span>
              </p>
            </div>
            <div className='dish-popup__action'>
              <div className='dish-popup__count'>
                <p className='dish-popup__count-title'>Кол-во:</p>
                <Count onChange={handleCountChange} count={count} />
              </div>
              <button
                onClick={() => addToCard(dish)}
                className='button button_filled'>
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
