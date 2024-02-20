import React from "react";

function Image(props) {
  const { name, img } = props;

  // console.log("name & img", name, img);
  return (
    <div>
      <img src={img} alt={name} />
    </div>
  );
}

export default Image;
