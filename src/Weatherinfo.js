import React from "react";
import FormatDate from "./FormatDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import "./weatherinfo.css";

export default function Weatherinfo(props) {
  return (
    <div>
      <p className="time">
        <FormatDate date={props.data.date} />
      </p>

      <div className="temp">
        <Temperature celsius={props.data.temp} />
      </div>

      <div className="icon">
        <WeatherIcon code={props.data.icon} size={120} />
      </div>

      <div className="text-capitalize describe">
        <strong>{props.data.description}</strong>
      </div>

      <div class="container text-center mb-2">
        <div className="row">
          <div className="weatherData row justify-content-center col-8">
            <div className="col-5">
              Wind: <strong>{props.data.wind} m/h </strong>
            </div>
            <div className="col-5">
              Humidity: <strong>{props.data.humidity}%</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
