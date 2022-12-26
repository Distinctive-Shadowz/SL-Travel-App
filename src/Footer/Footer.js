import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Small_logo from '../Images/Small_Logo.jpg';
import Rights from '../Images/Rights.jpg';
import '../Header/Dashboard.css';

// Footer component
const footer = () => {
    return (
      <footer>
       <Box bgcolor="#000000" color="#ffffff" sx={{ p: 3 }}>
       <img width='100px' height='100%' src={Small_logo}/>
      <Container>
        <Grid container>
          <Grid item xs={6} sm={3}>
            <Box sx={{ pb: "10px" }}>
              <Typography
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                  pb: "10px",
                }}
                fontFamily={"Open Sans"}
                fontWeight={"bold"}
              >
                Company
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
                }}
              >
                About Us
              </Typography>
              <Typography
                fontFamily={"Open Sans"}
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
                }}
              >
                Contact Us
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box sx={{ pb: "10px" }}>
              <Typography
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                  pb: "10px",
                }}
                fontFamily={"Open Sans"}
                fontWeight={"bold"}
              >
                Help
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
                }}
              >
                Help / faqs
              </Typography>
              <Typography
                fontFamily={"Open Sans"}
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
                }}
              >
                Cancel your Trip
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box sx={{ pb: "10px" }}>
              <Typography
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                  pb: "10px",
                }}
                fontFamily={"Open Sans"}
                fontWeight={"bold"}
              >
                More
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
                }}
              >
                Best Travel Destinations
              </Typography>
              <Typography
                fontFamily={"Open Sans"}
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
                }}
              >
                Feedback
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box sx={{ pb: "10px" }}>
              <Typography
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                  pb: "10px",
                }}
                fontFamily={"Open Sans"}
                fontWeight={"bold"}
              >
                Terms
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                fontFamily={"Open Sans"}
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
                }}
              >
                Terms of Use
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <img className="Rights_image" width='15%' height='100%' src={Rights}/>
    </Box>
      </footer>
    );
  };

  export default footer;