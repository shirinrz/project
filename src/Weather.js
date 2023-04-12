import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Forecast from "./Forecast";
import FormatDate from "./FormatDate";

import "./Weather.css";

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
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
            <button className="btn btn-primary w-100">Search</button>
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
        <p className="time">
          <FormatDate />
        </p>
        <div>
          <div className="Temp">°</div>
          <img src={weatherdata.icon} alt={weatherdata.description} />
        </div>
        <div className="weatherData">
          <span>Wind:? m/h</span>
          <span> Humidity:?%</span>
        </div>

        <Forecast />
      </div>
    );
  } else {
    return (
      <div className="Weather">
        {form}
        <h3 className="text-capitalize text-start">{city}</h3>
        <p className="time">
          <FormatDate date={weatherdata.date} />
        </p>
        <div className="central">
          <h2 className="Temp">
            {weatherdata.temp}
            <spam className="degree">°</spam>
          </h2>
          <img
            src={weatherdata.icon}
            alt={weatherdata.description}
            className="iconImage"
            width={180}
          />
        </div>
        <div className="text-capitalize">
          <strong>{weatherdata.description}</strong>
        </div>
        <div className="weatherData">
          <span>Wind: {weatherdata.wind} m/h</span>
          <span> Humidity: {weatherdata.humidity}%</span>
        </div>
        <Forecast />
      </div>
    );
  }
}
