import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import DailyData from "./DailyData";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastTemp, setForecastTemp] = useState(null);

  function handleResponse(response) {
    setForecastTemp(response.data.daily);
    setLoaded(true);
  }
  function ApiLoad() {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  if (loaded) {
    return (
      <div className="container cadrForcast">
        <div className="row mt-2 mb-2">
          {forecastTemp.map(function (dailyforecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <DailyData dailyData={dailyforecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    ApiLoad();

    return "LOADING ...";
  }
}
