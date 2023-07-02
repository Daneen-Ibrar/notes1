import React, { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {ImSun} from 'react-icons/im'
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';

function Root() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
    <button onClick={toggleDarkMode} className='toggle'>
        {darkMode ? <BsFillMoonStarsFill /> : <ImSun />}
      </button>
      
      <App />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
