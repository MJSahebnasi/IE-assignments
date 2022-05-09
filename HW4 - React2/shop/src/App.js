import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './style/navbar.css';
import './style/app.css';
import './style/mainPage.css';
import './style/detailesPage.css'
import './style/cartPage.css'

import Navbar from './Navbar';
import BriefCardContainer from './BriefCardContainer';
import DetailedCard from './DetailedCard';
import CartCardContainer from './CartCardContainer';

function App() {

  const [allProductsData, setAllProductsData] = useState();
  useEffect(() => {
    setAllProductsData(require('./data/data.json').data);
  }, []);

  if (!allProductsData)
    return <p>loading ...</p>

  const smartphonesData = allProductsData.filter(data => data.category === "smartphone");
  const notebooksData = allProductsData.filter(data => data.category === "notebook");

  // console.log('allProductsData', allProductsData);
  // console.log('smartphonesData', smartphonesData);
  // console.log('notebooksData', notebooksData);

  return (
    <div className='AppContainer'>
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<BriefCardContainer cardsData={allProductsData} />} />
            <Route path="/cart" element={<CartCardContainer />} />
            <Route path="/Smartphones" element={<BriefCardContainer cardsData={smartphonesData} />} />
            <Route path="/Notebooks" element={<BriefCardContainer cardsData={notebooksData} />} />
            {
              smartphonesData.map(phone => (
                <Route key={phone.id} path={`/${phone.id}`} element={<DetailedCard cardData={phone} />} />
              ))
            }
            {
              notebooksData.map(notebook => (
                <Route key={notebook.id} path={`/${notebook.id}`} element={<DetailedCard cardData={notebook} />} />
              ))
            }
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;