import './style/navbar.css';
import './style/app.css';
import './style/mainPage.css';
import Navbar from './Navbar';
import BriefCard from './BriefCard';
import { useState, useEffect } from 'react';
import BriefCardContainer from './BriefCardContainer';

function App() {

  const [cardsData, setData] = useState();
  useEffect(() => {
    setData(require('./data/data.json').data);
  }, []);

  if (!cardsData)
    return <p>loading ...</p>
  // console.log(data);
  // console.log(data.data.length);

  return (
    <div className='AppContainer'>
      <div className="App">
        <Navbar />
        <BriefCardContainer cardsData={cardsData} />
      </div>
    </div>
  );
}

export default App;