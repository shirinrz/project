import React from "react";

export default function Temperature(props) {
  return (
    <h2 className="Temp">
      {props.celsius}
      <spam className="degree">°</spam>
    </h2>
  );
}
