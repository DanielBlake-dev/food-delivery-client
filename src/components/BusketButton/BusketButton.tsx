import React from 'react';

import { Link } from 'react-router-dom';

import Busket from '../../assets/icons/busket.svg';

export const BusketButton: React.FC = () => {
  return (
    <Link to="/checkout">
      <div className="busket-button">
        <img src={Busket} alt="Busket" />
      </div>
    </Link>
  );
};
