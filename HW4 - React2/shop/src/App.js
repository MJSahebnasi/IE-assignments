import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import React from 'react';

import './style/navbar.css';
import './style/app.css';
import './style/mainPage.css';
import './style/detailesPage.css'

import Navbar from './Navbar';
import BriefCardContainer from './BriefCardContainer';
import DetailedCard from './DetailedCard';

function App() {

  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  console.log(typeof cartItems);

  const [cardsData, setData] = useState();
  useEffect(() => {
    setData(require('./data/data.json').data);
  }, []);

  if (!cardsData)
    return <p>loading ...</p>
  
  return (
    <div className='AppContainer'>
      <div className="App">
        <Navbar />
        <BriefCardContainer cardsData={cardsData} />
        {/* <DetailedCard cardData={cardsData[10]} /> */}
      </div>
    </div>
  );
}

export default App;