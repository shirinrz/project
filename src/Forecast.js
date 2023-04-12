import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="container cadrForcast">
        <div className="row mt-5 mb-2">
          <div className="col-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9755/9755279.png"
              alt="icon"
              width="50px"
            ></img>
            <br />
            Mon
          </div>
          <div className="col-2">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/8841/8841317.png"
              alt="icon"
              width="50px"
            ></img>
            <br />
            Thu
          </div>
          <div className="col-2">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/1146/1146869.png"
              alt="icon"
              width="50px"
            ></img>
            <br />
            Wed
          </div>
          <div className="col-2">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/9755/9755279.png"
              alt="icon"
              width="50px"
            ></img>
            <br />
            Thr
          </div>
          <div className="col-2">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/9755/9755273.png"
              alt="icon"
              width="50px"
            ></img>
            <br />
            Fri
          </div>
          <div className="col-2">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/1146/1146869.png"
              alt="icon"
              width="50px"
            ></img>
            <br />
            Sat
          </div>
        </div>
      </div>
    </div>
  );
}
