import React from "react";
import styles from "../../../styles/home/productBox.module.css";

function ProductCard(props) {
  return (
    <div className={styles.productCardContainer}>
      <div className={styles.productImgContainer}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.productDescContainer}>
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
