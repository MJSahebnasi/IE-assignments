import './styles/App.css';
import './styles/MainPage.css';
import './styles/SearchPage.css';
import './styles/mutual_header.css';
import './styles/CoinDetailPage.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './MainPage';
import SearchPage from './SearchPage';
import CoinDetailPage from './CoinDetailPage';

function App() {
  return (
    <div className="App">
      {/* <CoinDetailPage coinId={'bitcoin'}/> */}
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/search' element={<SearchPage />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
