import React, { useState } from "react";
import "./Forecast.css"
import axios from "axios";
import DailyForecast from "./DailyForecast";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function getForecastData(response) {
    console.log(response.data.daily);
    setLoaded(true);
    setForecastData(response.data.daily);
  }

  if (loaded) {
  return (
    <div className="Forecast">
      <div className="row" id="weather-forecast-section">
        <div className="col-4 forecast-information">
          <DailyForecast data={forecastData[0]}/>

        </div>
      </div>
    </div>
  );
  } else {
  const apiKey = "30o0bd4adtb5f5f52eb4075c39a0aa10";
  let lat = props.coordinates.latitude;
  let lon = props.coordinates.longitude;
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
  axios.get(apiUrl).then(getForecastData);
  
  return null;
  }
}
