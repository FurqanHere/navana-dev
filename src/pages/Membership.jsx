import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import landingBg from "../assets/images/landingPageBg.png";
import membershipBgImg from "../assets/images/membership-bg-img.png";
import paymentBgImg from "../assets/images/payment-bg.png";
import starImg from "../assets/images/star.png";
import yartImg from "../assets/images/yart.png";
import summaryImg from "../assets/images/summary.png";
import blueTickImg from "../assets/images/blue-tick.png";
import whiteTickImg from "../assets/images/white-tick-img.png";
import whiteBgTick from "../assets/images/white-bg-tick.png";
import documentFrontImg from "../assets/images/document-front.png";
import documentBackImg from "../assets/images/document-back.png";
import uploadImg from "../assets/images/upload.png";
import personImg from "../assets/images/person-img.png";
import cameraImg from "../assets/images/camera-img.png";
import boatDetailBg from "../assets/images/boat3.png";
import lengthImg from "../assets/images/length.png";
import bedImg from "../assets/images/bed.png";
import personIcon from "../assets/images/person.png";

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Create custom red marker icon
const redIcon = new L.Icon({
  iconUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAzMiA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDBDMTEuNTgyIDAgOCAzLjU4MiA4IDhDOCAxMy4zMzMgMTYgMjYgMTYgMjZDMTYgMjYgMjQgMTMuMzMzIDI0IDhDMjQgMy41ODIgMjAuNDE4IDAgMTYgMFoiIGZpbGw9IiNGRjAwMDAiLz4KPGNpcmNsZSBjeD0iMTYiIGN5PSI4IiByPSI0IiBmaWxsPSIjRkZGRkZGIi8+Cjwvc3ZnPgo=",
  iconSize: [32, 40],
  iconAnchor: [16, 40],
  popupAnchor: [0, -40],
});

const membershipPackages = [
  {
    name: "SEALUX",
    price: "AED 1,499/",
    duration: "mo",
    benefits: [
      "10 Bookings per Month",
      "Category B Boat Access",
      "Weekdays Access",
      "1 Weekend Access per Month",
      "Session Merging (Once a Month)",
      "3 Rolling Bookings",
      "3 Free In-House Captains per Year",
      "60 Freezing Days",
    ],
  },
  {
    name: "SEA DWELLER",
    price: "AED 1,700/",
    duration: "mo",
    benefits: [
      "10 Bookings per Month",
      "Category B Boat Access",
      "Weekdays Access",
      "1 Weekend Access per Month",
      "Session Merging (Once a Month)",
      "3 Rolling Bookings",
      "3 Free In-House Captains per Year",
      "60 Freezing Days",
    ],
  },
  {
    name: "ELITE",
    price: "AED 2,500/",
    duration: "mo",
    benefits: [
      "10 Bookings per Month",
      "Category B Boat Access",
      "Weekdays Access",
      "1 Weekend Access per Month",
      "Session Merging (Once a Month)",
      "3 Rolling Bookings",
      "3 Free In-House Captains per Year",
      "60 Freezing Days",
    ],
  },
];

const Membership = () => {
  const [currentView, setCurrentView] = useState("packages");
  const [selectedPackage, setSelectedPackage] = useState("SEALUX");
  const [selectedFrequency, setSelectedFrequency] = useState("Annual");
  const [selectedDay, setSelectedDay] = useState(18);
  const [selectedSlot, setSelectedSlot] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAgreement, setShowAgreement] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [showUploadSuccess, setShowUploadSuccess] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("online");
  const [selectedDocType, setSelectedDocType] = useState("emiratesId");
  const [bookingTab, setBookingTab] = useState("upcoming");
  const detailsData = {
    fullName: "",
    phone: "",
    nationality: "",
    emiratesId: "",
    passport: "",
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentView]);

  const handleButtonClick = (view) => {
    setCurrentView(view);
  };

  const handleBackToPackages = () => {
    setCurrentView("packages");
  };

  return (
    <div className="membership-page">
      <Header />
      <section
        className="membership-hero"
        style={{ backgroundImage: `url(${landingBg})` }}
      ></section>

      <section
        className="membership-packages-section"
        style={{ backgroundImage: `url(${membershipBgImg})` }}
      >
        {currentView !== "schedule" && currentView !== "details" && currentView !== "cardInfo" && currentView !== "documentUpload" && currentView !== "detailPage" && currentView !== "bookingManagement" && (
          <div className="membership-hero-content" data-aos="fade-up">
            <p className="membership-kicker">Membership</p>
            <h1 className="membership-heading">
              {currentView === "packages"
                ? "Select Best Package"
                : "Select Payment Options"}
            </h1>
          </div>
        )}
        <div className="membership-packages-container">
          {currentView === "packages" ? (
            <>
              <div className="membership-cards-grid">
                {membershipPackages.map((pkg, index) => (
                  <div
                    key={pkg.name}
                    className="membership-card"
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                  >
                    <div className="membership-card-star">
                      <img src={starImg} alt="Star" />
                    </div>
                    <h3 className="membership-card-title">{pkg.name}</h3>
                    <div className="membership-card-price">
                      {pkg.price}{" "}
                      <span className="duration-text">{pkg.duration}</span>{" "}
                    </div>
                    <ul className="membership-card-benefits">
                      {pkg.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                    <button
                      className="membership-card-button"
                      onClick={() => {
                        setSelectedPackage(pkg.name);
                        setCurrentView("briefing");
                      }}
                    >
                      Select Package
                    </button>
                  </div>
                ))}
              </div>

              <div className="membership-bottom-buttons">
                <button
                  className="membership-bottom-btn"
                  data-aos="fade-up"
                  data-aos-delay="450"
                  onClick={() => handleButtonClick("briefing")}
                >
                  <img src={yartImg} alt="Club Briefing" />
                  <span>Club Briefing</span>
                </button>
                <button
                  className="membership-bottom-btn"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  onClick={() => handleButtonClick("summary")}
                >
                  <img src={summaryImg} alt="Club Summary" />
                  <span>Club Summary</span>
                </button>
              </div>
            </>
          ) : currentView === "schedule" ? (
            <div className="schedule-view">
              <h2 className="schedule-title">Club Briefing</h2>
              <div className="schedule-columns">
                <div className="schedule-card">
                  <div className="schedule-card-header">
                    <span role="img" aria-label="calendar">
                      {" "}
                      <i className="bi bi-calendar-month"></i>{" "}
                    </span>
                    <span>Select date of briefing</span>
                  </div>
                  <div className="schedule-month">November 2025</div>
                  <div className="schedule-weekdays">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                      (d) => (
                        <div key={d} className="schedule-weekday">
                          {d}
                        </div>
                      )
                    )}
                  </div>
                  <div className="schedule-days">
                    {[...Array(30)].map((_, idx) => {
                      const day = idx + 1;
                      const isSelected = day === selectedDay;
                      return (
                        <button
                          type="button"
                          key={day}
                          className={`schedule-day ${
                            isSelected ? "selected" : ""
                          }`}
                          onClick={() => setSelectedDay(day)}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="schedule-card">
                  <div className="schedule-card-header">
                    <span role="img" aria-label="time">
                      ⏱️
                    </span>
                    <span>Select date of briefing</span>
                  </div>
                  <div className="schedule-date">Dec 31, 2025</div>
                  <div className="schedule-slot-label">Choose a slot</div>
                  {[
                    "8 AM - 10 AM",
                    "10 AM - 12 PM",
                    "12 PM - 2 PM",
                    "8 AM - 10 AM",
                    "12 PM - 2 PM",
                    "8 AM - 10 AM",
                  ].map((slot, idx) => {
                    const isSelected = idx === selectedSlot;
                    return (
                      <button
                        type="button"
                        key={slot + idx}
                        className={`schedule-slot ${
                          isSelected ? "selected" : ""
                        }`}
                        onClick={() => setSelectedSlot(idx)}
                      >
                        <span className="schedule-slot-text">{slot}</span>
                        <span
                          className={`schedule-slot-check ${
                            isSelected ? "selected" : ""
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="schedule-submit-wrap">
                <button
                  className="schedule-submit-btn"
                  onClick={() => setShowSuccess(true)}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="details-nav-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentView("details");
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          ) : currentView === "details" ? (
            <div className="details-section">
              <h2 className="details-heading">
                Personal Details &amp; Agreement
              </h2>
              <div className="details-card">
                <div className="details-row">
                  <div className="details-field">
                    <label>Full Name</label>
                    <input defaultValue={detailsData.fullName} />
                  </div>
                  <div className="details-field">
                    <label>Phone Number</label>
                    <input defaultValue={detailsData.phone} />
                  </div>
                </div>
                <div className="details-row">
                  <div className="details-field">
                    <label>Nationality</label>
                    <input defaultValue={detailsData.nationality} />
                  </div>
                  <div className="details-field">
                    <label>Emirates ID</label>
                    <input defaultValue={detailsData.emiratesId} />
                  </div>
                </div>
                <div className="details-row">
                  <div className="details-field">
                    <label>Passport</label>
                    <input defaultValue={detailsData.passport} />
                  </div>
                </div>
              </div>
              <div className="details-actions">
                <button
                  className="details-btn primary"
                  onClick={() => setShowAgreement(true)}
                >
                  Sign Agreement
                </button>
                <button
                  type="button"
                  className="details-btn secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentView("finalReview");
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          ) : currentView === "finalReview" ? (
            <div className="final-review">
              <h2 className="details-heading">Final Review</h2>

              <div className="final-review-top">
                <div className="final-card primary">
                  <div className="final-primary-content">
                    <p className="final-plan-name">SEALUX</p>
                    <p className="final-plan-price">AED 1,499/mo</p>
                    <p className="final-plan-desc">
                      Primary Best Package buy for easy.
                    </p>
                  </div>
                  <div className="final-plan-check">
                    <img
                      src={whiteBgTick}
                      alt="Selected"
                      className="final-check-img"
                    />
                  </div>
                </div>

                <div className="final-right-section">
                  <div className="final-card secondary">
                    <div className="final-secondary-top">
                      <span className="final-term">Monthly</span>
                      <span className="final-secondary-price">AED 2,500/mo</span>
                    </div>
                    <p className="final-secondary-sub">
                      Package price × 12 (paid monthly)
                    </p>
                    <p className="final-secondary-note">
                      Refundable, One-Time 5% VAT.
                    </p>
                  </div>
                </div>
              </div>

              <div className="final-details-card">
                <div className="final-row">
                  <div className="border-bottom">
                    <p className="final-label">Full Name</p>
                    <p className="final-value">Baki Phililnder</p>
                  </div>
                  <div className="border-bottom">
                    <p className="final-label">Email</p>
                    <p className="final-value">baki@phililnderzen.com</p>
                  </div>
                </div>
                <div className="final-row">
                  <div className="border-bottom">
                    <p className="final-label">Email</p>
                    <p className="final-value">baki@phililnderzen.com</p>
                  </div>
                  <div className="border-bottom">
                    <p className="final-label">Country</p>
                    <p className="final-value">United Arab Emirates</p>
                  </div>
                </div>
                <div className="final-row">
                  <div className="border-bottom">
                    <p className="final-label">Phone Number</p>
                    <p className="final-value">+971 26 078 7961</p>
                  </div>
                  <div className="border-bottom">
                    <p className="final-label">Emirates ID</p>
                    <p className="final-value">784-2654-2578169-4</p>
                  </div>
                </div>
                <div className="final-row status-row">
                  <div className="final-status">
                    <span className="final-label">Contract Status</span>
                    <span className="final-value">Agreed</span>
                  </div>
                  <button
                    className="details-btn secondary"
                    onClick={() => setCurrentView("paymentMethod")}
                  >
                    Review Contract
                  </button>
                </div>
              </div>
            </div>
          ) : currentView === "paymentMethod" ? (
            <div className="payment-method-view">
              <h2 className="details-heading">Payment</h2>
              <div className="payment-method-card">
                <div className="payment-grid">
                  <div className="promo-block">
                    <p className="payment-label">Do you have a promocode?</p>
                    <div className="promo-input-wrapper">
                      <input
                        className="promo-input"
                        placeholder="AXHUY2"
                        defaultValue="AXHUY2"
                      />
                      <button type="button" className="promo-apply">Apply</button>
                    </div>
                  </div>

                  <div className="payment-method-block">
                    <p className="payment-label">Select a payment method</p>
                    <div 
                      className={`pay-option ${selectedPaymentMethod === "online" ? "pay-selected" : ""}`}
                      onClick={() => setSelectedPaymentMethod("online")}
                    >
                      <div className={`pay-radio ${selectedPaymentMethod !== "online" ? "pay-off" : ""}`}>
                        <svg className="pay-radio-check" width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="pay-label">Pay Online</span>
                      <div className="pay-icons">
                        <span className="pay-icon mastercard">MC</span>
                        <span className="pay-icon visa">VISA</span>
                        <span className="pay-icon apple">AP</span>
                        <span className="pay-icon gpay">GP</span>
                      </div>
                    </div>
                  </div>

                  <div className="payment-method-block">
                    <p className="payment-label">Select a payment method</p>
                    <div 
                      className={`pay-option ${selectedPaymentMethod === "cash" ? "pay-selected" : ""}`}
                      onClick={() => setSelectedPaymentMethod("cash")}
                    >
                      <div className={`pay-radio ${selectedPaymentMethod !== "cash" ? "pay-off" : ""}`}>
                        <svg className="pay-radio-check" width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="pay-label">
                        Cash / Cheques / Card{" "}
                        <span className="pay-sub">(at office)</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="schedule-submit-btn payment-cta"
                onClick={() => setCurrentView("cardInfo")}
              >
                Proceed to Pay
              </button>
            </div>
          ) : currentView === "cardInfo" ? (
            <div className="card-info-view">
              <h2 className="details-heading mb-5">Card Information</h2>
              <div className="details-card">
                <div className="details-row">
                  <div className="details-field">
                    <label>Full Name</label>
                    <input defaultValue="Jack Miller" />
                  </div>
                  <div className="details-field">
                    <label>Card Number</label>
                    <input defaultValue="1587 **** ** 04" />
                  </div>
                </div>
                <div className="details-row">
                  <div className="details-field">
                    <label>Expiry Date</label>
                    <input placeholder="MM/YY" />
                  </div>
                  <div className="details-field">
                    <label>CVV</label>
                    <input defaultValue="****" />
                  </div>
                </div>
              </div>
              <div className="card-info-pay-container">
                <button
                  type="button"
                  className="schedule-submit-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowPaymentSuccess(true);
                  }}
                >
                  Pay
                </button>
              </div>
            </div>
          ) : currentView === "documentUpload" ? (
            <div className="document-upload-view">
              <h2 className="document-upload-title text-white">Document Upload</h2>
              <div className="document-upload-card">
                
                
                {/* Profile Image Upload */}
                <div className="profile-upload-section">
                  <div className="profile-upload-icon">
                    <img src={personImg} alt="Person" className="profile-person-img" />
                    <img src={cameraImg} alt="Camera" className="profile-camera-img" />
                  </div>
                  <p className="profile-upload-text">Upload Profile Image</p>
                </div>

                {/* Document Type Selection */}
                <div className="doc-radio-row">
                  <label className="doc-radio-label">
                    <input 
                      type="radio" 
                      name="docType" 
                      checked={selectedDocType === "emiratesId"}
                      onChange={() => setSelectedDocType("emiratesId")}
                    />
                    <span className="doc-radio-custom"></span>
                    <span className="doc-radio-text">Emirates ID</span>
                  </label>
                  <label className="doc-radio-label">
                    <input 
                      type="radio" 
                      name="docType"
                      checked={selectedDocType === "passport"}
                      onChange={() => setSelectedDocType("passport")}
                    />
                    <span className="doc-radio-custom"></span>
                    <span className="doc-radio-text">Passport</span>
                  </label>
                </div>

                {/* Document Upload Grid */}
                <div className="doc-grid">
                  <div className="doc-emirates-section shadow p-4">
                    <h3 className="doc-section-title">Emirates ID</h3>
                    <div className="doc-sides-container">
                      <div className="doc-side-box">
                        <p className="doc-side-label">Front Side</p>
                        <div className="doc-image-preview">
                          <img src={documentFrontImg} alt="Front Side" />
                        </div>
                      </div>
                      <div className="doc-side-box">
                        <p className="doc-side-label">Back Side</p>
                        <div className="doc-image-preview">
                          <img src={documentBackImg} alt="Back Side" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="doc-license-section shadow p-4">
                    <h3 className="doc-section-title">Boat License</h3>
                    <div className="doc-upload-placeholder">
                      <img src={uploadImg} alt="Upload" className="doc-upload-icon" />
                      <p className="doc-upload-text">Upload License</p>
                    </div>
                  </div>
                </div>

                
              </div>
                {/* Submit / Detail Buttons */}
                <div className="doc-submit-container">
                  <div className="doc-submit-actions">
                    <button
                      type="button"
                      className="doc-submit-btn outline"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentView("detailPage");
                      }}
                    >
                      Detail
                    </button>
                    <button
                      type="button"
                      className="doc-submit-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowUploadSuccess(true);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
            </div>
          ) : currentView === "detailPage" ? (
            <div className="detail-view">
              <div
                className="detail-hero"
              >
                <div className="detail-hero-overlay" />
              </div>

              <div className="detail-card">
                <div className="detail-header">
                  <div>
                    <p className="detail-kicker">TENDER 9 (T9)</p>
                    <p className="detail-subtitle">Twin Mercury Verado V6 (2 x 225 hp)</p>
                  </div>
                  <div className="detail-specs">
                    {[
                      { img: lengthImg, label: "Length:16m" },
                      { img: personIcon, label: "10 Person" },
                      { img: bedImg, label: "2 Bed" },
                    ].map((item) => (
                      <div key={item.label} className="detail-spec-card">
                        <img src={item.img} alt={item.label} />
                        <p>{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="detail-description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt.
                </p>

                <div className="detail-form">
                  <div className="detail-row date-time-row">
                    <label className="detail-section-label">Select date &amp; Time</label>
                    <div className="detail-date-time-fields">
                      <input placeholder="Date" className="detail-input" />
                      <input placeholder="Time" className="detail-input" />
                    </div>
                  </div>

                  <div className="detail-row two">
                    <div className="detail-field">
                      <label className="detail-field-label">Adults</label>
                      <input placeholder="MM/YY" className="detail-input" />
                    </div>
                    <div className="detail-field">
                      <label className="detail-field-label">Children</label>
                      <input placeholder="Children" className="detail-input" />
                    </div>
                  </div>

                  <div className="detail-row two">
                    <div className="detail-field">
                      <label className="detail-field-label">Add Location</label>
                      <input placeholder="Enter location" className="detail-input" />
                    </div>
                    <div className="detail-field">
                      <label className="detail-field-label">In-House Captain</label>
                      <input placeholder="Select Captain" className="detail-input" />
                    </div>
                  </div>

                  <div className="detail-row options">
                    <div className="detail-options-card">
                      <label className="detail-options-title">Select date &amp; Time</label>
                      <div className="detail-radio-group">
                        <label className="detail-radio-label">
                          <input type="radio" name="captain" defaultChecked className="detail-radio" />
                          <span>In-House Captain</span>
                        </label>
                        <label className="detail-radio-label">
                          <input type="radio" name="captain" className="detail-radio" />
                          <span>Camping</span>
                        </label>
                        <label className="detail-radio-label">
                          <input type="radio" name="captain" className="detail-radio" />
                          <span>Late Arrival</span>
                        </label>
                      </div>
                    </div>
                    <div className="detail-map-container">
                      <MapContainer
                        center={[25.2048, 55.2708]}
                        zoom={13}
                        style={{ height: "100%", width: "100%", borderRadius: "12px" }}
                        zoomControl={false}
                      >
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[25.2048, 55.2708]} icon={redIcon}>
                          <Popup>Selected Location</Popup>
                        </Marker>
                      </MapContainer>
                    </div>
                  </div>

                  <div className="detail-submit">
                    <button
                      type="button"
                      className="doc-submit-btn"
                      onClick={() => setCurrentView("bookingManagement")}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : currentView === "bookingManagement" ? (
            <div className="booking-management-view">
              <h2 className="booking-management-title">Booking Management</h2>
              
              <div className="booking-management-header">
                <div className="booking-tabs">
                  <button
                    type="button"
                    className={`booking-tab ${bookingTab === "upcoming" ? "active" : ""}`}
                    onClick={() => setBookingTab("upcoming")}
                  >
                    Upcoming Booking
                  </button>
                  <button
                    type="button"
                    className={`booking-tab ${bookingTab === "previous" ? "active" : ""}`}
                    onClick={() => setBookingTab("previous")}
                  >
                    Previous Trip
                  </button>
                </div>
                <div className="booking-search">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="booking-search-input"
                  />
                  <span className="booking-search-icon">
                  <i class="bi bi-search"></i>
                  </span>
                </div>
              </div>

              <div className="booking-cards-grid">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="booking-card">
                    <div className="booking-card-image">
                      <img src={boatDetailBg} alt="Boat" />
                    </div>
                    <div className="booking-card-content">
                      <h3 className="booking-card-title">Calma Suite 1</h3>
                      <p className="booking-card-ref">Ref #:3265</p>
                      <p className="booking-card-date">Dec 31, 2025 - 10 AM - 12 PM</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="payment-options-container">
              {/* Selected Package Card */}
              <div
                className="selected-package-card"
                style={{ backgroundImage: `url(${paymentBgImg})` }}
              >
                <div className="selected-package-info">
                  <div>
                    <h3 className="selected-package-name">{selectedPackage}</h3>
                    <p className="selected-package-label">
                      Primary Best package
                    </p>
                  </div>
                  <div className="selected-package-price">AED 1,499/mo</div>
                  <div className="selected-package-checkmark">
                    <img src={blueTickImg} alt="" />
                  </div>
                </div>
              </div>

              {/* Payment Frequency Options */}
              <div className="payment-frequency-grid">
                <div
                  className={`payment-frequency-card ${
                    selectedFrequency === "Monthly" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedFrequency("Monthly")}
                >
                  <div className="frequency-info">
                    <div className="frequency-header">
                      <h4 className="frequency-name">Monthly</h4>
                      <p className="frequency-price">AED 2,500/mo</p>
                    </div>
                    <p className="frequency-details">
                      Package price × 12 (paid monthly)
                    </p>
                    <div className="frequency-footer">
                      <p className="frequency-note">
                        Refundable, One-Time 5% VAT.
                      </p>
                      <div className="frequency-radio">
                        <input
                          type="radio"
                          name="frequency"
                          checked={selectedFrequency === "Monthly"}
                          onChange={() => setSelectedFrequency("Monthly")}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`payment-frequency-card ${
                    selectedFrequency === "Semi-Annual" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedFrequency("Semi-Annual")}
                >
                  <div className="frequency-info">
                    <div className="frequency-header">
                      <h4 className="frequency-name">Semi-Annual</h4>
                      <p className="frequency-price">AED 2,500/mo</p>
                    </div>
                    <p className="frequency-details">Two payments</p>
                    <div className="frequency-footer">
                      <p className="frequency-note">
                        Refundable, One-Time 5% VAT.
                      </p>
                      <div className="frequency-radio">
                        <input
                          type="radio"
                          name="frequency"
                          checked={selectedFrequency === "Semi-Annual"}
                          onChange={() => setSelectedFrequency("Semi-Annual")}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`payment-frequency-card ${
                    selectedFrequency === "Annual" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedFrequency("Annual")}
                >
                  <div className="frequency-info">
                    <div className="frequency-header">
                      <h4 className="frequency-name">Annual</h4>
                      <p className="frequency-price">AED 2,500/mo</p>
                    </div>
                    <p className="frequency-details">One full payment</p>
                    <div className="frequency-footer">
                      <p className="frequency-note">
                        Refundable, One-Time 5% VAT.
                      </p>
                      <div className="frequency-radio">
                        <input
                          type="radio"
                          name="frequency"
                          checked={selectedFrequency === "Annual"}
                          onChange={() => setSelectedFrequency("Annual")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <div className="payment-continue-container">
                <button
                  type="button"
                  className="payment-continue-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentView("schedule");
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {showSuccess && (
        <div className="success-overlay">
          <div className="success-modal">
            <button
              className="success-close"
              onClick={() => setShowSuccess(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="success-icon">
              <div className="success-icon-circle">
                <img src={whiteTickImg} alt="Success" />
              </div>
            </div>
            <h3 className="success-title">Successful!</h3>
            <p className="success-subtitle">
              You have scheduled your club briefing successfully
            </p>
            <div className="success-details">
              <div className="success-detail-title">Date &amp; Time</div>
              <div className="success-detail-value">
                Dec 31, 2025 – 10 AM – 12 PM
              </div>
              <div className="success-detail-ref">Ref #: 3265</div>
            </div>
            <button
              className="success-primary"
              onClick={() => {
                setShowSuccess(false);
                setCurrentView("packages");
              }}
            >
              Back to Packages
            </button>
          </div>
        </div>
      )}

      {showPaymentSuccess && (
        <div className="success-overlay">
          <div className="success-modal">
            <button
              className="success-close"
              onClick={() => setShowPaymentSuccess(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="success-icon">
              <div className="success-icon-circle">
                <img src={whiteTickImg} alt="Success" />
              </div>
            </div>
            <h3 className="success-title">Payment Successful</h3>
            <p className="success-subtitle">SEALUX ฿ 1,499</p>
            <div className="success-details">
              <div className="success-detail-title">Date &amp; Time</div>
              <div className="success-detail-value">
                Dec 31, 2025 – 10 AM – 12 PM
              </div>
              <div className="success-detail-ref">Payment Ref #:3265</div>
            </div>
            <div className="success-actions">
              <button
                className="success-secondary"
                onClick={() => {
                  setShowPaymentSuccess(false);
                  setCurrentView("documentUpload");
                }}
              >
                View Invoice
              </button>
              <button
                className="success-primary"
                onClick={() => {
                  setShowPaymentSuccess(false);
                  setCurrentView("packages");
                }}
              >
                Back to Packages
              </button>
            </div>
          </div>
        </div>
      )}

      {showUploadSuccess && (
        <div className="success-overlay">
          <div className="success-modal">
            <button
              className="success-close"
              onClick={() => setShowUploadSuccess(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="success-icon">
              <div className="success-icon-circle">
                <img src={whiteTickImg} alt="Success" />
              </div>
            </div>
            <h3 className="success-title">Successful</h3>
            <p className="success-subtitle">
              Your payment has been done successfully to <br /> check this you can
              visit the order page
            </p>
            <button
              className="success-primary"
              onClick={() => {
                setShowUploadSuccess(false);
                setCurrentView("packages");
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {showAgreement && (
        <div className="agreement-overlay">
          <div className="agreement-modal">
            <button
              className="agreement-close"
              onClick={() => setShowAgreement(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="agreement-title">Review Contract</h3>
            <ul className="agreement-list">
              <li>
                Membership is valid for personal use only &amp; cannot be
                transferred or shared.
              </li>
              <li>All payments are non-refundable once processed.</li>
              <li>
                Members must maintain accurate account and payment information.
              </li>
              <li>
                The company reserves the right to modify or discontinue services
                with prior notice.
              </li>
              <li>
                Misuse, abuse, or fraudulent activity may result in suspension
                or termination.
              </li>
              <li>
                Renewal is automatic unless cancelled before the next billing
                cycle.
              </li>
              <li>
                By joining, you agree to our Privacy Policy and Terms of
                Service.
              </li>
            </ul>
            <label className="agreement-toggle-row">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <span className="agreement-toggle-slider" aria-hidden="true" />
              <span className="agreement-toggle-text">
                John Cary agree with membership terms
              </span>
            </label>
            <button
              className="agreement-save"
              onClick={() => {
                setShowAgreement(false);
                setShowSuccess(true);
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Membership;
