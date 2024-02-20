import React from "react";
import Counter from "./Counter.jsx";
import styles from "../../../styles/home/counterBox.module.css";
import Title from "../../common/Title.jsx";

function CounterBox() {
  const data = [
    { num: 100, desc: "Lorem ipsum dolor sit amet" },
    { num: 200, desc: "Lorem ipsum dolor sit amet." },
    { num: 300, desc: "Lorem ipsum dolor sit amet." },
    { num: 400, desc: "Lorem ipsum dolor sit amet." },
  ];

  const component = data.map(function (value, index) {
    return <Counter num={value.num} desc={value.desc} key={index} />;
  });

  return (
    <div className={styles.counterBoxOuter}>
      <Title
        title="Our Achievement"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, reiciendis."
      />
      <div className={styles.counterBoxInner}>{component}</div>
    </div>
  );
}

export default CounterBox;
