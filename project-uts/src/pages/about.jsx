// eslint-disable-next-line no-unused-vars
import React from "react";
import sigma from "../assets/images/Logoutspweb-06.png";
import sosis from "../assets/images/sosis.png";

import "../styles/Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      {/* navbar */}
      <nav>
        <div className="wrapper">
          <div className="logo">
            <a href="#">
              <img src={sigma} alt="logo" className="logoPng" />
            </a>
            <h2 className="sigmaStore">SIGMA STORE</h2>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* about us Section */}
      <section id="courses">
        <div>
          <h2 className="about1">About Us</h2>
          <div className="cardabout">
            <p>
              Welcome to Sigma Store, a place where you can fulfill your needs
              for a variety of excellent products such as food and beverages.
              From felicious snacks and refreshing drinks to exclusive items, we
              provide the best products that support bussiness fund programs
              (danus).
            </p>
            <p>
              We believe that every product we offer at Sigma Store well hel you
              in your activities, wheter for events, meetings, or daily needs.
              Therefore, we are committed to quality, affordable prices, and
              friendly customer service.
            </p>
            <p>
              Thank you for trusting us to handle your needs; Sigma Store is
              more than just a store.
            </p>
          </div>
        </div>
        <img src={sosis} alt="sosis" className="sosis" />
      </section>

      <svg
        className="wavefoot"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#272363"
          fillOpacity="1"
          d="M0,160L1440,256L1440,0L0,0Z"
        ></path>
      </svg>

      <div id="copyright">
        <div className="wrapper">
          &copy; 2024. <b>Project UTS by Kelompok Sigma</b> All Rights Reserved.
        </div>
      </div>

      <div className="logfoot">
        <img src={sigma} alt="logo" className="logofoot" />
      </div>
    </>
  );
}

export default Home;
