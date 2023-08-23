import React from 'react';

export default function Weather({ weatherData }) {
  if (!weatherData) {
    
    return <p>Kota Tidak Ditemukan</p>;
  }

  const iconBaseUrl = "https://openweathermap.org/img/wn/";
  
  // Pastikan ada data weather sebelum mengakses properti weather[0]
  if (weatherData.weather && weatherData.weather.length > 0) {

    // variable yang berValue dari request API
    const iconCode = weatherData.weather[0].icon;

    // validasi icon pada API
    const iconUrl = `${iconBaseUrl}${iconCode}@2x.png`;

    // variable mengkonversi data dari API berupa Kervin ke Cessius
    const tempCelsius = (weatherData.main.temp - 273.15).toFixed(2);

    return (
      <div className='text-left'>
        {/* disini semua data akan di render pada tag tag HTML untuk ditampilkan pada CLient */}

        <div className='images'>
          <img src={iconUrl} alt='weather-img' className='weather-img' />
        </div>
        <h1 className='weather-status'>{weatherData.weather[0].description}</h1>
        <p className='weather-location'>Location: {weatherData.name}, {weatherData.sys.country}</p>
        <p className='weather-temp'>Temp: {tempCelsius} °C</p>
        <p className='weather-temp'>Wind: {weatherData.wind.speed} km/h</p>
        {/* <p className='weather-temp'>deg: {weatherData.wind.deg}°</p> */}
      </div>
    );
  } else {

    return <p>No weather data available.</p>;
  }
}
