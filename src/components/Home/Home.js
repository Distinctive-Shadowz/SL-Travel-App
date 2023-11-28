import React, { useEffect, useRef } from "react";
import "./Home.css";
import Link from "@mui/material/Link";
import {
  Container,
  Box,
  TextField,
  Autocomplete,
  Typography
} from "@mui/material";
import Route from "../Route/Route";

function FormSection() {
  const startingFromRef = useRef(null);
  const destinationRef = useRef(null);
  const departureTimeRef = useRef(null);
  const departureDateRef = useRef(null);
  const arrivalDateRef = useRef(null);
  const vehicleRef = useRef(null);

  const handlePrint = () => {
    const startingFrom = startingFromRef.current.value;
    const destination = destinationRef.current.value;
    const departureTime = departureTimeRef.current.value;
    const departureDate = departureDateRef.current.value;
    const arrivalDate = arrivalDateRef.current.value;
    const vehicle = document.querySelector(
      'input[name="Vehicle"]:checked'
    ).value;

    const printContents = `
      <h2>Trip Details:</h2>
      <p><strong>From:</strong> ${startingFrom}</p>
      <p><strong>To:</strong> ${destination}</p>
      <p><strong>Departure Date:</strong> ${departureDate}</p>
      <p><strong>Arrival Date:</strong> ${arrivalDate}</p>
      <p><strong>Vehicle:</strong> ${vehicle}</p>
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

  return (
    <form>
      <div className="Trip_start">
        <p className="blink_me">Your Trip Starts From Here...</p>
        {/* <div> */}
        <FromTo />
        <p>
          <label htmlFor="departureDate">Departure Date:</label>
          <input
            id="departureDate"
            className="input_style-three"
            type="date"
            ref={departureDateRef}
          />
        </p>
        <p>
          <label htmlFor="arrivalDate">Arrival Date:</label>
          <input
            id="arrivalDate"
            className="input_style-four"
            type="date"
            ref={arrivalDateRef}
          />
        </p>
      </div>
      <ul className="Vehicle_select">
        <li>
          <h5>Motor Cycle</h5>
          <input
            type="radio"
            name="Vehicle"
            value="Motor Cycle"
            ref={vehicleRef}
          />
        </li>
        <li>
          <h5>Car</h5>
          <input type="radio" name="Vehicle" value="Car" ref={vehicleRef} />
        </li>
        <li>
          <h5>Bus</h5>
          <input type="radio" name="Vehicle" value="Bus" ref={vehicleRef} />
        </li>
        <li>
          <h5>Train</h5>
          <input type="radio" name="Vehicle" value="Train" ref={vehicleRef} />
        </li>
        <li>
          <h5>Flight</h5>
          <input type="radio" name="Vehicle" value="Flight" ref={vehicleRef} />
        </li>
      </ul>
      <div className="Trip_start2">
        <p>
          Departure Time :
          <input
            id="departureTime"
            className="input_style-five"
            type="time"
            ref={departureTimeRef}
          />
        </p>
      </div>
      <div>
        <button className="print-button" onClick={handlePrint}>
          Print
        </button>
      </div>
    </form>
  );
}

const SearchForm = () => {
  return (
    <>
      <Container>
        <Box sx={{ bgcolor: "#2c262b", width: "100%", height: "100px" }}>
          <Box sx={{ display: "flex", p: "1rem", gap: "20px" }}>
            <Box className="search_option_btn">Transport</Box>
            <Box className="search_option_btn"> Hotels</Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

function Home() {
  return (
    <>
      <div className="Home_body">
        {/* <img src="Images/Home_Background.jpg" height="100%" width="100%" /> */}
        <div className="Title"></div>
        <div className="Quote">
          <h1>
            Your Complete Trip <br /> &emsp;&emsp;&emsp;&emsp;&emsp; In One
            label
          </h1>
        </div>
        <div>
          <FormSection />
          {/* new searc formdesign */}
          {/* <SearchForm /> */}
        </div>
        <p className="search_button">
          <Link href="/places" sx={{ textDecoration: "none" }}>
            Go to Map
          </Link>
        </p>
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
    </>
  );
}

export default Home;

const labels = [
  { label: "Ampara" },
  { label: "Anuradhapura" },
  { label: "Badulla" },
  { label: "Batticaloa" },
  { label: "Colombo" },
  { label: "Galle" },
  { label: "Gampaha" },
  { label: "Hambantota" },
  { label: "Jaffna" },
  { label: "Kalutara" },
  { label: "Kegalle" },
  { label: "Kilinochchi" },
  { label: "Kurunegala" },
  { label: "Mannar" },
  { label: "Matale" },
  { label: "Matara" },
  { label: "Monaragala" },
  { label: "Mullaitivu" },
  { label: "Nuwara Eliya" },
  { label: "Polonnaruwa" },
  { label: "Puttalam" },
  { label: "Ratnapura" },
  { label: "Trincomalee" },
  { label: "Vavuniya" }
];

export const FromTo = () => {
  const [fromvalue, setFromValue] = React.useState(null);
  const [tovalue, setToValue] = React.useState(null);
  const [inputFromValue, setFromInputValue] = React.useState("");
  const [inputToValue, setInputToValue] = React.useState("");
  // console.log("inputValue", inputValue);
  // console.log("value", value);
  useEffect(() => {
    // setValue(localStorage.getItem("value"));
  }, []);
  return (
    <div>
      {" "}
      <Box
        sx={{
          display: "flex",
          gap: "3rem",
          justifyContent: "center",
          alignItems: "center",
          mb: "2rem"
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>From:</Typography>
        {/* <input
            id="startingFrom"
            className="input_style-one"
            labelholder="Starting From"
            ref={startingFromRef}
          /> */}
        <Autocomplete
          id="combo-box-demo"
          options={labels}
          value={fromvalue}
          onChange={(event, newValue) => {
            setFromValue(newValue);
            // localStorage.setItem("value", newValue);
          }}
          inputValue={inputFromValue}
          onInputChange={(event, newInputValue) => {
            setFromInputValue(newInputValue);
            // localStorage.setItem("value", newInputValue);
          }}
          sx={{
            width: "40%",
            bgcolor: "#fff",
            borderRadius: "5px",
            "& .MuiOutlinedInput-root": {
              padding: "7px"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#8c8168",
                borderRadius: "5px"
              }
          }}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField {...params} placeholder="Destination" />
          )}
        />
      </Box>
      {/* </div> */}
      <Box
        sx={{
          display: "flex",
          gap: "4.2rem",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>To:</Typography>
        {/* <input
            id="startingFrom"
            className="input_style-one"
            labelholder="Starting From"
            ref={startingFromRef}
          /> */}
        <Autocomplete
          id="combo-box-demo"
          options={labels}
          value={tovalue}
          onChange={(event, newValue) => {
            setToValue(newValue);
          }}
          inputValue={inputToValue}
          onInputChange={(event, newInputValue) => {
            setInputToValue(newInputValue);
          }}
          sx={{
            width: "40%",
            bgcolor: "#fff",
            borderRadius: "5px",
            "& .MuiOutlinedInput-root": {
              padding: "7px"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#8c8168",
                borderRadius: "5px"
              }
          }}
          renderInput={(params) => (
            <TextField {...params} placeholder="Destination" />
          )}
        />
      </Box>
    </div>
  );
};
