import React from "react";
import { Button } from "react-bootstrap";
import "./WeatherButtonBox.css";

const WeatherButtonBox = ({ cities, setCity }) => {
  // console.log(cities);
  return (
    <div className="WeatherButtonBox">
      <div>
        <Button variant="warning" onClick={() => setCity(null)}>
          Current Location
        </Button>
        <div className="Button-arrow">arrow</div>
      </div>
      {cities.map((i, idx) => (
        <div key={idx}>
          <Button key={idx} variant="warning" onClick={() => setCity(i)}>
            {i}
          </Button>
          <div className="Button-arrow">arrow</div>
        </div>
      ))}
    </div>
  );
};

export default WeatherButtonBox;
