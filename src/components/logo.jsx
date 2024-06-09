import React from "react";
import logo from "../Assets/EZ Works Blue.png";
import { Box } from "@mui/material";
const Logo = () => {
  return (
    <Box sx={{
      flex: "1",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      margin:"3.5rem",
      "@media (max-width: 850px)": {
        justifyContent: "center"
      },
    }}>
      <img
        src={logo}
        alt="logo"
        style={{
          width: "350px",
          height: "150px",
          objectFit: "contain",
          
        }}
      />
    </Box>
  );
};

export default Logo;
