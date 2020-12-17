import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import { Home,
  Checkout,
  Information,
  Payment,
  Success,
  NotFound
} from "../containers/index"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/checkout/info" component={Information} />
        <Route exact path="/checkout/payment" component={Payment} />
        <Route exact path="/checkout/succes" component={Success} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;