import React from 'react';

export default function Weather({ weatherData }) {
  if (!weatherData) {
    // alert("Maaf Kota tidak ditemukan...");
    // return null; // Menghentikan rendering komponen lebih lanjut
  }

  const iconBaseUrl = "https://openweathermap.org/img/wn/";
  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `${iconBaseUrl}${iconCode}@2x.png`;

  const tempCelsius = (weatherData.main.temp - 273.15).toFixed(2);

  return (
    <div className='text-left'>
      <div className='images'>
        <img src={iconUrl} alt='weather-img' className='weather-img' />
      </div>
      <h1 className='weather-status'>{weatherData.weather[0].description}</h1>
      <p className='weather-location'>location : {weatherData.name}</p>
      <p className='weather-location'>Nation : {weatherData.sys.country}</p>
      <p className='weather-temp'>Temp : {tempCelsius} °C</p>
      {/* <p className='weather-temp'>Humidity : {weatherData.main[0].humidity}</p> */}
    </div>
  );
}





