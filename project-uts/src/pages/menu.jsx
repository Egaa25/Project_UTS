import React from "react";
// import burger from "../assets/images/burger.png"; // Contoh gambar produk
// import pizza from "../assets/images/pizza.png";
// import sushi from "../assets/images/sushi.png";
import "../styles/Menu.css"; // Pastikan file CSS untuk halaman menu ada

function Menu() {
  return (
    <div className="menu-container">
      {/* Judul halaman */}
      <h1 className="menu-title">Our Menu</h1>

      {/* Daftar produk */}
      <div className="product-list">
        {/* Item 1 */}
        <div className="product-item">
          <img src={burger} alt="Burger" className="product-image" />
          <h2>Burger</h2>
          <p>Juicy beef burger with cheese, lettuce, and tomato.</p>
          <p className="product-price">$8.99</p>
          <button className="order-button">Order Now</button>
        </div>

        {/* Item 2 */}
        <div className="product-item">
          <img src={pizza} alt="Pizza" className="product-image" />
          <h2>Pizza</h2>
          <p>Delicious cheese pizza with a variety of toppings.</p>
          <p className="product-price">$12.99</p>
          <button className="order-button">Order Now</button>
        </div>

        {/* Item 3 */}
        <div className="product-item">
          <img src={sushi} alt="Sushi" className="product-image" />
          <h2>Sushi</h2>
          <p>Fresh sushi rolls with tuna, salmon, and avocado.</p>
          <p className="product-price">$10.99</p>
          <button className="order-button">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
