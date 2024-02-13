import React from "react";

function Title(props) {
  const { name, id } = props;

  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <span>{name}</span>
        <span>#{id}</span>
      </h2>
    </div>
  );
}

export default Title;
