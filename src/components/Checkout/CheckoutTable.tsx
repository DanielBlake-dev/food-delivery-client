import { useFormikContext } from "formik";
import { observer } from "mobx-react";
import React from "react";

import DishImage from "../../assets/dish.png";
import { useCheckoutStore } from "../../hooks/useCheckoutStore";

import { Dish, SelectedDish } from "../../stores/Checkout";
import { Count } from "../Count/Count";

export const CheckoutTable = observer(() => {
  const checkoutStore = useCheckoutStore();

  const handleRemove = (dish: Dish) => {
    checkoutStore?.removeDish(dish);
  };

  const handleCountChange = (selectedDish: SelectedDish) => (
    type: "add" | "sub"
  ) => {
    if (type === "add") {
      checkoutStore?.changeCount(selectedDish, selectedDish.count + 1);
    } else {
      checkoutStore?.changeCount(selectedDish, selectedDish.count - 1);
    }
  };

  return (
    <table className='checkout__table'>
      <thead className='checkout__head'>
        <tr>
          <th>Блюдо</th>
          <th>Кол-во</th>
          <th>Стоимость</th>
          <th>Всего</th>
          <th></th>
        </tr>
      </thead>
      <tbody className='checkout__body'>
        {checkoutStore?.selectedDishes.map(
          ({ dish, comment, count, total }) => (
            <tr>
              <td>
                <div className='checkout-dish'>
                  <img
                    className='checkout-dish__image'
                    src={dish.image || DishImage}
                    alt=''
                  />
                  <div className='checkout-dish__info'>
                    <h3 className='name'>{dish.name}</h3>
                    <p className='comment'>{comment || "Без изменений"}</p>
                  </div>
                </div>
              </td>
              <td>
                <Count
                  count={count}
                  onChange={handleCountChange({ dish, comment, count, total })}
                />
              </td>
              <td>
                <p className='checkout-price'>{dish.price} &#8372;</p>
              </td>
              <td>
                <p className='checkout-total'>{dish.price * count} &#8372;</p>
              </td>
              <td>
                <div
                  className='checkout-remove'
                  onClick={() => handleRemove(dish)}></div>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
});
