import { useState, useEffect } from 'react';

import './style/navbar.css';
import './style/app.css';
import './style/mainPage.css';
import './style/detailesPage.css'

import Navbar from './Navbar';
import BriefCardContainer from './BriefCardContainer';
import DetailedCard from './DetailedCard';

function App() {

  const [cardsData, setData] = useState();
  useEffect(() => {
    setData(require('./data/data.json').data);
  }, []);

  if (!cardsData)
    return <p>loading ...</p>
  // console.log(cardsData[0]);
  // console.log(data.data.length);

  return (
    <div className='AppContainer'>
      <div className="App">
        <Navbar />
        {/* <BriefCardContainer cardsData={cardsData} /> */}
        <DetailedCard cardData={cardsData[10]} />
      </div>
    </div>
  );
}

export default App;