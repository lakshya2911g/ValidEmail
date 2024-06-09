import { Box, Typography } from "@mui/material";
import React from "react";
import HeadText from "./headText";

const Detail = () => {
  return (
    <Box
      sx={{
        width: "45rem",
      }}
    >
      <HeadText headText={"A Suite of Business Support Services"} />

      <Box>
        <Typography
          sx={{
            width: "40.15rem",
            color: "#112949",
            fontSize: "1.5rem",
            fontWeight: 400,
            letterSpacing: "0.03em",
            paddingY: "3.5rem",
            textAlign: "justify",
            "@media (max-width: 480px)": {
              width: "50%",
              textAlign: "center",
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed
        </Typography>
      </Box>
    </Box>
  );
};

export default Detail;
