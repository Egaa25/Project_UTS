import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="">Logo</a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
