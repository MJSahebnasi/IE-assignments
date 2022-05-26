import './styles/App.css';
import './styles/MainPage.css';
import './styles/SearchPage.css';
import './styles/mutual_header.css';

import MainPage from './MainPage';
import SearchPage from './SearchPage';
import CoinDetailPage from './CoinDetailPage';

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      {/* <SearchPage /> */}
      <CoinDetailPage />
    </div>
  );
}

export default App;
