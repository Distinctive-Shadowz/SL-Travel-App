import { Container, Box, Typography } from "@mui/material";
import React from "react";

const CommonHero = ({ title, ImageSrc }) => {
  return (
    <>
      <Box
        sx={{
          maxHeight: "40vh",
          height: "40vh",
          minHeight: "200px",
          width: "100%",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "40vh",
            objectFit: "cover",
            position: "absolute",
          }}
          src={ImageSrc}
          alt="hero"
        />
        <Box sx={{ pt: "4rem" }}>
          <Container>
            <Typography
              variant="h1"
              sx={{
                position: "absolute ",
                textAlign: "Left",
                color: "#fff",
                textShadow: " #00000033 0px 1px 4px",
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                fontFamily: "Lato, sans-serif",
                fontWeight: "700",
                pt: { xs: "3rem", sm: "4rem", md: "6rem" },
              }}
            >
              {title}
            </Typography>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default CommonHero;
