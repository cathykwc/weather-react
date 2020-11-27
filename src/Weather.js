import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Vancouver",
    date: "Sunday 18:00",
    description: "Clear sky",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    temperature: 4,
    feelsLike: 0,
    humidity: 62,
    wind: 0
  };
  return (
    <div className="Weather">
      <form className="mb-4">
        <div className="row">
          <div className="col-5">
            <input
              type="search"
              placeholder="Search for a city"
              className="form-control"
              autoFocus="on"
              autoComplete="off"
              id="city-input"
            />
          </div>
          <div className="col-3">
            <button className="search-button">search</button>
          </div>
          <div className="col-4">
            <button>current 📍</button>
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.description}</li>
          <li>Last updated: {weatherData.date}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-7">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <span className="current-temp">{weatherData.temperature}</span>
              <span className="units">
                <a href="/">°C </a>|<a href="/"> °F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-5">
          <ul>
            <li>Feels like: {weatherData.feelsLike}°C</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}