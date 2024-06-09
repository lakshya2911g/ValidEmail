import React from "react";
import img1 from "../Assets/Research@4x-5.png";
import img2 from "../Assets/Research@4x-2.png";
import img3 from "../Assets/Research@4x-1.png";
import img4 from "../Assets/Research@4x-4.png";
import img5 from "../Assets/Research@4x.png";
import img6 from "../Assets/Research@4x-3.png";
import WorkCard from "./workCard";
import { Box } from "@mui/material";

const Cards = () => {
  const cardData = [
    {
      image: img1,
      title1: "Presentation",
      title2: "Design",
      disc: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
    {
      image: img2,
      title1: "Audio - Visual",
      title2: "Production",
      disc: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
    {
      image: img3,
      title1: "Translation",
      title2: "Services",
      disc: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
    {
      image: img4,
      title1: "Graphic",
      title2: "Design",
      disc: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
    {
      image: img5,
      title1: "Research &",
      title2: "Analytics",
      disc: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
    {
      image: img6,
      title1: "Data",
      title2: "Processing",
      disc: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "start",
          height: "auto",
          flexWrap: "wrap",
          margin: "1rem 0",
        }}
      >
        {cardData.map((card, index) => (
          <WorkCard key={index} {...card} />
        ))}
      </Box>
    </>
  );
};

export default Cards;
