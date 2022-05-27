import './styles/App.css';
import './styles/MainPage.css';
import './styles/SearchPage.css';
import './styles/mutual_header.css';
import './styles/CoinDetailPage.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import MainPage from './MainPage';
import SearchPage from './SearchPage';
import CoinDetailPage from './CoinDetailPage';

function App() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    requestToApi();
  }, []);

  const requestToApi = () => {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

    // getting data:
    let xhttp = new XMLHttpRequest();
    xhttp.addEventListener("readystatechange", () => {
        if (xhttp.readyState === 4) {

            if (xhttp.status === 200) {
                // request successful
                let data = JSON.parse(xhttp.responseText);
                data = data.map(data => data.id);
                setCoins(data);
            } else {
                // request failed
                console.log("error getting coins data");
            }
        }
    });
    xhttp.open("GET", url);
    xhttp.send();
}

  return (
    <div className="App">
      {/* <CoinDetailPage coinId={'bitcoin'}/> */}
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/search' element={<SearchPage />} />
          {
              coins.map(coin => (
                <Route key={coin} path={`/${coin}`} element={<CoinDetailPage coinId={coin} />} />
              ))
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
