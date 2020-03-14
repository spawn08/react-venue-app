import React from "react";
import "./resources/styles.css";
import Header from "./components/header/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venue_info";

function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <VenueInfo />
    </div>
  );
}

export default App;
