import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CommonHero from "./Common/CommonHero";
import Footer from "./Common/Footer";
import Header from "./Common/Header";

const SearchForm = () => {
  return (
    <>
      <Header />
      <CommonHero title="BOOK WITH US" ImageSrc="Images/image1.avif" />
      <Container>
        <Box
          sx={{
            bgcolor: "#65c8ff45",
            width: "100%",
            height: "80px",
            borderRadius: "10px",
            mt: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            //,
          }}
        >
          {/* <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "100%" }}>1</Box>
            <Box sx={{ width: "100%" }}>2</Box>
            <Box sx={{ width: "100%" }}>4</Box>
          </Box> */}
          <Grid container spacing={2}>
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  width: "100%",
                  heigth: "100px",
                  bgcolor: "red",
                  p: "0",
                }}
              >
                Meal type
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  width: "100%",
                  heigth: "100%",
                  bgcolor: "red",
                  p: "0",
                }}
              >
                Meal type
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  width: "100%",
                  heigth: "100%",
                  bgcolor: "red",
                  p: "0",
                }}
              >
                Meal type
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default SearchForm;
