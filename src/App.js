import Header from './Header/Header';
import Home from './Screens/Home';
import Places from "./Screens/Places";
import Hotels from "./Screens/Hotels";
import About_us from "./Screens/About_us";
import Login from './Screens/Login';
import Footer from './Footer/Footer';
import "..//src/Images/tourism_news.jpg";

function App() {
  let component
  switch (window.location.pathname) {
    case "/Home":
      component = <Home/>
      break;
    case "/Places":
      component = <Places/>
      break;
    case "/Hotels":
      component = <Hotels/>
      break;
    case "/About_us":
      component = <About_us/>
      break;
    case "/Login":
      component = <Login/>
      break;
  
    default:
      component = <Home/>
      break;
  }
  return (
    <>
    <Header/>
    {component}
    <Footer />

    </>
  );
}

export default App;
