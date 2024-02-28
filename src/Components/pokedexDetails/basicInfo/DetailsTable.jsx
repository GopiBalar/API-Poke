import React from "react";
import styles from "../../../styles/pokedexDetails/basicInfo.module.css";

function DetailsTable(props) {
  const { height, weight, abilities } = props;
  const strAbilities = abilities.map((item) => item.ability?.name).join(", ");

  return (
    <table className={styles.tableConatiner}>
      <tbody>
        <tr>
          <td>
            <p>Height :</p>
            <p>{height}</p>
          </td>
          <td>
            <p>Catogary</p>
            <p>20</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Weight:</p>
            <p>{weight}</p>
          </td>
          <td style={{ alignSelf: "flex-start" }}>
            <p>Abilities :</p>
            <p>{strAbilities}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Gender</p>
            <p>55</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default DetailsTable;
