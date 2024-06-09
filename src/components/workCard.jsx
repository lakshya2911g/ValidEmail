import { Box, Typography } from "@mui/material";
import React from "react";

const WorkCard = ({ image, title1, title2, disc }) => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        height: "225px", // Change height to auto to allow flexibility
        width: "225px",
        display: "flex",
        flexDirection: "column",
        margin: "2rem 0",
        overflow: "hidden",
        bgcolor: "#112949",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <img src={image} alt="imag" style={{margin:"1.25rem"}} />
        <Box
          sx={{ display: "flex", flexDirection: "column", color: "#3CC3F2", marginTop:"1.25rem" }}
        >
          <Typography>{title1}</Typography>
          <Typography>{title2}</Typography>
        </Box>
        
      </Box>
      <Typography sx={{color:"#FFFFFF",textAlign:'left', margin:"1rem" }}>
            {disc}
        </Typography>
    </Box>
  );
};

export default WorkCard;
