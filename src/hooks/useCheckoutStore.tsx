import { useContext } from "react";

import { CheckoutStoreContext } from "../components/StoreProvider/StoreProvider";

export const useCheckoutStore = () => {
  const { checkoutStore } = useContext(CheckoutStoreContext);
  return checkoutStore;
};
