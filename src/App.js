import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Components/Card";
import './App.css'

const WeatherApp = () => {
  // variable array of object berisikan informasi BaseURL dan ApiKey
  const api = {
    key: "0229f522fe32729c34865f1c71c7341a",
    base: "https://api.openweathermap.org/data/2.5/",
  };


  // variable state
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Jakarta");



  // useEffect guna untuk melakukan load setiap page di render ulang atau di refresh
  useEffect(() => {

    // membuat perintah GET dan sertakan URL untuk getAPI mulai dari APIbaseURL lalu parameter CITY yang diambil dari
    //Value Default dari UseState awal yaitu Jakarta , lalu sertakan APIKEY yang diambil dari variable api lalu didalemnya ada Apikey
    axios
      .get(`${api.base}weather?q=${city}&appid=${api.key}`)
      .then((response) => {
        // jika reqest berhasil maka status akan berganti menajdi 200
        // lalu melakukan update State yang tadinya weather kini menjadi setWeather yang didalamnya ada 
        // respon sebuah data 
        setWeatherData(response.data);
      })
      .catch((error) => {
        //jika pemanggilan data gagal maka akan melakukan console.log error message
        console.error("Error fetching weather data:", error);
      });
  }, [city, api.base, api.key]);



  return (
    <div>
      <div className="container flex-center">
        <div className="search-bar">
          <form
            onSubmit={(e) => {
              // e akan di preventdefaultkan supaya fungsi DOM bawaan tidak aktif 
              // kasus ini kita tidak melakukan LOAD
              // kita ingin onSubmit menjalankan variable state setCity yang didalam nya 
              // ada varlue yang diketik pada form input city sebagai parameter name
              e.preventDefault();
              setCity(e.target.elements.city.value);
              // Value setCity akan masuk ke URL yang akan get dari baseURL disana ada variable City yang Statenya belum di update
            }}
            className="search-bar"
          >
            <input name="city" className="input" placeholder="Masukan Kota" />
            <button type="submit" className="button-40">Search</button>
          </form>
        </div>
        <div className="app">


        {/* weatherData akan dikirimkan ke Component Card melalui props */}
        {/* secaraDefault weatherData hanya memiliki value default yaitu null, jadi */}
        {/* jika setCity belum di trigget maka weatherData bukan apa apa selain Null */}
        {/* jika sudah di trigger maka WeatherData akan mengupdate State */}
        {/* menjadi         setWeatherData(response.data);*/}
          <Card weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
