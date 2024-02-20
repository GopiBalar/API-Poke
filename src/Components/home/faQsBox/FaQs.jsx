import React, { useState } from "react";
import styles from "../../../styles/home/faQs.module.css";

function FaQs(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function onExpend() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div
      className={styles.faqsContainer}
      style={
        {
          // transition: "all 300ms linear",
          // backgroundColor: isExpanded ? "peachpuff" : "bisque",
        }
      }
    >
      <div className={styles.faqsQueContainer}>
        <i className="fa-regular fa-circle-question"></i>
        <p>{props.que}</p>
        <i
          className="fa-solid fa-angle-up"
          onClick={onExpend}
          style={{
            cursor: "pointer",
            transition: "all 400ms linear",
            rotate: isExpanded ? "0deg" : "180deg",
          }}
        ></i>
      </div>
      <p
        className={styles.faqsAnsContainer}
        style={{
          maxHeight: isExpanded ? "300px" : "0px",
          overflow: "hidden",
          transition: "all 400ms linear",
        }}
      >
        {props.ans}
      </p>
    </div>
  );
}

export default FaQs;
