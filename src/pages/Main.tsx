import React from 'react';
import { Dishes } from '../components/Dishes/Dishes';
import { DishesFilters } from '../components/Dishes/DishesFilters';
import { DishesSearch } from '../components/Dishes/DishesSearch';
import { Layout } from '../components/Layout/AppLayout';
import { Promo } from '../components/Promo/Promo';

export const MainPage: React.FC = () => {
  return (
    <Layout>
      <Promo />
      <h2 className="dishes__headline">Меню доставки</h2>
      <div className="dishes-content">
        <div className="dishes-content__left">
          <DishesSearch />
          <Dishes />
        </div>
        <div className="dishes-content__right">
          <DishesFilters />
        </div>
      </div>
    </Layout>
  );
};
