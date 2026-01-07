import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/LandingPageLogo.png";

export default function LandingPageHeader() {
  const location = useLocation();
  const [active, setActive] = useState("/");

  useEffect(() => {
    setActive(location.pathname || "/");
  }, [location.pathname]);

  return (
    <nav className="container landing-navbar">
      <div className="landing-navbar-inner">
        <Link to="/" className="landing-navbar-logo" onClick={() => setActive("/")}>
          <img src={logo} alt="Nirvana Yachts & Boats" />
        </Link>
        <div className="landing-navbar-links">
          <Link
            to="/"
            className={`landing-navbar-link ${active === "/" ? "active" : ""}`}
            onClick={() => setActive("/")}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={`landing-navbar-link ${active === "/about-us" ? "active" : ""}`}
            onClick={() => setActive("/about-us")}
          >
            About Us
          </Link>
          <Link
            to="/membership"
            className={`landing-navbar-link ${active === "/membership" ? "active" : ""}`}
            onClick={() => setActive("/membership")}
          >
            Packages
          </Link>
          <a href="/#screenshots" className="landing-navbar-link">
            Screenshots
          </a>
          <a href="/#download" className="landing-navbar-link">
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}
