import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import Hotel from "./components/Hotel/Hotel";
import AboutUs from "./components/About/About";

import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Meal from "./components/Meal/Meal";
import Route from "./components/Route/Route";
import "./App.css";

import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get("from");
  const to = params.get("to");
  const depdates = params.get("depdates");
  const arrdates = params.get("arrdates");
  const vehicle = params.get("vehicle");
  const arrtime = params.get("arrtime");
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/places":
      // Extract query parameters
      // const params = new URLSearchParams(location.search);
      // const from = params.get("from");
      // const to = params.get("to");

      // Conditionally render based on query parameters
      if (
        (from === from && to === to,
        depdates === depdates,
        arrdates === arrdates,
        vehicle === vehicle,
        arrtime === arrtime)
      ) {
        component = <Route />;
      }

      break;
    case "/hotels":
      component = <Hotel />;
      break;
    case "/about-us":
      component = <AboutUs />;
      break;
    case "/login":
      component = <Login />;
      break;
    case "/meal":
      component = <Meal />;
      break;
    default:
      component = <Home />;
      break;
  }
  return (
    <div>
      <Header
        from={from}
        to={to}
        depdates={depdates}
        arrdates={arrdates}
        vehicle={vehicle}
        arrtime={arrtime}
      />
      {component}
      <Footer />
    </div>
  );
}

export default App;
