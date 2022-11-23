import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import Weather from "./Weather";
import Tip from "./Tip";
import "./App.css";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app shadow">
          <Search />
          <div className="row" id="main-section">
          <div className="col" id="current-weather-section">
          <Weather />
          <Tip />
          </div>
          <div className="col-md-7" id="weather-forecast-section">
          <Forecast />
          </div>
          </div>
        </div>          
        <Footer />
        </div>
      </div>
  );
}
