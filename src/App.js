import React from 'react';
import "./resources/styles.css";
import Header from "./components/header/Header";
import Featured from './components/featured';

function App() {
  return (
    <div className="App">
      <Header/>
      <Featured/>
    </div>
  );
}

export default App;
