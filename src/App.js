import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import ShoppingCart from './pages/shoppingCart';
import ProductyDetails from './pages/productDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={ Home }
        />
        <Route path="/shoppingCart" component={ ShoppingCart } />
        <Route path="/productyDetails/:id" component={ ProductyDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
