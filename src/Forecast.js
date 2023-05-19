import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import DailyData from "./DailyData";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastTemp, setForecastTemp] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setForecastTemp(response.data);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastTemp);
    return <DailyData dailyData={forecastTemp} />;
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
