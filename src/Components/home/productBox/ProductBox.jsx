import React from "react";
import Title from "../../common/Title";
import ProductCard from "./ProductCard";
import styles from "../../../styles/home/productBox.module.css";

function ProductBox() {
  return (
    <div className={styles.productBoxContainerOuter}>
      <Title title="Reset Blog Posts" />
      <div className={styles.productBoxContainerInner}>
        <ProductCard
          src="https://cdn.pixabay.com/photo/2016/08/16/07/28/pokemon-1597290_640.jpg"
          title="Pokemon1"
          desc="Lorem ipsum dolor sit amet."
        />
        <ProductCard
          src="https://i.pinimg.com/originals/0d/f8/c0/0df8c0eb639c780b2b503c5f6b0be01c.png"
          title="Pokemon2"
          desc="Lorem ipsum dolor sit amet."
        />
        <ProductCard
          src="https://i.redd.it/65mdjzt15zka1.jpg"
          title="Pokemon3"
          desc="Lorem ipsum dolor sit amet."
        />
        <ProductCard
          src="https://bleedingcool.com/wp-content/uploads/2018/05/pjimage-15-900x900.jpg"
          title="Pokemon4"
          desc="Lorem ipsum dolor sit amet."
        />
      </div>
    </div>
  );
}

export default ProductBox;
