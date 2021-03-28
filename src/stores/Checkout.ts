import { makeObservable, observable, action, computed } from "mobx";

export type Dish = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  ingredients: string[];
};

export type SelectedDish = {
  dish: Dish;
  count: number;
  comment: string;
  total: number;
};

export class CheckoutStore {
  selectedDishes: SelectedDish[] = [];
  total: number = 0;

  constructor() {
    makeObservable(this, {
      total: observable,
      selectedDishes: observable,
      selectDish: action("select dish"),
      removeDish: action("remove dish"),
      changeCount: action("change dish"),
    });
  }

  public changeTotal() {
    this.total = this.selectedDishes.reduce((acc, selectedDishe) => {
      return acc + selectedDishe.dish.price * selectedDishe.count;
    }, 0);
  }

  public removeDish(dish: Dish) {
    this.selectedDishes = this.selectedDishes.filter(
      (selectedDish) => selectedDish.dish.id !== dish.id
    );
    this.changeTotal();
  }

  public changeCount(selectedDish: SelectedDish, count: number) {
    this.selectedDishes = this.selectedDishes.map((sDish) => {
      if (sDish.dish.id !== selectedDish.dish.id) {
        return sDish;
      }

      return {
        ...sDish,
        count,
        total: sDish.dish.price * count,
      };
    });

    this.changeTotal();
  }

  public selectDish(selectedDish: SelectedDish) {
    this.selectedDishes.push(selectedDish);
  }

  public setTotal(total: number = 0) {
    this.total = total;
  }

  public getTotal() {
    return this.total;
  }

  public getSelectedDishes() {
    return this.selectedDishes;
  }
}
