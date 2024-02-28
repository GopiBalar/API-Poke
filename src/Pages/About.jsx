import React from "react";
import { useLocation, useOutletContext } from "react-router-dom";

function About() {
  const ctx = useOutletContext();
  const location = useLocation();
  console.log("location", location);
  return <div>About {ctx}</div>;
}

export default About;
