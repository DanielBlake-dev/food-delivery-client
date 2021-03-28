import React, { useEffect, useState } from "react";

import { Dish } from "./Dish";
import { Dish as DishT } from "../../stores/Checkout";

import DishImage from "../../assets/dish.png";
import { dishesAPI } from "../../api/dishesAPI";

export const Dishes: React.FC = () => {
  const [dishes, setDishes] = useState<DishT[]>([]);

  const fetch = async () => {
    const dishes = await dishesAPI.getAll();
    setDishes(dishes);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className='dishes'>
      {dishes.map((dish) => (
        <Dish dish={dish} />
      ))}
    </div>
  );
};
