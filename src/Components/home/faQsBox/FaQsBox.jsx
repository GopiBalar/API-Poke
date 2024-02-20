import React from "react";
import FaQs from "./FaQs";
import Title from "../../common/Title";
import styles from "../../../styles/home/faQs.module.css";

function FaQsBox() {
  return (
    <div className={styles.faqsBoxContainerOuter}>
      <Title title="Frenquently Asked Questions" />
      <div className={styles.faqsBoxContainerOuter}>
        <FaQs
          que="Lorem ipsum dolor sit amet consectetur adipisicing elit ?"
          ans=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste
        odio ducimus unde in non consequatur sapiente recusandae consectetur
        eveniet?"
        />
        <FaQs
          que="Lorem ipsum dolor sit amet consectetur adipisicing elit ?"
          ans="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nesciunt ab, voluptates debitis fugit unde repudiandae autem dolores quisquam, tenetur fugiat. Beatae sunt inventore necessitatibus?"
        />
        <FaQs
          que="Lorem ipsum dolor sit amet consectetur adipisicing elit ?"
          ans="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nesciunt ab, voluptates debitis fugit unde repudiandae autem dolores quisquam, tenetur fugiat. Beatae sunt inventore necessitatibus?"
        />
        <FaQs
          que="Lorem ipsum dolor sit amet consectetur adipisicing elit ?"
          ans="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nesciunt ab, voluptates debitis fugit unde repudiandae autem dolores quisquam, tenetur fugiat. Beatae sunt inventore necessitatibus?"
        />
      </div>
    </div>
  );
}

export default FaQsBox;
