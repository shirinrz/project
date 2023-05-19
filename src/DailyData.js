import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./dailydata.css";

export default function DailyData(props) {
  return (
    <div className="Forecast">
      <div className="container cadrForcast">
        <div className="row mt-2 mb-2">
          <div className="col-2">
            <div className="forecast-days">{props.dailyData.dt}</div>
            <div className="forecast-icon">
              <WeatherIcon
                code={props.dailyData.daily[0].weather[0].icon}
                size={46}
              />
            </div>
            <div className="forecast-temp">
              <span className="max-tem">
                {props.dailyData.daily[0].temp.max}°
              </span>
              <span className="max-tem opacity-50">
                {props.dailyData.daily[0].temp.min}°
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
