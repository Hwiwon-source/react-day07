import React, { useState, useEffect, useCallback } from "react";
import WeatherBox from "./WeatherBox";
import WeatherButtonBox from "./WeatherButtonBox";
import ClipLoader from "react-spinners/ClipLoader";
import "./WeatherApp.css";

const WeatherApp = () => {
  const Api_key = "40dfb5a1dbf7cfab7100e3ad03bee78e";
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const cities = ["Tokyo", "Seoul", "New york", "Paris", "Hanoi"];

  const getWeatherByCurrentLocation = useCallback(async (lat, lon) => {
    try {
      setLoading(true);
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${Api_key}`;
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  const getCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  }, [getWeatherByCurrentLocation]);

  const getWeatherByCity = useCallback(async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [city]);

  const handleChangeCity = (selectedCity) => {
    if (selectedCity === "current") {
      setCity(null);
      getCurrentLocation();
    } else {
      setCity(selectedCity);
    }
    setSelectedCity(selectedCity);
  };

  useEffect(() => {
    if (city === null || city === "current") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city, getCurrentLocation, getWeatherByCity]);

  return (
    <div>
      {loading ? (
        <ClipLoader color="#fdbb2d" loading={loading} size={200} />
      ) : (
        <div className="WeatherApp">
          <WeatherBox weather={weather} />
          <WeatherButtonBox
            cities={cities}
            handleChangeCity={handleChangeCity}
            selectedCity={selectedCity}
          />
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
