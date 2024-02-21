import React from "react";
import styles from "../../styles/common/modal.module.css";

function Modal(props) {
  return (
    <div className={styles.modalContainerOuter}>
      <div className={styles.modalContainer}>
        <div>
          <h2>{props.title}</h2>
        </div>
        <div>
          <p>{props.componet}</p>
        </div>
        <div className={styles.modalContainerFooter}>
          <button onClick={props.onClose}>{props.closeBtnName}</button>
          {props.showConfirmBtn && (
            <button onClick={props.onConfirm}>{props.confirmBtnName}</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
