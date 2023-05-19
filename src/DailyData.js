import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./dailydata.css";

export default function DailyData(props) {
  function day() {
    let date = new Date(props.dailyData.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  function max() {
    let temp = Math.round(props.dailyData.temp.max);
    return `${temp}`;
  }
  function min() {
    let temp = Math.round(props.dailyData.temp.min);
    return `${temp}`;
  }
  return (
    <div className="Forecast">
      <div className="forecast-days">{day()}</div>
      <div className="forecast-icon">
        <WeatherIcon code={props.dailyData.weather[0].icon} size={46} />
      </div>
      <div className="forecast-temp">
        <span className="max-tem">{max()}°</span>
        <span className="min-tem opacity-50">{min()}°</span>
      </div>
    </div>
  );
}
