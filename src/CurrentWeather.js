import React from "react";
import CurrentWeatherTemp from "./CurrentWeatherTemp";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
    return (
      <div className="CurrentWeather">
        <ul>
          <li><FormattedDate date={props.data.date} /></li>
          <li>{props.data.description}</li>
        </ul>
        <div className="d-flex flex-row">
          <div className="p-3">
            <CurrentWeatherTemp
              temperature={props.data.temperature}
              configuredUnit={props.configuredUnit}
              onUnitChange={props.onUnitChange}
            />
          </div>
          <div className="p-1">
            <img src={props.data.icon} alt={props.data.description} />
          </div>
        </div>
        <ul>
          <li>
            <span role="img" aria-label="emoji">
              🌡
            </span>{" "}
            Feels like: <span>{Math.round(props.data.feelsLike)}</span>°
          </li>
          <li>
            <span role="img" aria-label="emoji">
              🍃
            </span>{" "}
            Wind: <span>{Math.round(props.data.wind)}</span>m/s
          </li>
          <li>
            <span role="img" aria-label="emoji">
              💧
            </span>{" "}
            Humidity: <span>{props.data.humidity}</span>%
          </li>
        </ul>
        <div className="Tip">
          Enjoy your day{" "}
          <span role="img" aria-label="emoji">
            🙂
          </span>
        </div>
      </div>
    );
}