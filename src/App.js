import React, {Fragment, useState} from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {
  const [ cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <Fragment>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
