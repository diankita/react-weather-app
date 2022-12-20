import React, { useState } from "react";

export default function CurrentWeatherTemp(props) {
  const [units, setUnits] = useState("celsius");

  function showFahrenheitTemp(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function showCelsiusTemp(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 1.8) + 32
  }

  if (units === "celsius") {
    return (
      <div>
        <span className="degrees">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheitTemp}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="degrees">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={showCelsiusTemp}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
