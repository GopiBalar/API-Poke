import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import src from "./../../src/index.css"

function NotFound() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer(timer - 1);
      if (timer === 0) {
        navigate("/");
      }
      clearInterval(id);
    }, 1000);
  }, [timer, navigate]);

  function handleClick() {
    navigate("/");
  }
  return (
    <div
      style={{
        textAlign: "center",
        margin: "0 3rem",
      }}
    >
      <h1>NotFound</h1>
      <hr />
      <h2>Timer :0{timer}</h2>
      <button onClick={handleClick}>Go Home</button>
    </div>
  );
}

export default NotFound;
