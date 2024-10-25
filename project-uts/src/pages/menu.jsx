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
                <Link to="/home">Home</Link>
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
      <h2 className="ourMenu1">Our Menu</h2>
      <section id="menu" className="menu-section">
        <div className="card-list">
          <div className="card">
            <img src={sosis} alt="Burger" className="card-image" />
            <div className="card-content">
              <h3>Burger</h3>
              <p>Juicy beef burger with cheese, lettuce, and tomato.</p>
              <p className="card-price">
                Rp 2.500 / pcs <br />
                <p className="sisa">(tersisa 25 pcs)</p>
              </p>
              <Link to="/menu" className="tbl-pink">
                Order now
              </Link>
            </div>
          </div>
          <div className="card">
            <img src={sosis} alt="Burger" className="card-image" />
            <div className="card-content">
              <h3>Burger</h3>
              <p>Juicy beef burger with cheese, lettuce, and tomato.</p>
              <p className="card-price">
                Rp 2.500 / pcs <br />
                <p className="sisa">(tersisa 25 pcs)</p>
              </p>
              <Link to="/menu" className="tbl-pink">
                Order now
              </Link>
            </div>
          </div>
          <div className="card">
            <img src={sosis} alt="Pizza" className="card-image" />
            <div className="card-content">
              <h3>Pizza</h3>
              <p>Delicious cheese pizza with a variety of toppings.</p>
              <p className="card-price">
                Rp 2.500 / pcs <br />
                <p className="sisa">(tersisa 25 pcs)</p>
              </p>
              <Link to="/menu" className="tbl-pink">
                Order now
              </Link>
            </div>
          </div>
          <div className="card">
            <img src={sosis} alt="Sushi" className="card-image" />
            <div className="card-content">
              <h3>Sushi</h3>
              <p>Fresh sushi rolls with tuna, salmon, and avocado.</p>
              <p className="card-price">
                Rp 2.500 / pcs <br />
                <p className="sisa">(tersisa 25 pcs)</p>
              </p>
              <Link to="/menu" className="tbl-pink">
                Order now
              </Link>
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
