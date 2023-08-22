import React from "react";
import "./css/Components.css";
import Weather from "../Data/Weather";

export default function Card({ weatherData }) {
  return (
    <div className="card">
      <div className="window-bar">
        <div className="w-bar red"></div>
        <div className="w-bar blue"></div>
        <div className="w-bar green"></div>
      </div>
      <div className="card-content">
        <Weather weatherData={weatherData} />
      </div>
    </div>
  );
}
