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
    <nav className={styles.navContainer}>
      <input
        type="text"
        placeholder="Name Or Number"
        className={styles.input}
        onChange={change}
      />
      <button onClick={search} className={styles.serchBtn}>
        {/* Search */}
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
      </button>
    </nav>
  );
}

export default SerchBar;
