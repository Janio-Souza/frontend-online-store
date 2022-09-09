import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';

// Grupo-38

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={ Home }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
