import React from "react";
import { Route, Router, Switch } from 'react-router-dom'
import { OrderPizza } from './components/order-pizza'
import { PizzaForm } from './components/pizza-form'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={OrderPizza} />
          <Route path="/pizza" component={PizzaForm} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
