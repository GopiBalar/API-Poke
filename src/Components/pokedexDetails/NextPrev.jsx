import React from "react";
import styles from "../../styles/pokedexDetails/prevNext.module.css";

function NextPrev(props) {
  const { number, setName } = props;

  function next() {
    if (number < 1025) {
      setName(number + 1);
    } else {
      setName(1);
    }
  }

  function previous() {
    if (number > 1) {
      setName(number - 1);
    } else {
      setName(1025);
    }
  }

  return (
    <div className={styles.prevNext}>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
}

export default NextPrev;
