import React from "react";

function PaginationBtn(props) {
  function next() {
    props.setPage((p) => {
      return p + 1;
    });
  }

  function previous() {
    props.setPage((p) => {
      if (p > 0) {
        return p - 1;
      } else {
        return 0;
      }
    });
  }

  const dStyle = {
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
    gap: "16px",
    // backgroundColor: "#040D12",
    // boxShadow: "black 0 2px 4px 0,0 2px 4px 0",
    padding: "12px 28px",
    zIndex: 1,
    opacity: "0.94",
  };

  const btnStyle = {
    padding: "0.6rem 1.3rem",
    fontWeight: 700,
    cursor: "pointer",
    border: "none",
    marginLeft: "20px",
    backgroundColor: "#D63484",
  };

  return (
    <>
      <div style={dStyle}>
        <button style={btnStyle} onClick={previous}>
          Previous
        </button>
        <button style={btnStyle} onClick={next}>
          Next
        </button>
      </div>
    </>
  );
}

export default PaginationBtn;
