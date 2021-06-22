import './App.css';
import Card from './components/Card';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [setup, setSetup] = useState("")
  const [punchline, setPunchline] = useState("")


  const getJoke = () => {
    axios.get("/random_joke")
      .then((res) => {
        setSetup(res.data.setup);
        setPunchline(res.data.punchline);
      })
  }
  return (
    <div className="App">
      <div className="container text-center main-container">
        <header className="App-header">
          <h1 className="app-title">Random Joke Machine</h1>
          <p className="text-light">developed by <strong>Kurt</strong></p>
        </header>
        <Card
          setup={setup}
          setSetup={setSetup}
          punchline={punchline}
          setPunchline={setPunchline}
          getJoke={getJoke}
        />
      </div>
    </div>
  );
}

export default App;
