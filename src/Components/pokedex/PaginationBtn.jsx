import React from "react";
import styles from "../../styles/pokedex/paginationBtn.module.css";

function PaginationBtn(props) {
  function next() {
    props.setPage((p) => {
      return p + 1;
    });
  }

  function previous() {
    props.setPage((p) => {
      if (p > 0) {
        return p - 1;
      } else {
        return 0;
      }
    });
  }

  return (
    <>
      <div className={styles.container}>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  );
}

export default PaginationBtn;
