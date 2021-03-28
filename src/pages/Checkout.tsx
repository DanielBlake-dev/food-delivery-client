import React from "react";

import { useHistory, useLocation } from "react-router-dom";

import { Form, Formik } from "formik";

import { CheckoutSteps } from "../components/Checkout/CheckoutSteps";

import { CheckoutBasket } from "../components/Checkout/CheckoutBasket";
import { CheckoutPayment } from "../components/Checkout/CheckoutPayment";
import { CheckoutFinish } from "../components/Checkout/CheckoutFinish";

import { Layout } from "../components/Layout/AppLayout";
import { useCheckoutStore } from "../hooks/useCheckoutStore";

import { dishesAPI } from "../api/dishesAPI";

export type Step = {
  component: React.ComponentType;
  title: string;
};

export type StateType = {
  activeStep: number;
};

const steps: Step[] = [
  { component: CheckoutBasket, title: "Оформление" },
  { component: CheckoutPayment, title: "Оплата и доставка" },
  { component: CheckoutFinish, title: "Ожидание доставки" },
];

export const CheckoutPage = () => {
  const location = useLocation<StateType>();

  const checkoutStore = useCheckoutStore();

  const { state = { activeStep: 0 } } = location;
  const history = useHistory();

  const activeStep = steps[state.activeStep];

  const onSubmit = (values: any) => {
    dishesAPI
      .create(values)
      .then(() => {
        history.push({
          ...location,
          state: {
            activeStep: 2,
          },
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <Layout>
      <div className='checkout-header'>
        <h2 className='checkout-header__title'>Корзина</h2>
        <CheckoutSteps activeStep={activeStep} steps={steps} />
      </div>
      <div className='checkout-step'>
        <Formik
          onSubmit={onSubmit}
          initialValues={{
            cash: 0,
            card: {
              number: "",
              cvv: "",
              expDate: "",
            },
            adress: {
              district: "",
              street: "",
              numberHouse: "",
              numberApartment: "",
            },
            total: 0,
            dishes: checkoutStore?.selectedDishes || [],
          }}>
          <Form>{activeStep && <activeStep.component />}</Form>
        </Formik>
      </div>
    </Layout>
  );
};
