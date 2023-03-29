import {
  Box,
  Grid,
  Typography,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CommonHero from "./Common/CommonHero";
import Footer from "./Common/Footer";
import Header from "./Common/Header";

const SearchForm = () => {
  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 20,
      label: "300",
    },
    {
      value: 37,
      label: "700",
    },
    {
      value: 100,
      label: "1000",
    },
  ];
  function valuetext(value) {
    return `${value}`;
  }

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Header />
      <CommonHero title="BOOK WITH US" ImageSrc="Images/image.avif" />
      <Container>
        <Box
          sx={{
            // bgcolor: "#65c8ff45",
            bgcolor: "#e6980f80",
            width: "100%",
            height: "80px",
            borderRadius: "10px",
            mt: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            //,
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              ".MuiGrid-item": {
                px: "26px",
              },
            }}
          >
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  bgcolor: "#ffb500",
                  p: "0",
                  borderRadius: "15px",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    position: "relative",
                    top: "12px",
                    color: "#671710",
                    fontWeight: 500,
                    fontSize: "1.2rem",
                  }}
                >
                  {" "}
                  Meal Type
                </Typography>

                <Box sx={{ width: 300 }}></Box>
              </Box>
              <Slider
                sx={{ color: "#d27419" }}
                aria-label="Always visible"
                defaultValue={80}
                getAriaValueText={valuetext}
                step={10}
                marks={marks}
                valueLabelDisplay="on"
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  bgcolor: "#ffb500",
                  p: "0",
                  borderRadius: "15px",
                }}
              >
                <FormControl
                  sx={{
                    pr: "260px",
                    minWidth: 120,
                    ".css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input ":
                      { pr: "320px", mt: "10px" },
                    ".css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":
                      {
                        textAlign: "center",
                        position: "relative",

                        color: "#671710",
                        fontWeight: 500,
                        fontSize: "1.2rem",
                      },
                  }}
                  size="small"
                >
                  <InputLabel id="demo-select-small">How many days</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>one</MenuItem>
                    <MenuItem value={20}>Two</MenuItem>
                    <MenuItem value={30}>Three</MenuItem>
                    <MenuItem value={30}>Four</MenuItem>
                    <MenuItem value={30}>Five</MenuItem>
                    <MenuItem value={30}>Six</MenuItem>
                    <MenuItem value={30}>Seven</MenuItem>
                  </Select>
                </FormControl>
                {/* <Typography
                  sx={{
                    textAlign: "center",
                    position: "relative",
                    top: "12px",
                    color: "#671710",
                    fontWeight: 500,
                    fontSize: "1.2rem",
                  }}
                >
                  {" "}
                  How many days
                </Typography> */}
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  bgcolor: "#ffb500",
                  p: "0",
                  borderRadius: "15px",
                }}
              >
                <FormControl
                  sx={{
                    pr: "260px",
                    minWidth: 120,
                    ".css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input ":
                      { pr: "320px", mt: "10px" },
                    ".css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":
                      {
                        textAlign: "center",
                        position: "relative",

                        color: "#671710",
                        fontWeight: 500,
                        fontSize: "1.2rem",
                      },
                  }}
                  size="small"
                >
                  <InputLabel id="demo-select-small">
                    No of travellers
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>one</MenuItem>
                    <MenuItem value={20}>Two</MenuItem>
                    <MenuItem value={30}>Three</MenuItem>
                    <MenuItem value={30}>Four</MenuItem>
                    <MenuItem value={30}>Five</MenuItem>
                    <MenuItem value={30}>Six</MenuItem>
                    <MenuItem value={30}>Seven</MenuItem>
                  </Select>
                </FormControl>
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
