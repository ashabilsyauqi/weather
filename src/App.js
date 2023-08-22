import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Components/Card";
import './App.css'

const WeatherApp = () => {
  const api = {
    key: "0229f522fe32729c34865f1c71c7341a",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Jakarta");

  useEffect(() => {
    axios
      .get(`${api.base}weather?q=${city}&appid=${api.key}`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [city, api.base, api.key]);

  return (
    <div>
      <div className="container flex-center">
        <div className="search-bar">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setCity(e.target.elements.city.value);
            }}
            className="search-bar"
          >
            <input name="city" className="input" placeholder="Masukan Kota" />
            <button type="submit" className="button-40">Search</button>
          </form>
        </div>
        <div className="app">
          <Card weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
