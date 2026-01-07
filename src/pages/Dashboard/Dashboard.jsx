import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "./Sidebar";
import bdShipImg from "../../assets/images/bs-ship.png";
import bookingShips from "../../assets/images/bookingShips.png";
import whiteBlueShip from "../../assets/images/white-blue-ship.png";
import blueThumbsUp from "../../assets/images/blueThumbsUp.png";
import profilePic from "../../assets/images/profile-pic.png";

const sampleCards = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: "Calma Suite 1",
  ref: "#3265",
  date: "Dec 31, 2025 - 10 AM - 12 PM",
  image: bookingShips,
}));

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("bookings");
  const [selectedSection, setSelectedSection] = useState("boats");
  const [selectedMarina, setSelectedMarina] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filteredCards = sampleCards.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.ref.toLowerCase().includes(search.toLowerCase())
  );

  const profileComponent = (
    <div className="dashboard-user">
      <div className="dashboard-avatar">
        <img src={ profilePic } alt="" className="w-100" />
      </div>
      <div className="dashboard-user-text">
        <p className="dashboard-welcome">Welcome</p>
        <h5 className="dashboard-user-name">Saher !</h5>
      </div>
    </div>
  );

  return (
    <div className="dashboard-page">
      <Header profile={profileComponent} />
      <section className="dashboard-section">
        <div className="dashboard-layout">
          <Sidebar 
            selectedSection={selectedSection} 
            setSelectedSection={setSelectedSection} 
          />

          <main className="dashboard-content">
            {selectedTab === "bookings" ? (
              <div className="bookings-home-view">
                <div className="bookings-hero-section">
                  <img src={bdShipImg} alt="Luxury Yacht" className="bookings-hero-image" />
                </div>

                <div className="bookings-interactive-section">
                  <div className="bookings-type-buttons">
                    <button
                      type="button"
                      className={`bookings-type-btn ${selectedTab === "bookings" ? "active" : ""}`}
                      onClick={() => setSelectedTab("bookings")}
                    >
                      <img src={whiteBlueShip} className="bookings-type-btn-img icon-white" alt="" />
                      <span>Bookings</span>
                    </button>
                    <button
                      type="button"
                      className={`bookings-type-btn ${selectedTab === "experiences" ? "active" : ""}`}
                      onClick={() => setSelectedTab("experiences")}
                    >
                      <img src={blueThumbsUp} className="bookings-type-experiences-img icon-white" alt="" />
                      <span>Experiences</span>
                    </button>
                  </div>
                  <div className="bookings-marina-select">
                    <select
                      className="marina-dropdown"
                      value={selectedMarina}
                      onChange={(e) => setSelectedMarina(e.target.value)}
                    >
                      <option value="">Select Marina</option>
                      <option value="royal-m">Royal M Marina</option>
                      <option value="marina-1">Marina 1</option>
                      <option value="marina-2">Marina 2</option>
                    </select>
                  </div>
                </div>

                <div className="bookings-listings-grid">
                  {filteredCards.map((card) => (
                    <div key={card.id} className="bookings-listing-card">
                      <div className="bookings-listing-image">
                        <img src={card.image} alt="Boat" />
                      </div>
                      <div className="bookings-listing-content">
                        <h3 className="bookings-listing-title">{card.title}</h3>
                        <p className="bookings-listing-ref">Registration: {card.ref}</p>
                        <p className="bookings-listing-date">{card.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="experiences-home-view">
                <div className="experiences-hero-section">
                  <img src={bdShipImg} alt="Luxury Yacht" className="experiences-hero-image" />
                </div>

                <div className="experiences-interactive-section">
                  <div className="experiences-type-buttons">
                    <button
                      type="button"
                      className={`experiences-type-btn ${selectedTab === "bookings" ? "active" : ""}`}
                      onClick={() => setSelectedTab("bookings")}
                    >
                      <img src={whiteBlueShip} className="bookings-type-experiences-img bookings-type-experiences-img-ii" alt="" />
                      <span>Bookings</span>
                    </button>
                    <button
                      type="button"
                      className={`experiences-type-btn ${selectedTab === "experiences" ? "active" : ""}`}
                      onClick={() => setSelectedTab("experiences")}
                    >
                      <img src={blueThumbsUp} className="bookings-type-experiences-img" alt="" />
                      <span>Experiences</span>
                    </button>
                  </div>
                  <div className="bookings-marina-select">
                    <select
                      className="marina-dropdown"
                      value={selectedMarina}
                      onChange={(e) => setSelectedMarina(e.target.value)}
                    >
                      <option value="">Select Marina</option>
                      <option value="royal-m">Royal M Marina</option>
                      <option value="marina-1">Marina 1</option>
                      <option value="marina-2">Marina 2</option>
                    </select>
                  </div>
                </div>

                <div className="experiences-listings-grid">
                  {filteredCards.map((card) => (
                    <div key={card.id} className="experiences-listing-card">
                      <div className="experiences-listing-image">
                        <img src={card.image} alt={card.title} />
                        <div className="experiences-listing-content">
                          <div className="experiences-listing-content-left">
                            <h3 className="experiences-listing-title">{card.title}</h3>
                            <p className="experiences-listing-engine">Mercury V8 (300 hp)</p>
                          </div>
                          <p className="experiences-listing-length">25 ft</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </section>
      <Footer />
    </div>
  );
}
