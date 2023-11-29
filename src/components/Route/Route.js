import React, { useState, useEffect, useCallback } from "react";
import { DirectionsRenderer, GoogleMap, Marker } from "@react-google-maps/api";
import "./Route.css";
import { Box } from "@mui/material";
import { HotelCom } from "../Hotel/Hotel";

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
  const queryParams = new URLSearchParams(window.location.search);
  const fromvaal = queryParams.get("from");
  const tovaall = queryParams.get("to");
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
        origin: from || fromvaal,
        destination: to || tovaall,
        travelMode: "DRIVING"
      },
      (response, status) => {
        if (status === "OK") {
          setDirections(response);
          setSelectedRoute(null);
        }
      }
    );
  };

  const mapContainerStyle = {
    width: "100%",
    height: directions == null ? "62vh" : "110vh"
  };

  const mapOptions = {
    center: center,
    zoom: 12
  };

  return (
    <>
      <div className="container">
        <div className="routeCon">
          <div className="right-side">
            <div className="input-section">
              <input
                className="input-section-one"
                type="text"
                placeholder="From"
                value={from || fromvaal}
                onChange={(e) => setFrom(e.target.value)}
              />
              <input
                className="input-section-two"
                type="text"
                placeholder="To"
                value={to || tovaall}
                onChange={(e) => setTo(e.target.value)}
              />
              <button className="get-button" onClick={handleGetRoute}>
                Get Route
              </button>
            </div>
            <div className="frame">
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
            </div>
          </div>
          <div className="left-side">
            <div className="routes-list">
              {sortedRoutes.map((route) => (
                <div className="route" key={route.id}>
                  <h4>{route.name}</h4>
                  <p>{route.distance} miles</p>
                  <p>{route.from}</p>
                  <p>{route.details}</p>
                </div>
              ))}
            </div>
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
            <h3 className="available-hotels">Places to stay near you</h3>

            <Box
              sx={{
                ".swiper-pagination-bullet-active": { background: "#e7af1c" },
                ".swiper-wrapper": { mb: "2rem" },
                ".swiper-pagination-bullet": {
                  width: "15px",
                  height: "15px"
                }
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
                  if (item.category == to || item.category === "Negombo") {
                    return (
                      <SwiperSlide key={item.id}>
                        <HotelCom
                          inplaces
                          src={item.src}
                          HotelName={item.title}
                          mapSrc={item.mapSrc}
                        />
                      </SwiperSlide>
                    );
                  }

                  return null;
                })}
              </Swiper>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Route;
