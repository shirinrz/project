import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Forecast from "./Forecast";

import "./Weather.css";
import Weatherinfo from "./Weatherinfo";

export default function Weather() {
  const [city, setCity] = useState("");

  const [weatherdata, setWeatherdata] = useState({ loaded: false });

  function showWeather(response) {
    setWeatherdata({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
      twon: response.data.name,
    });
  }
  function handlesubmit(event) {
    event.preventDefault();
    let apiKey = "0865769520c78b96f50156d7932472e4";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }
  function findCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handlesubmit}>
      <div className="container">
        <div className="row mt-2 mb-3">
          <div className="col-sm-8">
            <input
              type="search"
              className="form-control"
              placeholder="Search your City"
              onChange={findCity}
            />
          </div>
          <div className="col-sm-4">
            <button className="w-100">Search</button>
          </div>
        </div>
      </div>
    </form>
  );

  if (weatherdata.loaded === false) {
    return (
      <div className="Weather">
        {form}
        <h3 className="text-start">City</h3>
        <p className="time">Loading...</p>
        <div>
          <div className="Temp fs-6">Loading...°</div>
        </div>
        <img
          src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png"
          alt="weather"
          width={60}
        ></img>
        <div className="weatherData">
          <span>Wind:? m/h</span>
          <span> Humidity:?%</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        {form}
        <h3 className="text-capitalize text-start city">{weatherdata.twon}</h3>
        <Weatherinfo data={weatherdata} />

        <Forecast coords={weatherdata.coordinates} />
      </div>
    );
  }
}
