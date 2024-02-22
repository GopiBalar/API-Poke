import React from "react";
import { getTagBackgroundColor } from "../../../utils/tags";

function Chip(props) {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: getTagBackgroundColor(props.title),
        padding: "10px",
        borderRadius: "15px",
      }}
    >
      {props.title}
    </div>
  );
}

export default Chip;
