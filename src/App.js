import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Checkout from './components/checkout/checkout';
import Home from './components/home/home';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Nav/>
            <Home/>
          </Route>
          <Route path="/checkout">
            <Nav/>
            <Checkout/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
