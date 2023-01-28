import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Places from "./components/Places/Places";
import Hotels from "./components/Hotels/Hotels";
import About_us from "./components/Aboutus/About_us";
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
    case "/About_us":
      component = <About_us />;
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
