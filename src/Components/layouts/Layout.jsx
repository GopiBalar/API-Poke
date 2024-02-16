import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
