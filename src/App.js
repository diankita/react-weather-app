import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container shadow">
              <Weather defaultCity="Berlin" />
        </div>
        <Footer />
      </div>
  );
}
