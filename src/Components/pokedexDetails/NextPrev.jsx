import React from "react";

function NextPrev(props) {
  const { number, setName } = props;

  function next() {
    if (number < 1025) {
      setName(number + 1);
    } else {
      setName(1);
    }
  }

  function previous() {
    if (number > 1) {
      setName(number - 1);
    } else {
      setName(1025);
    }
  }

  return (
    <div>
      <button onClick={next}>Next</button>
      <button onClick={previous}>Previous</button>
    </div>
  );
}

export default NextPrev;
