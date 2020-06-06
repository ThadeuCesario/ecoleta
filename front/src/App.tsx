/* Import Libs */
import React, {useState} from 'react';

/* Import Components */
import Header from "./Header";

/* Import CSS */
import './App.css';

function App() {

  let [counter, setCounter] = useState(0);

  function handleCounter(){
    setCounter(++counter);
  }

  return (
      <>
        <Header title={'World'}/>

        <h1>{counter}</h1>
        <button onClick={handleCounter}>SOMAR</button>
      </>
  );
}

export default App;
