import React from "react";

function Chip(props) {
  return (
    <div
      style={{
        backgroundColor: "#FFB0B0",
        padding: "10px",
        borderRadius: "15px",
      }}
    >
      {props.title}
    </div>
  );
}

export default Chip;
