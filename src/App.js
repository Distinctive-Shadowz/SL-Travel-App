import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Places from "./components/Places/Places";
import Hotel from "./Screens/Hotel.tsx";
import AboutUs from "./components/Aboutus/AboutUs";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Meal from "./Screens/Meal.tsx";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/Home":
      component = <Home />;
      break;
    case "/Places":
      component = <Places />;
      break;
    case "/Hotels":
      component = <Hotel />;
      break;
    case "/About_us":
      component = <AboutUs />;
      break;
    case "/Login":
      component = <Login />;
      break;
    case "/Meal":
      component = <Meal />;
      break;
    default:
      component = <Home />;
      break;
  }
  return (
    <>
      <Header />
      {component}
      <Footer />
    </>
  );
}

export default App;
