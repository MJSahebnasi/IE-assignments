import './style/navbar.css';
import './style/app.css';
import './style/mainPage.css';
import Navbar from './Navbar';
import BriefCard from './BriefCard';
import { useState, useEffect } from 'react';

function App() {

  const [cardsData, setData] = useState();
    useEffect(() => {
        setData(require('./data/data.json').data);
    }, []);

  if (!cardsData)  
    return <p>loading ...</p>
  else
    // console.log(data);
    // console.log(data.data.length);

    var cards = [];
    for (var i = 0; i < cardsData.length; i++) {
      cards.push(<BriefCard key={i} title={cardsData[i].title} img_url={cardsData[i].img} price={cardsData[i].price} size={cardsData[i].size}/>);
    }

    return (
      <div className='AppContainer'>
        <div className="App">
          <Navbar />
          <div className='briefCard_container'>
            {cards}
          </div>
        </div>
      </div>
    );
}

export default App;