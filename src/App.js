import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Places from "./components/Places/Places";
import Hotel from "./components/Hotel/Hotel";
import AboutUs from "./components/Aboutus/AboutUs";

import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Meal from "./components/Meal/Meal";
import "./App.css";
import Route from "./components/Route/Route";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/places":
      component = <Route />;
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
      <Header />
      {component}
      <Footer />
    </div>
  );
}

export default App;
