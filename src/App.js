import React, { } from "react";
import MagicBox from "./features/MagicBox";
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="container">
        <h1>React custom hook - <br /> Magicbox random color after 1 second</h1>
        <MagicBox />
      </div>
    </div>
  );
}

export default App;
