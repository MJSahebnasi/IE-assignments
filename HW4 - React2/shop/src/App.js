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
    console.log(data);
    console.log(data.data[0]);

    return (
      <div className='AppContainer'>
        <div className="App">
          <Navbar />
          <div className='briefCard_container'>
            <BriefCard title={data.data[0].title} img_url={data.data[0].img} price={data.data[0].price} size={data.data[0].size}/>
            <BriefCard />
            <BriefCard />
            <BriefCard />
            <BriefCard />
          </div>
        </div>
      </div>
    );
}

export default App;