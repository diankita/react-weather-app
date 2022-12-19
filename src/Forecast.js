import React from "react";
import "./Forecast.css"
import WeatherIcon from "./images/01d.png";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row" id="weather-forecast-section">
        <div className="col-4 forecast-information">
          <div className="forecast-day">Monday</div>
          <img src={WeatherIcon} alt="weather icon" width="30px" />
          <div className="forecast-temp">
            <span className="forecast-temp-max">15° </span>
            <span className="forecast-temp-min">10°</span>
          </div>

          <div className="forecast-description">Cloudy</div>
        </div>
        <div className="col-4 forecast-information">
          <div className="forecast-day">Monday</div>
          <img src={WeatherIcon} alt="weather icon" width="30px" />
          <div className="forecast-temp">
            <span className="forecast-temp-max">15° </span>
            <span className="forecast-temp-min">10°</span>
          </div>

          <div className="forecast-description">Cloudy</div>
        </div>
        <div className="col-4 forecast-information">
          <div className="forecast-day">Monday</div>
          <img src={WeatherIcon} alt="weather icon" width="30px" />
          <div className="forecast-temp">
            <span className="forecast-temp-max">15° </span>
            <span className="forecast-temp-min">10°</span>
          </div>

          <div className="forecast-description">Cloudy</div>
        </div>
        <div className="col-4 forecast-information">
          <div className="forecast-day">Monday</div>
          <img src={WeatherIcon} alt="weather icon" width="30px" />
          <div className="forecast-temp">
            <span className="forecast-temp-max">15° </span>
            <span className="forecast-temp-min">10°</span>
          </div>

          <div className="forecast-description">Cloudy</div>
        </div>
        <div className="col-4 forecast-information">
          <div className="forecast-day">Monday</div>
          <img src={WeatherIcon} alt="weather icon" width="30px" />
          <div className="forecast-temp">
            <span className="forecast-temp-max">15° </span>
            <span className="forecast-temp-min">10°</span>
          </div>

          <div className="forecast-description">Cloudy</div>
        </div>
        <div className="col-4 forecast-information">
          <div className="forecast-day">Monday</div>
          <img src={WeatherIcon} alt="weather icon" width="30px" />
          <div className="forecast-temp">
            <span className="forecast-temp-max">15° </span>
            <span className="forecast-temp-min">10°</span>
          </div>

          <div className="forecast-description">Cloudy</div>
        </div>
      </div>
    </div>
  );
}
