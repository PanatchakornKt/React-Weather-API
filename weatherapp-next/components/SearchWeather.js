import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert";

const SearchWeather = ({ weather, setWeather }) => {
  const [city, setCity] = useState("");
  const [weatherlist, setWeatherlist] = useState([]);

  const callWeatherapi = async city => {
    try {
      const filter = await {
        api: "http://api.openweathermap.org/data/2.5/weather",
        c: city,
        appid: "653fea40ab24e6bf037baeada82267b3",
        units: "metric",
      };
      const url = `${filter.api}?q=${filter.c}&appid=${filter.appid}&units=${filter.units}`;
      const result = await axios.get(url);
      const data = result.data
      const newData = [...weather, data];
      setWeather(newData);
      //console.log(newData)
    } catch (error) {
      Swal({
        title: "Error",
        text: "City not found!",
        icon: "error",
        confirmButtonText: "ok",
      });
      setWeatherlist(city);
      setCity("");
    }
  };

  const onDeleteWeather = () => {
    setWeather([]);
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Enter the city"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => callWeatherapi(city)}
        >
          Search
        </button>
        <button
          onClick={onDeleteWeather}
        >
          Clear
        </button>
        <label>
          Country list : {weather.length}
        </label>
      </form>
    </>
  );
}
export default SearchWeather;