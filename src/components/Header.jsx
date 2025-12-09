import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/images/logo.png";
// import autoLiftLogo from "../assets/images/AutoLift.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const leftLinks = [
  { name: "Home", path: "home", type: "section" },
  { name: "About Us", path: "aboutus", type: "section" },
  { name: "Boats", path: "features", type: "section" },
];

const rightLinks = [
  { name: "Membership", path: "membership", type: "section" },
  { name: "Location", path: "location", type: "section" },
  { name: "Contacts", path: "contacts", type: "section" },
];

export default function Navbar({ background = "" }) {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`yacht-navbar ${background} ${isScrolled ? 'navbar-fixed' : ''}`}>
        <div className="yacht-nav-container">
          {/* Left Navigation Links */}
          <div className="yacht-nav-left">
            {leftLinks.map((l, index) => (
              <Link
                key={l.path}
                to={`/#${l.path}`}
                className={`yacht-nav-segment ${
                  activeLink === l.path ? "active" : ""
                }`}
                onClick={() => setActiveLink(l.path)}
              >
                {l.name}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link className="yacht-nav-logo" to="/">
            <img src={logo} alt="Nirvana Yachts & Boats" className="yacht-logo-img" />
          </Link>

          {/* Right Navigation Links */}
          <div className="yacht-nav-right">
            {rightLinks.map((l, index) => (
              <Link
                key={l.path}
                to={`/#${l.path}`}
                className={`yacht-nav-segment ${
                  activeLink === l.path ? "active" : ""
                }`}
                onClick={() => setActiveLink(l.path)}
              >
                {l.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="yacht-nav-toggle d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* ───── OFF‑CANVAS (mobile only) ───── */}
      <div
        className="offcanvas offcanvas-start d-lg-none"
        id="offcanvasNavbar"
        tabIndex="-1"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title mb-0 d-flex flex-column">
            <img src={logo} alt="Logo" className="logo" />
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav gap-3">
            {[...leftLinks, ...rightLinks].map((l) => (
              <li
                className="nav-item d-flex flex-column align-items-start"
                key={l.path}
              >
                {l.type === "route" ? (
                  <Link
                    style={{ fontSize: "1.125rem" }}
                    to={l.path}
                    className={`nav-link ${
                      activeLink === l.path ? "active" : ""
                    }`}
                    onClick={() => setActiveLink(l.path)}
                    data-bs-dismiss="offcanvas"
                  >
                    {l.name}
                  </Link>
                ) : (
                  <ScrollLink
                    style={{ fontSize: "1.125rem" }}
                    to={l.path}
                    smooth
                    duration={200}
                    spy
                    className={`nav-link ${
                      activeLink === l.path ? "active" : ""
                    }`}
                    onClick={() => setActiveLink(l.path)}
                    data-bs-dismiss="offcanvas"
                  >
                    {l.name}
                  </ScrollLink>
                )}
                
              </li>
            ))}
          </ul>
          {/* <Link
            className="btn partner-btn w-100 justify-content-center mt-4"
            to="/become-a-partner"
          >
            <i className="fas fa-user-circle me-2"></i>
            Become a Partner
          </Link> */}
        </div>
      </div>
    </>
  );
}
