import React from "react";

const Email = ({email,setEmail}) => {
  return (
    <div
      style={{
       
        width: "216px",
        height: "auto",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        border: "0.25px solid #ABABAB",
        borderRadius: "10px",
      }}
    >
      <input
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginRight: "10px",
        }}
        type="email"
        placeholder="Email Adress"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
  );
};

export default Email;
