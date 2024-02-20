import React from "react";
import styles from "../../../styles/home/counterBox.module.css";
import CountUp from "react-countup";

function Counter(props) {
  return (
    <div>
      <div className={styles.counterContainer}>
        <h1>
          <CountUp end={props.num} />+
        </h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Counter;
