import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductLayout from "../layouts/ProductLayout";
import Product from "../Pages/Product";
import ProductNew from "../Pages/ProductNew";
import ProductDetails from "../Pages/ProductDetails";
import NotFound from "../Pages/NotFound";

function ProductRoutes() {
  return (
    <Routes>
    <Route path="/product" element={<ProductLayout />}>
      <Route index element={<Product />} />
      <Route path="new" element={<ProductNew />} />
      <Route path=":id" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
    </Route></Routes>
  );
}

export default ProductRoutes;
