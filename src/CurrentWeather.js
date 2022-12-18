import React from "react";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
    return (
        <div className="CurrentWeather">
            <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
          </ul>
          <div className="row">
            <div className="col">
              <span className="degrees">{Math.round(props.data.temperature)}</span>
              <span className="units">°C</span>
            </div>
            <div className="col-md-6">
              <img
                src={props.data.icon}
                alt={props.data.description}
              />
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
    )
}