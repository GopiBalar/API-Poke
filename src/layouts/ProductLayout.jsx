import React from "react";
import ProductNavbar from "./ProductNavbar";
import { Outlet } from "react-router-dom";

function ProductLayout() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "300px 1fr" }}>
      <ProductNavbar />
      <Outlet />
    </div>
  );
}

export default ProductLayout;
