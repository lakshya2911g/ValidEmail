import React from "react";
import { Box, Typography } from "@mui/material";

const HeadText = ({ headText, justify }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: justify,
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: "2.4rem",
          fontWeight: 500,
          fontStyle: "bold",
          color: "#112949",
          textAlign:"center",
          wordWrap: "break-word",
          "@media (max-width: 480px)": {
           width:"50%",
          },
          
        }}
      >
        {headText}
      </Typography>
    </Box>
  );
};

export default HeadText;
