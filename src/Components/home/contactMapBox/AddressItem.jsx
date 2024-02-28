import React from "react";
import styles from "../../../styles/home/contactMap.module.css";

function AddressItem(props) {
  return (
    <div className={styles.addressItemContainer}>
      <div className={styles.addItemIconContainer}>
        <i className={props.icon}></i>
      </div>
      <div className={styles.addItemDescContainer}>
        <p>{props.title}</p>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default AddressItem;
