import React from "react";
import { useOutletContext } from "react-router-dom";

function About() {
  const ctx = useOutletContext();
  return <div>About {ctx}</div>;
}

export default About;
