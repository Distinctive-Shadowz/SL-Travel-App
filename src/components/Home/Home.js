import React from "react";
import "./Home.css";
import Link from '@mui/material/Link';


function Home() {
  return (
    <body className="Home_body">
      <div className="Title"></div>
      <div className="Quote">
        <h1>
          Your Complete Trip <br /> &emsp;&emsp;&emsp;&emsp;&emsp; In One Place
        </h1>
      </div>
      <div>
        <form>
          <div className="Trip_start">
            <p className="blink_me">Your Trip Starts From Here...</p>
            <p>
              <input className="input_style" placeholder="Starting From" />
            </p>
            <p>
              <input className="input_style" placeholder="Destination" />
            </p>
          </div>
          <ul className="Vehicle_select">
            <li>
              <h5>Motor Cycle</h5>
              <input type="radio" name="Vehicle" />
            </li>
            <li>
              <h5>Car</h5>
              <input type="radio" name="Vehicle" />
            </li>
            <li>
              <h5>Bus</h5>
              <input type="radio" name="Vehicle" />
            </li>
            <li>
              <h5>Train</h5>
              <input type="radio" name="Vehicle" />
            </li>
            <li>
              <h5>Flight</h5>
              <input type="radio" name="Vehicle" />
            </li>
          </ul>
          <div className="Trip_start2">
            <p>
              Departure Time :<input className="input_style" type="time" />
            </p>     
            <p className="search_button">
              {/* <input className="search_button" type="button" value="Search"  /> */}
              <Link href="/Places" sx={{ textDecoration: "none"}}>
                  Search{" "}
                </Link>
            </p>
          </div>
        </form>
      </div>
      <div>
        <ul className="Advertise">
          <li>
            <h3>Popular Attraction</h3>
            <a
              href="https://www.sltda.gov.lk/en/tourist-attractions"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="Adv_img"
                width="200px"
                height="200px"
                src={"/Images/Popular_attraction.jpg"}
                alt="Adv_img"
              />
            </a>
          </li>
          <li>
            <h3>Weather Updates</h3>
            <a
              href="https://weather.com/weather/today/l/6.69,80.41?par=google"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="Adv_img"
                width="200px"
                height="200px"
                src={"/Images/weather_update.jpeg"}
                alt="Adv_img"
              />
            </a>
          </li>
          <li>
            <h3>Tourism News</h3>
            <a
              href="https://www.sltda.gov.lk/en/tourism-news"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="Adv_img"
                width="200px"
                height="200px"
                src={"/Images/tourism_news.jpg"}
                alt="Adv_img"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="Title">
        <p></p>
      </div>
    </body>
  );
}

export default Home;
