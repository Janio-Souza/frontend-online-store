import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import ShoppingCart from './pages/shoppingCart';

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
