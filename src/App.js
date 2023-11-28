import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Hotel from "./components/Hotel/Hotel";
import About from "./components/About/About";

import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Meal from "./components/Meal/Meal";
import "./App.css";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/meal":
      component = <Meal />;
      break;
    case "/hotels":
      component = <Hotel />;
      break;
    case "/about-us":
      component = <About />;
      break;
    case "/login":
      component = <Login />;
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
