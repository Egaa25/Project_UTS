// eslint-disable-next-line no-unused-vars
import React from "react";
import sigma from "../assets/images/Logoutspweb-06.png";
import instagramIcon from "../assets/images/instagram.png";
import whatsappIcon from "../assets/images/whatsapp.png";

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

      {/* Card List Menu */}
      <h2 className="ourMenu2">Contact Us</h2>
      {/* Contact Us Section */}
      <section id="contact">
        <div className="contact-container">
          <p>
            Feel free to contact us through WhatsApp or follow us on Instagram
            for the latest updates!
          </p>
          <div className="contact-options">
            <div className="contact-item">
              <a
                href="https://wa.me/your_number"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="contact-icon"
                />
                <span>WhatsApp: +62 812-3456-7890</span>
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://instagram.com/chrisnandaegaa_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="contact-icon"
                />
                <span>Instagram: @sigma_store</span>
              </a>
            </div>
          </div>
        </div>
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
