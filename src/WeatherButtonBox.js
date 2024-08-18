import React from "react";
import { Button } from "react-bootstrap";
import "./WeatherButtonBox.css";

const WeatherButtonBox = ({ cities, handleChangeCity, selectedCity }) => {
  // console.log(cities);
  return (
    <div className="WeatherButtonBox">
      <div>
        <Button
          variant={selectedCity === "current" ? "warning" : "outline-warning"}
          onClick={() => handleChangeCity("current")}
        >
          Current Location
        </Button>
        <div className="Button-arrow">arrow</div>
      </div>
      {cities.map((i, idx) => (
        <div key={idx}>
          <Button
            variant={selectedCity === i ? "warning" : "outline-warning"}
            key={idx}
            onClick={() => handleChangeCity(i)}
          >
            {i}
          </Button>
          <div className="Button-arrow">arrow</div>
        </div>
      ))}
    </div>
  );
};

export default WeatherButtonBox;
