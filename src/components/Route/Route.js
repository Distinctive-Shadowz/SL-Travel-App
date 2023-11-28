import React, { useState, useEffect, useCallback } from "react";
import {
  DirectionsService,
  DirectionsRenderer,
  GoogleMap,
  Marker
} from "@react-google-maps/api";
import "./Route.css";


const Route = ({ onSelectRoute }) => {
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

  const handleSortByDistance = useCallback(() => {
    const sorted = [...routes].sort((a, b) => a.distance - b.distance);
    setSortedRoutes(sorted);
  }, [routes]);

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
    if (from && to) {
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: from,
          destination: to,
          travelMode: "DRIVING"
        },
        (response, status) => {
          if (status === "OK") {
            setDirections(response);
            setSelectedRoute(null);
                        // Pass the selected route details back to the parent component (Home.js)
            if (response.routes.length > 0) {
              onSelectRoute(response.routes[0]);
            }
          }
        }
      );
    }
  };

  const handleSelectRoute = (route) => {
    setSelectedRoute(route);
  };

  const mapContainerStyle = {
    margin: "0 50px",
    width: "1200px",
    height: "70vh"
  };

  const mapOptions = {
    center: center,
    zoom: 12
  };

  const initMap = () => {
    // Your map initialization code here
  };

  return (
    <div className="container">
      <div className="routeCon">
        <div className="right-side">
          <div className="input-section">
            <input
              className="input-section-one"
              type="text"
              placeholder="From"
              value={from}
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
          <div className="frame">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              options={mapOptions}
              onLoad={handleMapLoad}
              onCenterChanged={handleMapLoad}
              onUnmount={initMap}
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
          <div className="route-change-button">
            <div className="route-list">
              <h4 className="available-routes">Recommended Hotels</h4>
                    <p>Valampuri Hotel </p>
                    <p>North Gate Hotel </p>
                    <p>Peninsula Hotel </p>
                    <p>Cinnamon Citadel </p>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Route;

