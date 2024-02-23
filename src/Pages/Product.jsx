import React from "react";
import { useOutletContext } from "react-router-dom";

function Product() {
  const ctx = useOutletContext();
  return <div>Product {ctx}</div>;
}

export default Product;
