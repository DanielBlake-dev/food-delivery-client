import axios from "axios";

import { Dish } from "./../stores/Checkout";

interface CreateOrderDTO {
  cash: string;
  card: {
    number: string;
    cvv: string;
    expDate: string;
  };
  adress: {
    district: string;
    street: string;
    numberHouse: string;
    numberApartment: string;
  };
  status: string;
  total: number;
  dishes: string[];
}

const BASE_API_URL = "https://dev-food--delivery.herokuapp.com/";

const APIClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const dishesAPI = {
  getAll: async () => {
    const { data } = await APIClient.get("/dishes");

    return data.map((dish: any) => {
      return {
        ...dish,
        id: dish._id,
        ingredients: dish.ingredients.map((ingredient: any) => ingredient.name),
      };
    });
  },
  create: async (payload: CreateOrderDTO) => {
    const { data } = await APIClient.post("/orders/create", {
      ...payload,
      status: "Waiting",
    });

    return data;
  },
};
