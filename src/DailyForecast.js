import React from "react";

export default function DailyForecast(props) {
    function maxTemperature() {
        let maxTemp = Math.round(props.data.temperature.maximum)
        return `${maxTemp}°`
    }

    function minTemperature() {
      let minTemp = Math.round(props.data.temperature.minimum);
      return `${minTemp}°`;
    }

    function dayOfWeek() {
        const date = new Date(props.data.time * 1000);
        const day = date.getDay();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[day];
    }

    return (
      <div className="DailyForecast">
        <div className="forecast-day">{dayOfWeek()}</div>
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
          width="30px"
        />
        <div className="forecast-temp">
          <span className="forecast-temp-max">
            {maxTemperature()}
          </span>
          <span className="forecast-temp-min">
            {minTemperature()}
          </span>
        </div>

        <div className="forecast-description">
          {props.data.condition.description}
        </div>
      </div>
    );
}