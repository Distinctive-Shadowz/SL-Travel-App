import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CommonHero from "../Common/CommonHero";
import TravellersIconOutlined from "@mui/icons-material/PeopleAltOutlined";
import NoMealsIcon from "@mui/icons-material/NoMeals";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
const SearchForm = () => {
  return (
    <>
      <CommonHero title="BOOK WITH US" ImageSrc="Images/image1.avif" />
      <Container>
        <Box
          sx={{
            bgcolor: "#F1C98C",
            width: "100%",
            height: "80px",
            borderRadius: "10px",
            mt: { xs: "1rem", sm: "1.5rem", md: "2rem" },
          }}
        >
          <Grid container spacing={2} sx={{ ".MuiGrid-item ": { pl: "46px" } }}>
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  mt: "-2px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#c97c1a",
                    width: "45px",
                    height: "45px",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "10px",
                    svg: {
                      width: "27px",
                      height: "27px",
                      colro: "#fff",
                    },
                  }}
                >
                  <NoMealsIcon sx={{ color: "#fff" }} />
                </Box>
                <Box
                  sx={{
                    mt: "10px",
                    fontWeight: 600,
                    color: "#884717",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    pl: "1.5rem",
                  }}
                >
                  Meal Type
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  mt: "-2px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#c97c1a",
                    width: "45px",
                    height: "45px",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "10px",
                    svg: {
                      width: "27px",
                      height: "27px",
                      colro: "#fff",
                    },
                  }}
                >
                  <CalendarTodayIcon sx={{ color: "#fff" }} />
                </Box>
                <Box
                  sx={{
                    mt: "10px",
                    fontWeight: 600,
                    color: "#884717",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    pl: "1.5rem",
                  }}
                >
                  How Many Days
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  mt: "-2px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#c97c1a",
                    width: "45px",
                    height: "45px",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "10px",
                    svg: {
                      width: "27px",
                      height: "27px",
                      colro: "#fff",
                    },
                  }}
                >
                  <TravellersIconOutlined sx={{ color: "#fff" }} />
                </Box>
                <Box
                  sx={{
                    mt: "10px",
                    fontWeight: 600,
                    color: "#884717",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    pl: "1.5rem",
                  }}
                >
                  Travellers & Rooms
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{ ".MuiGrid-item ": { pl: "46px", pt: "5rem" } }}
        >
          {/* <Grid sx={{ xs: "6", sm: "6", md: "3" }}>1</Grid>
          <Grid sx={{ xs: "6", sm: "6", md: "3" }}>1</Grid>
          <Grid sx={{ xs: "6", sm: "6", md: "3" }}>1</Grid>
          <Grid sx={{ xs: "6", sm: "6", md: "3" }}>1</Grid> */}
        </Grid>
      </Container>
    </>
  );
};

export default SearchForm;
