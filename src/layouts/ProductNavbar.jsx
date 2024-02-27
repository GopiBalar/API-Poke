import React from "react";
import { Link } from "react-router-dom";

function ProductNavbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/product/new">Product New</Link>
        </li>
        <li>
          <Link to="/product/1">Product Details</Link>
        </li>
        <li>
          <Link to="/product/2">Product Details</Link>
        </li>
      </ul>
    </div>
  );
}

export default ProductNavbar;
