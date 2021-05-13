import React, { useState } from "react";
import Head from "./Head";
import SearchWeather from "./SearchWeather";
import DisplayWeather from "./DisplayWeather";

const App = () => {
  const [weather, setWeather] = useState([]);

  return (
    <React.Fragment>
<<<<<<< HEAD
    Test
=======
>>>>>>> 07b22de9c0f7cc49becf8d03b07fc8c8a16e2ac7
      <Head />
      <SearchWeather weather={weather} setWeather={setWeather} />
      <DisplayWeather weather={weather} />
    </React.Fragment>
  );
};

export default App;
