import React, { useState } from "react";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <img src="/images/logo.svg" alt="logos" />
          </div>
          <nav className="nav">
            <ul className={!click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">Home</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Contact</li>
              <li className="nav-item">Blog</li>
              <li className="nav-item">Careers</li>
            </ul>
          </nav>
          <div className="button">
            <button>Request Invite</button>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <div>
              <img
                src="/images/icon-hamburger.svg"
                alt="hamburger"
                className="hamburger"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
