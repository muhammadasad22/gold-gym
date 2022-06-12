import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HeroBannerImage from "./../../src/assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "70px" },
      }}
    >
      <Typography
        fontFamily="sans-serif"
        color={"#ff2625"}
        fontWeight="600"
        fontSize={"32px"}
        mb={5}
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight={"700"}
        sx={{ fontSize: { lg: "54px", xs: "40px" } }}
        mb={"23px"}
        mt={"30px"}
        fontFamily="sans-serif"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography
        fontSize={"22px"}
        lineHeight="35px"
        mb={2}
        fontFamily="sans-serif"
      >
        Check out the effective exercises personalized to you
      </Typography>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#ff2625",
          padding: "15px",
          textAlign: "center",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
          marginTop: "30px",
          fontFamily: "sans-serif",
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        fontFamily="sans-serif"
        color="#ff2625"
        paddingLeft={"170px"}
        paddingTop={"15px"}
        sx={{ opacity: "0.1", display: { lg: "block", xs: "none" } }}
        fontSize="220px"
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="Banner"
        className="hero-banner-img"
        style={{ marginTop: "0px" }}
      />
    </Box>
  );
};

export default HeroBanner;
