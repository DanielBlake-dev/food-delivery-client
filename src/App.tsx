import React from "react";
import { MainPage } from "./pages/Main";
import { CheckoutPage } from "./pages/Checkout";

import { Switch, Route } from "react-router-dom";
import { DeliveryPage } from "./pages/Delivery";
import { ContactPage } from "./pages/Contacts";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route exact path='/delivery' component={DeliveryPage} />
      <Route exact path='/contact' component={ContactPage} />
    </Switch>
  );
}

export default App;
