import React from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";

function Contact() {
  const ctx = useOutletContext();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchParams1, setSearchParams1] = useSearchParams();

  const city = searchParams.get("city");
  const age = searchParams1.get("age");

  return (
    <>
      <div>Contact {ctx}</div>
      <h3>{city}</h3>
      <h3>{age}</h3>
      <input
        type="text"
        onChange={(e) => setSearchParams({ city: e.target.value, age: 40 })}
      />
      {/* <button onClick={(e) => setSearchParams1({ age: 40 })}>set Age</button> */}
    </>
  );
}

export default Contact;
