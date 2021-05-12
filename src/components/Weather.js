import React from "react";

function Weather({weather}) {
  return (
      <div>
        {weather.map(
          (weathers, index) =>
            typeof weathers.main != "undefined" ? (
              <div
                key={weathers.id}
                className="md:w-1/3 mx-auto w-2/3 rounded-lg shadow-lg bg-white-300 flex flex-row flex-wrap p-3"
              >
                <img
                  className="rounded-lg shadow-lg "
                  src={`http://openweathermap.org/img/wn/${weathers.weather[0].icon}@2x.png`}
                  alt="logo"
                />
                <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
                  <div className="w-full text-right text-gray-700 font-semibold relative pt-1 md:pt-0">
                    <div className="text-xl leading-tight">
                      {weathers.name}, {weathers.sys.country}
                    </div>
                    <div className="text-normal text-gray-500 hover:text-gray-700 cursor-pointer">
                      <span className="border-b border-dashed border-black-500 pb-1">
                        {weathers.timezone}
                      </span>
                    </div>
                    <div className="text-sm text-black-300 hover:text-black-400 cursor-pointer">
                      {weathers.main.temp} &deg; C
                    </div>
                    <div className="text-sm text-black-300 hover:text-black-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">
                      {weathers.weather[0].description}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              " "
            )
        )}
      </div>
  );
}
export default Weather;
