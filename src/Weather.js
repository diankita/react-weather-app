import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false})
  
  function getWeatherData(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: "Monday 10:00",
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png",
    });
  }

if (weatherData.ready) {
  return (
    <div className="Weather">
      <div className="row city">
        <div className="col city">
          <h1>
            {weatherData.city}
          </h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <ul>
            <li>{weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col">
              <span className="degrees">{Math.round(weatherData.temperature)}</span>
              <span className="units">°C</span>
            </div>
            <div className="col-md-6">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
              />
            </div>
          </div>
          <ul>
            <li>
              <span role="img" aria-label="emoji">
                🌡
              </span>{" "}
              Feels like: <span>{Math.round(weatherData.feelsLike)}</span>°
            </li>
            <li>
              <span role="img" aria-label="emoji">
                🍃
              </span>{" "}
              Wind: <span>{Math.round(weatherData.wind)}</span>m/s
            </li>
            <li>
              <span role="img" aria-label="emoji">
                💧
              </span>{" "}
              Humidity: <span>{weatherData.humidity}</span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} else {
  const apiKey = "30o0bd4adtb5f5f52eb4075c39a0aa10";
  let units = "metric"
  let apiUrl =
    `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(getWeatherData);

  return "Loading..."
}

}
