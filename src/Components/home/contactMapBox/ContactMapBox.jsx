import React from "react";
import Address from "./Address";
import Form from "./Form";
import styles from "../../../styles/home/contactMap.module.css";
import Title from "../../common/Title";

function ContactMapBox() {
  return (
    <div className={styles.contactMapBoxOuter}>
      <Title
        title="Contact"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <div className={styles.contactMapBox}>
        <Address />
        <Form />
      </div>
    </div>
  );
}

export default ContactMapBox;
