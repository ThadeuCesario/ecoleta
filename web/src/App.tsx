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
      <h1>Hello World</h1>
    </>
  );
}

export default App;
