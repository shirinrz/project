import React from "react";
import FormatDate from "./FormatDate";

export default function Weatherinfo(props) {
  return (
    <div>
      <p className="time">
        <FormatDate date={props.data.date} />
      </p>
      <div className="central">
        <h2 className="Temp">
          {props.data.temp}
          <spam className="degree">°</spam>
        </h2>
        <img
          src={props.data.icon}
          alt={props.data.description}
          className="iconImage"
          width={180}
        />
      </div>
      <div className="text-capitalize">
        <strong>{props.data.description}</strong>
      </div>
      <div className="weatherData">
        <span>Wind: {props.data.wind} m/h</span>
        <span> Humidity: {props.data.humidity}%</span>
      </div>
    </div>
  );
}
