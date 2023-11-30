import React, { useState, useEffect, useCallback } from "react";
import { DirectionsRenderer, GoogleMap, Marker } from "@react-google-maps/api";
import "./Route.css";
import { Box, Button, Link } from "@mui/material";
import { HotelCom } from "../Hotel/Hotel";
import { useNavigate } from "react-router-dom";
import Categories from "./../Hotel/Categories";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Route = () => {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const fromvalue = queryParams.get("from");
  const tovalue = queryParams.get("to");
  const depdates = queryParams.get("depdates");
  const arrdates = queryParams.get("arrdates");
  const vehicle = queryParams.get("vehicle");
  const arrtime = queryParams.get("arrtime");

  const [data, setData] = useState(Categories);
  const [routes, setRoutes] = useState([]);
  const [sortedRoutes, setSortedRoutes] = useState([]);
  const [center, setCenter] = useState({
    lat: 7.590460163338516,
    lng: 80.67417483525792
  });
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [directions, setDirections] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    // Fetch routes data from backend
    const fetchData = async () => {
      const res = await fetch("/api/routes");
      const data = await res.json();
      setRoutes(data);
      setSortedRoutes(data.sort((a, b) => a.distance - b.distance));
    };
    fetchData();
  }, []);

  const handleMapLoad = useCallback((map) => {
    // Access the google object when the map is loaded
    if (map) {
      const newCenter = {
        lat: map.center.lat(),
        lng: map.center.lng()
      };
      setCenter(newCenter);
    }
  }, []);

  const handleGetRoute = () => {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: from ? from : fromvalue,
        destination: to ? to : tovalue,
        travelMode: "DRIVING"
      },
      (response, status) => {
        if (status === "OK") {
          setDirections(response);
          setSelectedRoute(null);
          // Update URL parameters
          const params = new URLSearchParams();
          params.set("from", from || fromvalue);
          params.set("to", to || tovalue);

          navigate(`?${params.toString()}`);
        }
      }
    );
  };
  useEffect(() => {
    if (fromvalue !== null) {
      setFrom(fromvalue);
    }
    if (tovalue !== null) {
      setTo(tovalue);
    }
  }, [fromvalue, tovalue]);

  const mapContainerStyle = {
    height:
      to.length < 0
        ? "65vh"
        : data.some((item) => item.category === to)
        ? directions
          ? "100vh"
          : "60vh"
        : "60vh"
  };

  const mapOptions = {
    center: center,
    zoom: 12
  };
  const handlePrint = () => {
    const printContents = `
    <h2>Trip Details:</h2>
    ${fromvalue ? `<p><strong>From:</strong> ${fromvalue}</p>` : ""}
    ${tovalue ? `<p><strong>To:</strong> ${tovalue}</p>` : ""}
    ${depdates ? `<p><strong>Departure Date:</strong> ${depdates}</p>` : ""}
    ${arrdates ? `<p><strong>Arrival Date:</strong> ${arrdates}</p>` : ""}
    ${vehicle ? `<p><strong>Vehicle:</strong> ${vehicle}</p>` : ""}
    ${arrtime ? `<p><strong>Departure Time:</strong> ${arrtime}</p>` : ""}
    ${directions?.routes
      .map(
        (route, index) => `
      <div key=${index}>
        <p><strong>Distance:</strong> ${route.legs[0].distance.text}</p>
        <p><strong>Duration:</strong> ${route.legs[0].duration.text}</p>
      </div>
    `
      )
      .join("")}
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
    <>
      <div className="container">
        <Box
          className="routeCon"
          sx={{ flexDirection: to.length > 0 ? "row" : "column" }}
        >
          <Box
            className="right-side"
            sx={{
              width: !directions ? "100%" : "52%"
            }}
          >
            <div className="input-section">
              <input
                className="input-section-one"
                type="text"
                placeholder="From"
                value={from}
                // value={fromvalue ? fromvalue : from}
                onChange={(e) => setFrom(e.target.value)}
              />
              <input
                className="input-section-two"
                type="text"
                placeholder="To"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
              <button className="get-button" onClick={handleGetRoute}>
                Get Route
              </button>
            </div>
            <Box
              className="frame"
              sx={{
                width: directions
                  ? "100%"
                  : to?.length > 0
                  ? "100% !important"
                  : "100%"
              }}
            >
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                options={mapOptions}
                onLoad={handleMapLoad}
                onCenterChanged={handleMapLoad}
              >
                {routes.map((route) => (
                  <Marker
                    key={route.id}
                    position={{ lat: route.latitude, lng: route.longitude }}
                    title={route.name}
                  />
                ))}

                {directions &&
                  directions.routes.map((route, index) => (
                    <DirectionsRenderer key={index} directions={directions} />
                  ))}
              </GoogleMap>
            </Box>
          </Box>

          <Box
            className="left-side"
            sx={{
              display:
                to.length > 0 ? "block" : !directions ? "inline-flex" : "block"
              // to.length > 0 ? "block" : !directions ? "inline-flex" : "block"
            }}
          >
            <Box
              className="routes-list"
              sx={{ mt: to.length > 0 ? "5rem" : "1rem" }}
            >
              {sortedRoutes.map((route) => (
                <div className="route" key={route.id}>
                  <h4>{route.name}</h4>
                  <p>{route.distance} miles</p>
                  <p>{route.from}</p>
                  <p>{route.details}</p>
                </div>
              ))}
            </Box>
            {directions !== null && (
              <div className="route-change-button">
                <div className="route-list">
                  <h4 className="available-routes">Available Routes</h4>
                  {directions &&
                    directions.routes.map((route, index) => (
                      <div
                        key={index}
                        className={`route-option ${
                          selectedRoute === route ? "selected" : ""
                        }`}
                      >
                        <p>{route.summary}</p>
                        <p>Distance: {route.legs[0].distance.text}</p>
                        <p>Duration: {route.legs[0].duration.text}</p>
                        <p>Start: {route.legs[0].start_address}</p>
                        <p>End: {route.legs[0].end_address}</p>
                      </div>
                    ))}
                </div>
              </div>
            )}
            <Box
              sx={{
                ".swiper-pagination-bullet-active": { background: "#e7af1c" },
                ".swiper-wrapper": { mb: "2rem" },
                ".swiper-pagination-bullet": {
                  width: "15px",
                  height: "15px"
                },
                mt: "5rem"
              }}
            >
              <Swiper
                slidesPerView={2}
                spaceBetween={0}
                pagination={{
                  clickable: true
                }}
                modules={[Pagination]}
                className="mySwiper"
                // watchSlidesProgress={true}
              >
                {data.map((item) => {
                  if (item.category == to) {
                    return (
                      <>
                        <h3 className="available-hotels">
                          Places to stay near you
                        </h3>
                        <SwiperSlide key={item.id}>
                          <HotelCom
                            inplaces
                            src={item.src}
                            HotelName={item.title}
                            mapSrc={item.mapSrc}
                          />
                        </SwiperSlide>
                      </>
                    );
                  }

                  return null;
                })}
              </Swiper>
            </Box>
            <Box
              sx={{
                position: "relative",
                bottom: "0px",
                right: "0px"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "2rem",
                  justifyContent: "flex-end",
                  mt: "0rem",
                  mb: "1rem"
                }}
              >
                {/* <Link href="/"> */}{" "}
                <Button
                  variant="contained"
                  color="success"
                  onClick={handlePrint}
                  sx={{ height: "3.2rem", width: "120px" }}
                >
                  Print
                </Button>
                {/* </Link> */}
                <Link href="/hotels">
                  {" "}
                  <Button
                    variant="contained"
                    color="success"
                    // onClick={handlePrintlink}
                    sx={{ height: "3.2rem", width: "130px" }}
                  >
                    Go Hotel
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Route;
