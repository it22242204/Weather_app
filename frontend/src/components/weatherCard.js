import React from "react";
import "../css/weathercard.css";

const WeatherCard = ({ name, description, temp }) => {
  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="temp-box">
        <span className="temp">{temp}°C</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default WeatherCard;
