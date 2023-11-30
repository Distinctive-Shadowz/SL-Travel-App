import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

import { useNavigate } from "react-router-dom";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Backdrop
} from "@mui/material";
import CalendarStartIcon from "@mui/icons-material/TodayRounded";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TrainIcon from "@mui/icons-material/Train";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Person from "@mui/icons-material/Person";
import People from "@mui/icons-material/People";
import Apartment from "@mui/icons-material/Apartment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Route from "../Route/Route";
function FormSection() {
  const navigate = useNavigate();
  const startingFromRef = useRef(null);
  const destinationRef = useRef(null);
  const departureTimeRef = useRef(null);
  const departureDateRef = useRef(null);
  const arrivalDateRef = useRef(null);
  const vehicleRef = useRef(null);

  const [departureTime, setDepartureTime] = useState("");

  // radio btn
  const [selectedValue, setSelectedValue] = React.useState("Car");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const startingFrom = startingFromRef?.current?.value;
  const destination = destinationRef?.current?.value;
  const departureDate = departureDateRef?.current?.value;
  const arrivalDate = arrivalDateRef?.current?.value;

  const handlePrint = () => {
    const printContents = `
      <h2>Trip Details:</h2>
      <p><strong>From:</strong> ${startingFrom}</p>
      <p><strong>To:</strong> ${destination}</p>
      <p><strong>Departure Date:</strong> ${departureDate}</p>
      <p><strong>Arrival Date:</strong> ${arrivalDate}</p>
      <p><strong>Vehicle:</strong>  ${selectedValue}</p>
      <p><strong>Departure Time:</strong> ${departureTime}</p>
    `;

    const printWindow = window.open("", "_blank");
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Trip Details</title>
          <style>
            @media print {
              body {
                padding: 20px;
              }
            }
          </style>
        </head>
        <body>${printContents}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  };

  const handlePrintlink = (event) => {
    event.preventDefault();
    // Your existing code for extracting form values...

    // Navigate to the map page with form values
    navigate(
      `/places?from=${startingFrom ? startingFrom : ""}&to=${
        destination ? destination : ""
      }&depdates=${departureDate}&arrdates=${arrivalDate}&vehicle=${selectedValue}&deptime=${departureTime}`
    );
  };
  // backdrop
  const [backDropOpen, setBackDropOpen] = useState(false);
  const onFocusSearchForm = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setBackDropOpen(true);
  };

  return (
    <>
      <>
        {/* <input
            id="startingFrom"
            className="input_style-one"
            placeholder="Starting From"
            ref={startingFromRef}
          /> */}
        {/* ----------------------------- Leaving From ----------------------------- */}

        <Box
          component="form"
          sx={{
            transition: "all 0.5s",
            bgcolor: "#fff",
            minHeight: "5rem",
            width: "50%",
            left: "25%",
            p: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "40px",
            position: "relative",
            backdropFilter: "blur(10px)",
            border: "6px solid #000",
            Zindex: 2000,
            ".MuiOutlinedInput-notchedOutline": {
              border: "0px solid #fff",
              ml: -"10px"
            },
            ".MuiInputLabel-root": {
              borderBottom: "1px solid #777",
              width: "100%",
              ml: "-10px",
              pl: "0px"
            },
            ".css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
              width: "100%",
              ml: -"10px",
              pl: "0px",
              mt: "-12px"
            },
            ".MuiTypography-root": {
              textAlign: "left",
              ml: "5px",
              color: "#444",
              fontWeight: 600
            }
          }}
          autoComplete="off"
          onFocus={() => {
            onFocusSearchForm();
          }}
        >
          <Grid container spacing={2}>
            <Grid item lg={12}>
              <p className="blink_me">Your Trip Starts From Here...</p>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              lg={6}
              display="flex"
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Box
                sx={{
                  minWidth: "60px",
                  height: "60px",
                  alignItems: "center",
                  bgcolor: "#C4D7B482",
                  borderRadius: "50%",
                  mr: "8px",
                  display: "grid",
                  placeItems: "center"
                }}
              >
                <FlightTakeoffRoundedIcon sx={{ color: "rgb(85 131 47)" }} />
              </Box>
              <Box sx={{ width: "calc(100% - 0px)", position: "relative" }}>
                <Typography
                  variant="body2"
                  sx={{
                    display: "-webkit-box",
                    lineHeight: 1.2,
                    overflow: "hidden",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    mt: "-1px",
                    color: "#777"
                  }}
                >
                  Leaving from
                </Typography>
                {/* <TextField
                  id="outlined-controlled"
                  label="Destination "
                  // value={name}
                  inputRef={startingFromRef}
                /> */}
                <input
                  id="startingFrom"
                  className="input_style-one"
                  placeholder="Leaving from"
                  ref={startingFromRef}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              lg={6}
              display="flex"
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Box
                sx={{
                  minWidth: "60px",
                  height: "60px",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#C4D7B482",
                  borderRadius: "50%",
                  mr: "8px",
                  display: "grid",
                  placeItems: "center"
                }}
              >
                <FlightTakeoffRoundedIcon sx={{ color: "rgb(85 131 47)" }} />
              </Box>
              <Box sx={{ width: "calc(100% - 0px)", position: "relative" }}>
                <Typography
                  variant="body2"
                  sx={{
                    display: "-webkit-box",
                    lineHeight: 1.2,
                    overflow: "hidden",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    mt: "-1px",
                    color: "#777"
                  }}
                >
                  Going to
                </Typography>
                <input
                  id="destination"
                  className="input_style-one"
                  placeholder="Going to"
                  ref={destinationRef}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              display="flex"
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Box
                sx={{
                  minWidth: "60px",
                  height: "60px",
                  alignItems: "center",
                  bgcolor: "#C4D7B482",
                  borderRadius: "50%",
                  mr: "8px",
                  display: "grid",
                  placeItems: "center"
                }}
              >
                <CalendarStartIcon sx={{ color: "rgb(85 131 47)" }} />
              </Box>
              <Box sx={{ width: "calc(100% - 0px)", position: "relative" }}>
                <Typography
                  variant="body2"
                  sx={{
                    display: "-webkit-box",
                    lineHeight: 1.2,
                    overflow: "hidden",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    mt: "-1px",
                    color: "#777"
                  }}
                >
                  Departure Date
                </Typography>
                <input
                  id="departureDate"
                  className="input_style-three"
                  type="date"
                  ref={departureDateRef}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              display="flex"
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Box
                sx={{
                  minWidth: "60px",
                  height: "60px",
                  alignItems: "center",
                  bgcolor: "#C4D7B482",
                  borderRadius: "50%",
                  mr: "8px",
                  display: "grid",
                  placeItems: "center"
                }}
              >
                <CalendarStartIcon sx={{ color: "rgb(85 131 47)" }} />
              </Box>
              <Box sx={{ width: "calc(100% - 0px)", position: "relative" }}>
                <Typography
                  variant="body2"
                  sx={{
                    display: "-webkit-box",
                    lineHeight: 1.2,
                    overflow: "hidden",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    mt: "-1px",
                    color: "#777"
                  }}
                >
                  Arrival Date
                </Typography>
                <input
                  id="arrivalDate"
                  className="input_style-four"
                  type="date"
                  ref={arrivalDateRef}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              lg={12}
              sx={{
                gap: "5rem",
                m: "1.5rem",
                display: "flex",
                flexDirection: "row",
                ".MuiTypography-root": {
                  textAlign: "left",
                  ml: "5px",
                  color: "#444",
                  fontWeight: 600,
                  fontSize: "14px"
                }
              }}
            >
              <RadioGroup
                aria-label="Your plan"
                name="people"
                defaultValue="Individual"
              >
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    maxHeight: "fit-content",
                    maxHeight: "1.2rem",
                    gap: "1rem",
                    "--List-gap": "0.5rem",
                    "--ListItem-paddingY": "1rem",
                    "--ListItem-radius": "8px",
                    "--ListItemDecorator-size": "28px"
                  }}
                >
                  {["Motor Cycle", "Car", "Bus", "Train"].map((item, index) => (
                    <ListItem
                      variant="outlined"
                      key={item}
                      sx={{ boxShadow: "sm" }}
                    >
                      <ListItemDecorator>
                        {
                          [
                            <TwoWheelerIcon />,
                            <DirectionsCarIcon />,
                            <DirectionsBusIcon />,
                            <TrainIcon />
                          ][index]
                        }
                      </ListItemDecorator>
                      <Radio
                        overlay
                        value={item}
                        checked={selectedValue === item}
                        onChange={handleChange}
                        id="vehicle"
                        inputRef={vehicleRef}
                        label={item}
                        sx={{
                          flexGrow: 1,
                          flexDirection: "row-reverse",
                          ".css-8kj30y-JoyRadio-icon": {
                            color: "rgb(85 131 47)"
                          }
                        }}
                        slotProps={{
                          action: ({ checked }) => ({
                            sx: (theme) => ({
                              ...(checked && {
                                inset: -1,
                                border: "2px solid",
                                borderColor: "rgb(85 131 47)",
                                ".css-8kj30y-JoyRadio-icon": {
                                  color: "rgb(85 131 47)"
                                }
                              })
                            })
                          })
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </RadioGroup>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              lg={6}
              display="flex"
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Box
                sx={{
                  minWidth: "60px",
                  height: "60px",
                  alignItems: "center",
                  bgcolor: "#C4D7B482",
                  borderRadius: "50%",
                  mr: "8px",
                  display: "grid",
                  placeItems: "center"
                }}
              >
                <AccessTimeIcon sx={{ color: "rgb(85 131 47)" }} />
              </Box>
              <Box sx={{ width: "calc(100% - 0px)", position: "relative" }}>
                <Typography
                  variant="body2"
                  sx={{
                    display: "-webkit-box",
                    lineHeight: 1.2,
                    overflow: "hidden",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    mt: "-1px",
                    color: "#777"
                  }}
                >
                  Departure Time
                </Typography>
                <input
                  id="departureTime"
                  className="input_style-five"
                  type="time"
                  ref={departureTimeRef}
                  onChange={(e) => setDepartureTime(e.target.value)}
                />
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: "2rem",
                  justifyContent: "center",
                  mt: "2rem",
                  mb: "1rem"
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                  onClick={handlePrint}
                  sx={{ height: "3.2rem", width: "120px" }}
                >
                  Print
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handlePrintlink}
                  sx={{ height: "3.2rem", width: "130px" }}
                >
                  Go to Map
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: -1,
            backdropFilter: "blur(10px)",
            display: { xs: "none", sm: "block" }
          }}
          open={backDropOpen}
          onClick={() => setBackDropOpen(false)}
        ></Backdrop>
      </>
    </>
  );
}

function Home() {
  return (
    <div className="Home_body">
      <div className="Title"></div>
      <div className="Quote">
        <h1>
          Your Complete Trip <br /> &emsp;&emsp;&emsp;&emsp;&emsp; In One Place
        </h1>
      </div>
      <div>
        <FormSection />
      </div>

      <div>
        <ul className="Advertise">
          <li>
            <h3>Popular Attraction</h3>
            <a
              href="https://www.sltda.gov.lk/en/tourist-attractions"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="Adv_img"
                width="300px"
                height="200px"
                src={"/Images/Popular_attraction.jpg"}
                alt="Adv_img"
              />
            </a>
          </li>
          <li>
            <h3>Weather Updates</h3>
            <a
              href="https://weather.com/weather/today/l/6.69,80.41?par=google"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="Adv_img"
                width="300px"
                height="200px"
                src={"/Images/weather_update.jpeg"}
                alt="Adv_img"
              />
            </a>
          </li>
          <li>
            <h3>Tourism News</h3>
            <a
              href="https://www.sltda.gov.lk/en/tourism-news"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="Adv_img"
                width="300px"
                height="200px"
                src={"/Images/tourism_news.jpg"}
                alt="Adv_img"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="Title">
        <p></p>
      </div>
    </div>
  );
}

export default Home;
