import React, { useState, useRef } from "react";
import "./Home.css";
import Link from "@mui/material/Link";
import { Container, Box } from "@mui/material";
import {
  DirectionsService,
  DirectionsRenderer,
  GoogleMap,
  Marker
} from "@react-google-maps/api";
import { IconButton } from "@mui/material";
import { useLocation } from "react-router-dom";
import Route from "../Route/Route"

function FormSection({ selectedRoute, onSelectRoute }) {
  const departureTimeRef = useRef(null);
  const departureDateRef = useRef(null);
  const arrivalDateRef = useRef(null);
  const vehicleRef = useRef(null);

  const handlePrint = () => {
    const departureTime = departureTimeRef.current.value;
    const departureDate = departureDateRef.current.value;
    const arrivalDate = arrivalDateRef.current.value;
    const vehicle = document.querySelector(
      'input[name="Vehicle"]:checked'
    ).value;

 

    const printContents = `
      <h2>Trip Details</h2>
      <p><strong>Departure Date:</strong> ${departureDate}</p>
      <p><strong>Departure Time:</strong> ${departureTime}</p>
      <p><strong>Arrival Date:</strong> ${arrivalDate}</p>
      ${selectedRoute ? `<p><strong>From:</strong> ${selectedRoute.legs[0].start_address}</p>
      <p><strong>To:</strong> ${selectedRoute.legs[0].end_address}</p>
      <p><strong>Route:</strong> ${selectedRoute.summary}</p>
      <p><strong>Distance:</strong> ${selectedRoute.legs[0].distance.text}</p>
      <p><strong>Duration:</strong> ${selectedRoute.legs[0].duration.text}</p>` : ''}
      <p><strong>Vehicle:</strong> ${vehicle}</p>

    `;

    const printWindow = window.open("", "_blank");
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>SL Travel - Trip Details</title>
          <style>
            @media print {
              body {
                padding: 30% 26%;
                font-size: 20px;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                border-width: 2pt;
                border-style: ridge;
                border-color: rgb(0, 0, 0);
                border-radius: 80pt 80pt 80pt 80pt;
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
          Departure Time :
          <input
            id="departureTime"
            className="input_style-five"
            type="time"
            ref={departureTimeRef}
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
        {selectedRoute && (
        <div className="selected-route-details">
          <h4>Selected Route:</h4>
          <p>Distance: {selectedRoute.legs[0].distance.text}</p>
          <p>Duration: {selectedRoute.legs[0].duration.text}</p>
          <p>Start: {selectedRoute.legs[0].start_address}</p>
          <p>End: {selectedRoute.legs[0].end_address}</p>
        </div>
      )}
        

        
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
    // State to store the selected route details
    const [selectedRoute, setSelectedRoute] = useState(null);

  return (
    <div className="Home_body">
      {/* <img src="Images/Home_Background.jpg" height="100%" width="100%" /> */}
      <div className="Title"></div>
      <div className="Quote">
        <h1>
          Your Complete Trip <br /> &emsp;&emsp;&emsp;&emsp;&emsp; In One Place
        </h1>
      </div>
      <div>
        <FormSection selectedRoute={selectedRoute}/>
        {/* new searc formdesign */}
        {/* <SearchForm /> */}
      
      <Route onSelectRoute={setSelectedRoute}/>
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
