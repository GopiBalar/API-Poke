import React from "react";
import { fetchData } from "../../Services/apiServices";
import styles from "../../styles/pokedex/serchBar.module.css";

function SerchBar(props) {
  async function change(e) {
    props.setQuery(e.target.value);
    if (e.target.value === "") {
      props.setSerchedResult(null);
    }
  }
  async function search() {
    const data = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/${props.query}`
    );
    props.setSerchedResult(data);
  }

  return (
    <nav className={styles.nav}>
      <input
        type="text"
        placeholder="Name Or Number"
        className={styles.input}
        onChange={change}
      />
      <button onClick={search} className={styles.btn}>
        Serch
      </button>
    </nav>
  );
}

export default SerchBar;
