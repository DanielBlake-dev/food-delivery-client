import React from 'react';

import classNames from 'classnames';

import AngleRight from '../../assets/icons/angle_right.svg';
import { Step } from '../../pages/Checkout';

type CheckoutStepsProps = {
  steps: Step[];
  activeStep: Step;
};

export const CheckoutSteps: React.FC<CheckoutStepsProps> = ({
  steps,
  activeStep,
}) => {
  return (
    <div className="checkout__steps">
      {steps.map((step, index) => (
        <div
          className={classNames('checkout__steps-item', {
            active: step.title === activeStep.title,
          })}
        >
          {step.title}
          {index !== steps.length - 1 ? <img src={AngleRight} alt="" /> : null}
        </div>
      ))}
    </div>
  );
};
