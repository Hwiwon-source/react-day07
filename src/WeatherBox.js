import React from "react";
import "./WeatherBox.css";

const WeatherBox = ({ weather }) => {
  // console.log(weather);
  return (
    <>
      <div className="WeatherBox">
        {/* <div>{weather && weather.name}</div> */}
        <h2 className="WeatherBox-currentLocation">{weather?.name}</h2>
        <p className="WeatherBox-temp">
          <span>{Math.floor(weather?.main.temp)}°</span>
        </p>
        <p className="WeatherBox-description">
          {`${weather?.weather[0].description
            .charAt(0)
            .toUpperCase()}${weather?.weather[0].description.slice(1)}`}
        </p>
        <div className="WeatherBox-high-low-temp">
          <div>H : {Math.floor(weather?.main.temp_max)}°</div>|
          <div>L : {Math.floor(weather?.main.temp_min)}°</div>
        </div>
      </div>
    </>
  );
};

export default WeatherBox;
