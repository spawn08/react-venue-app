import React from "react";
import "./resources/styles.css";
import Header from "./components/header/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venue_info";
import HighLight from "./components/highlights";
import Pricing from "./components/pricing";
import Location from './components/location';
import Footer from "./components/header/Footer";
import 'bootstrap/dist/css/bootstrap.css';

import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">

      <Header />

      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venue_info">
        <VenueInfo />
      </Element>

      <Element name="highlights">
        <HighLight />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Footer />


    </div>
  );
}

export default App;
