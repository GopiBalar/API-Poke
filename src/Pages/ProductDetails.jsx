import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();

  return <div>Product {params.id} Details</div>;
}

export default ProductDetails;
