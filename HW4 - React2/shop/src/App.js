import './style/navbar.css';
import './style/app.css';
import './style/mainPage.css';
import Navbar from './Navbar';
import BriefCard from './BriefCard';
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState();
    useEffect(() => {
        setData(require('./data/data.json'));
    }, []);

  if (!data)  
    return <p>loading ...</p>
  else
    // console.log(data);
    // console.log(data.data.length);

    var cards = [];
    for (var i = 0; i < data.data.length; i++) {
      cards.push(<BriefCard key={i} title={data.data[i].title} img_url={data.data[i].img} price={data.data[i].price} size={data.data[i].size}/>);
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