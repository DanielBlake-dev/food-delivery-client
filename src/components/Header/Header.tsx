import React from "react";

import { BusketButton } from "../BusketButton/BusketButton";

import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";

export const Header: React.FC = (props) => {
  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        <img src={Logo} alt='Вкуснота' />
      </Link>
      <nav className='header__menu'>
        <Link to='/' className='header__menu-item'>
          Главная
        </Link>
        <Link to='/delivery' className='header__menu-item'>
          Доставка и оплата
        </Link>
      </nav>

      <div className='header__actions'>
        <div className='header-contact'>
          <p className='phone-number'>+380988666297</p>
          <a href='#' className='email'>
            Написать на почту
          </a>
        </div>

        <div className='header__busket'>
          <BusketButton />
        </div>
      </div>
    </header>
  );
};
