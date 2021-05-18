import React, { useState } from "react";
import SearchWeather from "../components/SearchWeather";
import DisplayWeather from "../components/DisplayWeather";

const index = () => {
  const [weather, setWeather] = useState([]);

  return (
    <>
      <title>Weather App</title>
      <div className="bg-blue-700">Weather App</div>
      <SearchWeather weather={weather} setWeather={setWeather} />
      <DisplayWeather weather={weather} />
    </>
  );
};

export default index;
