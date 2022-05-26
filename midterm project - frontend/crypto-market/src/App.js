import './styles/App.css';
import './styles/MainPage.css';
import './styles/SearchPage.css';
import './styles/mutual_header.css';

import MainPage from './MainPage';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      <SearchPage />
    </div>
  );
}

export default App;
