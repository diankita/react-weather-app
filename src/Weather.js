import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Berlin",
    date: "Monday 10:00",
    description: "Clear Sky",
    degrees: 5,
    feelsLike: 4,
    wind: 6,
    humidity: 60,
  };

  return (
    <div className="Weather">
      <div className="row city">
        <div className="col city">
          <h1>
            <span role="img" aria-label="emoji">
              📍
            </span>
            <span>{weatherData.city}</span>
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
              <span className="degrees">{weatherData.degrees}</span>
              <span className="units">°C</span>
            </div>
            <div className="col-md-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt=""
              />
            </div>
          </div>
          <ul>
            <li>
              <span role="img" aria-label="emoji">
                🌡
              </span>{" "}
              Feels like: <span>{weatherData.feelsLike}</span>°
            </li>
            <li>
              <span role="img" aria-label="emoji">
                🍃
              </span>{" "}
              Wind: <span>{weatherData.wind}</span>m/s
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
}
