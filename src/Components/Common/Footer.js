import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <Box
      bgcolor="#000000"
      color="#ffffff"
      sx={{ py: 3, position: "absolute", bottom: 0, width: "100% " }}
    >
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
    </Box>
  );
};

export default Footer;
