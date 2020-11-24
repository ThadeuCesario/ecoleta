import React, {useState} from 'react';
import './App.css';
import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <>
      <Header title='Hello World'/>
      <span>{counter}</span>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </>
  );
}

export default App;
