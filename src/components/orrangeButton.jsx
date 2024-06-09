import React from "react";

const Orrange = ({handleSubmit}) => {
  return (
    <button
      style={{
        
        width: "150px",
        height: "40px",
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#EA7B2C",
        color: "white",
        cursor: "pointer",
      }}
      onClick={handleSubmit}
    >
      Contact Me
    </button>
  );
};

export default Orrange;
