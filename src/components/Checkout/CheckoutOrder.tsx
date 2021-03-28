import React from "react";
import { useFormikContext } from "formik";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { useHistory, useLocation } from "react-router-dom";
import { useCheckoutStore } from "../../hooks/useCheckoutStore";

export const CheckoutOrder = observer(() => {
  const location = useLocation();
  const history = useHistory();
  const checkoutStore = useCheckoutStore();
  const { setFieldValue } = useFormikContext();

  const onClick = () => {
    setFieldValue("dishes", toJS(checkoutStore?.selectedDishes) || []);
    setFieldValue("total", checkoutStore?.total || 0);
    history.push({ ...location, state: { activeStep: 1 } });
  };

  return (
    <div className='checkout__order'>
      <h3 className='headline'>Ваш заказ</h3>
      <div className='positions'>
        <p className='label'>Позиций в заказе: </p>
        <p className='value'>{checkoutStore?.selectedDishes.length || 0}</p>
      </div>
      <div className='delivery'>
        <p className='label'>Стоимость доставки: </p>
        <p className='value'>45 &#8372;</p>
      </div>
      <div className='total'>
        <p className='label'>Стоимость доставки: </p>
        <p className='value'>{checkoutStore?.getTotal()} &#8372;</p>
      </div>
      <div className='actions'>
        <button className='button button_filled' onClick={onClick}>
          Оформить заказ
        </button>
      </div>
    </div>
  );
});
