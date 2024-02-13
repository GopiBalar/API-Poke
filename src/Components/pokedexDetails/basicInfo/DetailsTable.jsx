import React from "react";

function DetailsTable(props) {
  const { height, weight, abilities } = props;
  const strAbilities = abilities.map((item) => item.ability?.name).join();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        backgroundColor: "#9F70FD",
        padding: "32px",
        borderRadius: "40px",
        fontWeight: "600",
        fontSize: "20px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p style={{ color: "white" }}>Height :</p>
          <p>{height}</p>
        </div>
        <div>
          <p style={{ color: "white" }}>Catogary</p>
          <p>20</p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p style={{ color: "white" }}>Weight:</p>
          <p>{weight}</p>
        </div>
        <div style={{ alignSelf: "flex-start" }}>
          <p style={{ color: "white" }}>Abilities :</p>
          <p>{strAbilities}</p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p style={{ color: "white" }}>Gender</p>
          <p>55</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsTable;
