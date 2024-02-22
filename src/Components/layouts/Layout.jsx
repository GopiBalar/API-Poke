import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import "../../index.css";

function Layout() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <Outlet />
      <a
        id="whatsupBtn"
        style={{
          position: "fixed",
          width: "50px",
          height: "50px",
          bottom: "50px",
          right: "50px",
          borderRadius: "50px",
        }}
        aria-label="Chat on WhatsApp"
        href="https://wa.me/9824855859"
      >
        <img
          src="https://raw.githubusercontent.com/manikant-codes/react-course-files-batch-2/d09dd7161196dbc8db3d48625f9edf3a3aedc02f/public/images/whatsapp-icon.svg"
          style={{
            color: "#24f527",
            width: "100%",
            height: "100%",
            borderRadius: "2px",
          }}
          alt="Chat on Whatsup"
        />
      </a>
      <Footer />
    </div>
  );
}

export default Layout;
