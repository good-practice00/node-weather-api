import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [weather, setWeather] = useState({
    location: "",
  });

  const fetchWeather = async () => {
    const res = await fetch(`/weather/${weather.location}`);
    console.log(res);
    const data = await res.json();
    console.log(data);
    setWeatherInfo(data);
  };

  // useEffect(() => {
  //   fetchWeather();
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setWeather((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    fetchWeather();
  };

  return (
    <div>
      <h1>Weather</h1>
      <form>
        <input
          type="text"
          name="location"
          value={weather.location}
          placeholder="location"
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={() => {
            handleSubmit(weather.location);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Weather;
