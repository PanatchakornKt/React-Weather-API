import React, { useState } from "react";
import Head from "./Head";
import SearchWeather from "./SearchWeather";
import DisplayWeather from "./DisplayWeather";

const App = () => {
  const [weather, setWeather] = useState([]);

  return (
    <React.Fragment>
    Test
      <Head />
      <SearchWeather weather={weather} setWeather={setWeather} />
      <DisplayWeather weather={weather} />
    </React.Fragment>
  );
};

export default App;
