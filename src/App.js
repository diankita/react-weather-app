import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./Weather";
import Tip from "./Tip";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container shadow">
          <div className="row" id="main-section">
            <div className="col" id="current-weather-section">
              <Weather defaultCity="Berlin" />
              <Tip />
            </div>
            <div className="col-md-7" id="weather-forecast-section">
              <Forecast />
            </div>
          </div>
        </div>
        <Footer />
      </div>
  );
}
