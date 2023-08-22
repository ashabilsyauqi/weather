import React from 'react';

export default function Weather({ weatherData }) {
  if (!weatherData) {
    
    return <p>tidak ada hasil</p>;
  }

  const iconBaseUrl = "https://openweathermap.org/img/wn/";
  
  // Pastikan ada data weather sebelum mengakses properti weather[0]
  if (weatherData.weather && weatherData.weather.length > 0) {
    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `${iconBaseUrl}${iconCode}@2x.png`;

    const tempCelsius = (weatherData.main.temp - 273.15).toFixed(2);

    return (
      <div className='text-left'>
        <div className='images'>
          <img src={iconUrl} alt='weather-img' className='weather-img' />
        </div>
        <h1 className='weather-status'>{weatherData.weather[0].description}</h1>
        <p className='weather-location'>Location: {weatherData.name}, {weatherData.sys.country}</p>
        <p className='weather-temp'>Temp: {tempCelsius} °C</p>
      </div>
    );
  } else {
    return <p>No weather data available.</p>;
  }
}
