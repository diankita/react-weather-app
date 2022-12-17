import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CurrentWeather from "./CurrentWeather";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false})
  
  function getWeatherData(response) {
    console.log(response.data);
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
          <CurrentWeather data={weatherData} />
          
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
