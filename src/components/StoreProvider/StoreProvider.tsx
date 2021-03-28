import React, { createContext, useContext } from "react";
import { CheckoutStore } from "../../stores/Checkout";

type CheckoutStoreContextType = {
  checkoutStore: CheckoutStore | null;
};

const checkoutStore = new CheckoutStore();

export const CheckoutStoreContext = createContext<CheckoutStoreContextType>({
  checkoutStore: null,
});

export const StoreProvider: React.FC = ({ children }) => {
  return (
    <CheckoutStoreContext.Provider value={{ checkoutStore }}>
      {children}
    </CheckoutStoreContext.Provider>
  );
};
