import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './style/navbar.css';
import './style/app.css';
import './style/mainPage.css';
import './style/detailesPage.css'
import './style/cartPage.css'

import Navbar from './Navbar';
import BriefCardContainer from './BriefCardContainer';
import DetailedCard from './DetailedCard';
import CartCard from './CartCard';
import CartCardContainer from './CartCardContainer';

function App() {

  const cartItems = useSelector((state) => state.cart.items);

  const [allCardsData, setAllCardsData] = useState();
  useEffect(() => {
    setAllCardsData(require('./data/data.json').data);
  }, []);

  if (!allCardsData)
    return <p>loading ...</p>

  return (
    <div className='AppContainer'>
      <div className="App">
        <Router>
          <Navbar />
          {/* <Router><Link to={"/cart"}>Cart</Link></Router> */}
          {/* <DetailedCard cardData={cardsData[10]} /> */}
          <Routes>
            <Route path="/" element={<BriefCardContainer cardsData={allCardsData} />} />
            <Route path="/cart" element={<CartCardContainer />} />
            {/* <CartCardContainer /> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;