import './App.css';
import { useState, useEffect } from 'react';
import FirstPage from './container/FirstPage/FirstPage';
import SecondPage from './container/SecondPage/SecondPage';
function App() {
  const [passFirstPage, setPassFirstPage] = useState(true);

  return (
    <div
      className='App'
      onClick={(e) => {
        e.preventDefault();
        setPassFirstPage(false);
      }}>
      <div className='main'>
        {passFirstPage ? <FirstPage /> : <SecondPage />}
      </div>
    </div>
  );
}

export default App;
