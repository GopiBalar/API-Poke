import React from "react";
import styles from "../../styles/common/title.module.css"

function Title(props) {
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
}

export default Title;
