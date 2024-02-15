import React from "react";
import Chip from "./Chip";

function Types(props) {
  const types = props.types.map((value) => {
    return value.type.name;
  });
  return (
    <div
      style={{
        display: "flex",
        marginTop: "20px",
        justifyContent: "center",
      }}
    >
      <div>
        <h2>Types</h2>
        <div style={{ display: "flex", gap: "16px", marginTop: "15px" }}>
          {types.map((value, index) => {
            return <Chip key={index} title={value} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Types;
