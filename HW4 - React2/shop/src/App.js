import './style/navbar.css';
import './style/app.css';
import './style/mainPage.css';
import Navbar from './Navbar';
import BriefCard from './BriefCard';
import { useState, useEffect } from 'react';

function App() {

  let [productsData, setProductsData] = useState(JSON.parse('data/data.json'));

  useEffect(() => {
    setProductsData(JSON.parse('data/data.json'));
  }, []);

  return (
    <div className='AppContainer'>
      <div className="App">
        <Navbar />
        <div className='briefCard_container'>
          <BriefCard title={productsData.title}/>
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
