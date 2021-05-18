import React from "react";

function DisplayWeather({ weather }) {

  const dateTime = new Date();
  const time = `${dateTime.getHours()}:${dateTime.getMinutes()}`;

  return (
    <>
      {weather.map((weathers) => (
        <div key={weathers.id}>
          <img
            src={`http://openweathermap.org/img/wn/${weathers.weather[0].icon}@2x.png`}
            alt="logo"
          />
          <div>
            {weathers.name}, {weathers.sys.country}
          </div>
          <div>{time}</div>
          <div>{weathers.main.temp} &deg; C</div>
          <div>{weathers.weather[0].description}</div>
        </div>
      ))}
    </>
  );
}
export default DisplayWeather;
