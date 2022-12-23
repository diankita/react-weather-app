import React from "react";
import "./Forecast.css"
import WeatherIcon from "./images/01d.png";
import axios from "axios";

export default function Forecast(props) {
  function getForecastData(response) {
    console.log(response.data);
  }

  const apiKey = "30o0bd4adtb5f5f52eb4075c39a0aa10";
  let lat = props.coordinates.latitude;
  let lon = props.coordinates.longitude;
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
  axios.get(apiUrl).then(getForecastData);

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
      </div>
    </div>
  );
}
