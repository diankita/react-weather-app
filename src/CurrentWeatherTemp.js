import React from "react";

export default function CurrentWeatherTemp(props) {
    return (
      <div>
        <span className="degrees">{Math.round(props.temperature)}</span>
        <span className="units">
          °C
        </span>
      </div>
    );
  }


// import React from "react";

// export default function CurrentWeatherTemp(props) {
//   function showFahrenheitTemp(event) {
//     event.preventDefault();
//     props.onUnitChange("imperial");
//   }

//   function showCelsiusTemp(event) {
//     event.preventDefault();
//     props.onUnitChange("metric");
//   }

//   if (props.configuredUnit === "metric") {
//     return (
//       <div>
//         <span className="degrees">{Math.round(props.temperature)}</span>
//         <span className="units">
//           °C |{" "}
//           <a href="/" onClick={showFahrenheitTemp}>
//             °F
//           </a>
//         </span>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <span className="degrees">{Math.round(props.temperature)}</span>
//         <span className="units">
//           <a href="/" onClick={showCelsiusTemp}>
//             °C
//           </a>{" "}
//           | °F
//         </span>
//       </div>
//     );
//   }
// }
