import './style/navbar.css';
import './style/app.css';
import './style/mainPage.css';
import Navbar from './Navbar';
import BriefCard from './BriefCard';

function App() {
  return (
    <div className='AppContainer'>
      <div className="App">
        <Navbar />
        <div className='briefCard_container'>
          <BriefCard />
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
