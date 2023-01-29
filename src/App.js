import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Places from "./components/Places/Places";
import Hotels from "./components/Hotels/Hotels";
import Aboutus from "./components/Aboutus/Aboutus";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";

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
      component = <Hotels />;
      break;
    case "/Aboutus":
      component = <Aboutus />;
      break;
    case "/Login":
      component = <Login />;
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
