import React from 'react';
import { Switch,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Productlist from './components/Productlist';
import Detail from './components/Detail';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Productlist} />
        <Route path="/detail" component={Detail} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
