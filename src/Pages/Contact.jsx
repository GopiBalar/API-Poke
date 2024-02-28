import React from "react";
import { useOutletContext } from "react-router-dom";

function Contact() {
  const ctx = useOutletContext();
  
  return <div>Contact {ctx}</div>;
}

export default Contact;
