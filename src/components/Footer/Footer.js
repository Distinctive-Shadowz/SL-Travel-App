import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import "../Header/Dashboard.css";

// Footer component
const footer = () => {
  return (
    <footer>
      <Box
        bgcolor="#000000"
        color="#ffffff"
        sx={{
          p: 3,
          a: {
            color: "#fff",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
            fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" }
          }
        }}
      >
        <Container>
          <Grid container>
            <Grid item xs={6} sm={2.4}>
              <a href="/">
                <img
                  width="100px"
                  height="20px"
                  src={"/Images/Small_Logo.jpg"}
                  alt="Small_logo"
                />
              </a>
            </Grid>
            <Grid item xs={6} sm={2.4}>
              <Box
                sx={{
                  pb: "10px",
                  alignItems: "flex-start",
                  flexDirection: "center",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                    pb: "10px"
                  }}
                  fontFamily={"Open Sans"}
                  fontWeight={"bold"}
                >
                  Company
                </Typography>

                <a href="about-us">
                  {" "}
                  <Typography
                    sx={{
                      fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" }
                    }}
                  >
                    About Us
                  </Typography>
                </a>

                <Typography
                  fontFamily={"Open Sans"}
                  sx={{
                    fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" }
                  }}
                >
                  Contact Us
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={2.4}>
              <Box
                sx={{
                  pb: "10px",
                  alignItems: "flex-start",
                  flexDirection: "center",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                    pb: "10px"
                  }}
                  fontFamily={"Open Sans"}
                  fontWeight={"bold"}
                >
                  Help
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" }
                  }}
                >
                  Help / faqs
                </Typography>
                <Typography
                  fontFamily={"Open Sans"}
                  sx={{
                    fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" }
                  }}
                >
                  Cancel your Trip
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={2.4}>
              <Box
                sx={{
                  pb: "10px",
                  alignItems: "flex-start",
                  flexDirection: "center",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                    pb: "10px"
                  }}
                  fontFamily={"Open Sans"}
                  fontWeight={"bold"}
                >
                  More
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" }
                  }}
                >
                  Best Travel Destinations
                </Typography>
                <Typography
                  fontFamily={"Open Sans"}
                  sx={{
                    fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" }
                  }}
                >
                  Feedback
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={2.4}>
              <Box
                sx={{
                  pb: "10px",
                  alignItems: "flex-start",
                  flexDirection: "center",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                    pb: "10px"
                  }}
                  fontFamily={"Open Sans"}
                  fontWeight={"bold"}
                >
                  Terms
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" }
                  }}
                >
                  Privacy Policy
                </Typography>
                <Typography
                  fontFamily={"Open Sans"}
                  sx={{
                    fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" }
                  }}
                >
                  Terms of Use
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <img
          className="Rights_image"
          width="15%"
          height="100%"
          src={"Images/Rights.jpg"}
          alt="Rights_image"
        />
      </Box>
    </footer>
  );
};

export default footer;
