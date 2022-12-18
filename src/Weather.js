import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import "./Weather.css";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false})
  const [city, setCity] = useState(props.defaultCity);
  
  function getWeatherData(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png",
    });
  }
  
  function search() {
    const apiKey = "30o0bd4adtb5f5f52eb4075c39a0aa10";
    let units = "metric"
    let apiUrl =
    `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getWeatherData);
  }

  function handleSubmit(event) {
  event.preventDefault();
  search();
}

  function handleCityInput(event) {
    setCity(event.target.value);
  }

if (weatherData.ready) {
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-md-8 mb-2">
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control"
            autoFocus
            autoComplete="on"
            onChange={handleCityInput}
          />
        </div>
        <div className="col mb-2">
          <button
            type="submit"
            value="Search"
            className="btn btn-secondary w-100 shadow"
          >
            Search
          </button>
        </div>
        <div className="col mb-2">
          <button
            type="button"
            className="btn btn-outline-secondary w-100 shadow"
          >
            <span role="img" aria-label="emoji">
              📍
            </span>
          </button>
        </div>
      </div>
      </form>
      <div className="row city">
        <div className="col city">
          <h1>
            {weatherData.city}
          </h1>
        </div>
      </div>

      <div className="row">
        <div className="col-5">
          <CurrentWeather data={weatherData} />
        </div>
        <div className="col-7">
          <Forecast />
        </div>
      </div>
    </div>
  );
} else {
  search();
  return "Loading..."
}

}
