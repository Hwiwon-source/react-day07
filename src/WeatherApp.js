import React from "react";
import { useState, useEffect, useCallback } from "react";
import WeatherBox from "./WeatherBox";
import WeatherButtonBox from "./WeatherButtonBox";
import "./WeatherApp.css";

const WeatherApp = () => {
  const Api_key = "40dfb5a1dbf7cfab7100e3ad03bee78e";
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const cities = ["Tokyo", "Seoul", "New york", "Paris", "Hanoi"];

  // const getCurrentLocation = () => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     let lat = position.coords.latitude;
  //     let lon = position.coords.longitude;
  //     getWeatherByCurrentLocation(lat, lon);
  //   });
  // };
  // study에서 해결방법을 체크하고 온 부분
  const getCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  }, []);

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${Api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  // const getWeatherByCity = async () => {
  //   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`;
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   // console.log(data);
  //   setWeather(data);
  // };

  // render이후에 useEffect내 함수 곧바로 실행 (componentDidMount)
  useEffect(() => {
    // 상황에 맞춰서 useEffect호출 통제
    if (!city) {
      // console.log("city값이 없을때 실행");
      getCurrentLocation();
    } else {
      // console.log("city값이 있을때 실행");
      // getWeatherByCity();
    }
  }, [city, getCurrentLocation]);

  // render이후, city값 update될때 함수 곧바로 실행 (componentDidUpdate)
  // useEffect(() => {
  //   // console.log("city?", city);
  //   getWeatherByCity();
  // }, [city]);

  return (
    <div className="WeatherApp">
      <WeatherBox weather={weather} />
      <WeatherButtonBox cities={cities} setCity={setCity} />
    </div>
  );
};

export default WeatherApp;
