import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      Coded by Diankita and{" "}
      <a
        href="https://github.com/diankita/react-weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        open sourced on Github
      </a>
      {/* <br />
      Weather icons created by{" "}
      <a
        href="https://www.flaticon.com/free-icons/weather"
        title="weather icons"
        target="_blank"
        rel="noopener noreferrer"
      >
        iconixar - Flaticon
      </a> */}
  </div>
  );
}
