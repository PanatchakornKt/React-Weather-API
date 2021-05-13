import React, {useState} from "react";
import axios from "axios";
import Weather from "./Weather";
import Swal from 'sweetalert2'

function Form() {
  
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);
  const [weatherlist, setWeatherlist] = useState([]);

  const Swal = require('sweetalert2')

  const onSearch = async (query) => {
    try {
      const filter = await {
        api: "http://api.openweathermap.org/data/2.5/weather",
        q: query,
        appid: "e5ee4efcb86ae45499524c78a853959e",
        units: "metric",
      };
      const url = `${filter.api}?q=${filter.q}&appid=${filter.appid}&units=${filter.units}`;
      const result = await axios.get(url);
      const newDatas = [...weather, result.data];
      setWeather(newDatas);
      console.log(result.data);
    } catch (error) {
      console.log(error.response);
       Swal.fire({
        title: 'Error',
        text: 'City not found!',
        icon: 'error',
        confirmButtonText: 'ok'
       })
    }
    setWeatherlist(query);
    setQuery("");
  };

  const onClear = () => {
    setWeather([]);
  };

  return (
    <div weatherlist={weatherlist}>
      <form
        className="container mx-auto px-6 py-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Enter the city"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="rounded-sm px-2 py-2 mt-2 ml-2 focus:outline-none bg-gray-100"
        />
        <button
          type="submit"
          onClick={() => onSearch(query)}
          className="ml-2 puppercase font-semibold tracking-wide bg-gray-100 text-gray-700 px-2 py-1 rounded-lg mt-2 focus:outline-none hover:bg-gray-200 text-xs"
        >
          Search
        </button>
        <button
          className="ml-2 puppercase font-semibold tracking-wide bg-red-100 text-red-700 px-2 py-1 rounded-lg mt-2 focus:outline-none hover:bg-red-200 text-xs"
          onClick={onClear}
        >
          Clear
        </button>
        <button className="ml-2 puppercase font-semibold tracking-wide text-gray-700 px-2 py-1 rounded-lg mt-2 focus:outline-none  text-xs">
          Country list : {weather.length}
        </button>
      </form>
      <Weather 
      weather = {weather}
      />
    </div>
  );
}
export default Form;
