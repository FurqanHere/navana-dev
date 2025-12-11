import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
  const [currentView, setCurrentView] = useState("packages"); // "packages", "briefing", "summary"
  const [selectedPackage, setSelectedPackage] = useState("SEALUX");
  const [selectedFrequency, setSelectedFrequency] = useState("Annual");
  const [selectedDay, setSelectedDay] = useState(18);
  const [selectedSlot, setSelectedSlot] = useState(1); // index in slots array
  const [showSuccess, setShowSuccess] = useState(false); // existing success popup
  const [showAgreement, setShowAgreement] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [showUploadSuccess, setShowUploadSuccess] = useState(false);
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
      >
      </section>

      <section
        className="membership-packages-section"
        style={{ backgroundImage: `url(${membershipBgImg})` }}
      >
        {currentView !== "schedule" && currentView !== "details" && (
          <div className="membership-hero-content" data-aos="fade-up">
            <p className="membership-kicker">Membership</p>
            <h1 className="membership-heading">
              {currentView === "packages" ? "Select Best Package" : "Select Payment Options"}
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
                    <div className="membership-card-price">{pkg.price} <span className="duration-text">{pkg.duration}</span> </div>
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
                    <span role="img" aria-label="calendar"> <i className="bi bi-calendar-month"></i> </span>
                    <span>Select date of briefing</span>
                  </div>
                  <div className="schedule-month">November 2025</div>
                  <div className="schedule-weekdays">
                    {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
                      <div key={d} className="schedule-weekday">{d}</div>
                    ))}
                  </div>
                  <div className="schedule-days">
                    {[...Array(30)].map((_, idx) => {
                      const day = idx + 1;
                      const isSelected = day === selectedDay;
                      return (
                        <button
                          type="button"
                          key={day}
                          className={`schedule-day ${isSelected ? "selected" : ""}`}
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
                    <span role="img" aria-label="time">⏱️</span>
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
                        className={`schedule-slot ${isSelected ? "selected" : ""}`}
                        onClick={() => setSelectedSlot(idx)}
                      >
                        <span className="schedule-slot-text">{slot}</span>
                        <span className={`schedule-slot-check ${isSelected ? "selected" : ""}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="schedule-submit-wrap">
                <button className="schedule-submit-btn" onClick={() => setShowSuccess(true)}>
                  Submit
                </button>
                <button
                  className="details-nav-btn"
                  onClick={() => setCurrentView("details")}
                >
                  Continue
                </button>
              </div>
            </div>
          ) : currentView === "details" ? (
            <div className="details-section">
              <h2 className="details-heading">Personal Details &amp; Agreement</h2>
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
                  className="details-btn secondary"
                  onClick={() => setCurrentView("finalReview")}
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
                  <p className="final-plan-name">SEALUX</p>
                  <p className="final-plan-price">AED 1,499/mo</p>
                  <p className="final-plan-desc">Primary Best Package buy for easy.</p>
                </div>

                <div className="final-card icon-card">
                  <div className="final-plan-check">
                    <img src={whiteBgTick} alt="Selected" className="final-check-img" />
                  </div>
                </div>

                <div className="final-card secondary">
                  <div className="final-secondary-top">
                    <span className="final-term">Monthly</span>
                    <span className="final-secondary-price">AED 2,500/mo</span>
                  </div>
                  <p className="final-secondary-sub">Package price × 12 (paid monthly)</p>
                  <p className="final-secondary-note">Refundable, One-Time 5% VAT.</p>
                </div>
              </div>

              <div className="final-details-card">
                <div className="final-row">
                  <div>
                    <p className="final-label">Full Name</p>
                    <p className="final-value">Baki Phililnder</p>
                  </div>
                  <div>
                    <p className="final-label">Email</p>
                    <p className="final-value">baki@phililnderzen.com</p>
                  </div>
                </div>
                <div className="final-row">
                  <div>
                    <p className="final-label">Phone Number</p>
                    <p className="final-value">+971 26 078 7961</p>
                  </div>
                  <div>
                    <p className="final-label">Country</p>
                    <p className="final-value">United Arab Emirates</p>
                  </div>
                </div>
                <div className="final-row">
                  <div>
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
                    <div className="promo-row">
                      <input className="promo-input" placeholder="AXHUY2" defaultValue="AXHUY2" />
                      <button className="promo-apply">Apply</button>
                    </div>
                  </div>

                  <div className="pay-option pay-selected">
                    <div className="pay-radio" />
                    <span className="pay-label">Pay Online</span>
                    <div className="pay-icons">
                      <span className="pay-icon">💳</span>
                    </div>
                  </div>

                  <div className="pay-option">
                    <div className="pay-radio pay-off" />
                    <span className="pay-label">Cash / Cheques / Card <span className="pay-sub">(at office)</span></span>
                  </div>
                </div>
              </div>
              <button className="schedule-submit-btn payment-cta" onClick={() => setCurrentView("cardInfo")}>
                Proceed to Pay
              </button>
            </div>
          ) : currentView === "cardInfo" ? (
            <div className="card-info-view">
              <h2 className="details-heading">Card Information</h2>
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
              <button className="schedule-submit-btn" onClick={() => setShowPaymentSuccess(true)}>
                Pay
              </button>
            </div>
          ) : currentView === "documentUpload" ? (
            <div className="document-upload-view">
              <h2 className="details-heading">Document Upload</h2>
              <div className="document-upload-card">
                <div className="doc-radio-row">
                  <label><input type="radio" defaultChecked /> Emirates ID</label>
                  <label><input type="radio" /> Passport</label>
                </div>
                <div className="doc-grid">
                  <div className="doc-box">
                    <p className="final-label">Emirates ID</p>
                    <p className="final-label">Front Side</p>
                    <div className="doc-placeholder">Front preview</div>
                    <p className="final-label">Back Side</p>
                    <div className="doc-placeholder">Back preview</div>
                  </div>
                  <div className="doc-box">
                    <p className="final-label">Boat License</p>
                    <div className="doc-placeholder">Upload License</div>
                  </div>
                </div>
              </div>
              <button className="schedule-submit-btn" onClick={() => setShowUploadSuccess(true)}>
                Submit
              </button>
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
                    <p className="selected-package-label">Primary Best package</p>
                  </div>
                  <div className="selected-package-price">AED 1,499/mo</div>
                  <div className="selected-package-checkmark">
                    <img src={ blueTickImg } alt="" />
                  </div>
                </div>
              </div>

              {/* Payment Frequency Options */}
              <div className="payment-frequency-grid">
                <div 
                  className={`payment-frequency-card ${selectedFrequency === "Monthly" ? "selected" : ""}`}
                  onClick={() => setSelectedFrequency("Monthly")}
                >
                  <div className="frequency-info">
                    <div className="frequency-header">
                      <h4 className="frequency-name">Monthly</h4>
                      <p className="frequency-price">AED 2,500/mo</p>
                    </div>
                    <p className="frequency-details">Package price × 12 (paid monthly)</p>
                    <div className="frequency-footer">
                      <p className="frequency-note">Refundable, One-Time 5% VAT.</p>
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
                  className={`payment-frequency-card ${selectedFrequency === "Semi-Annual" ? "selected" : ""}`}
                  onClick={() => setSelectedFrequency("Semi-Annual")}
                >
                  <div className="frequency-info">
                    <div className="frequency-header">
                      <h4 className="frequency-name">Semi-Annual</h4>
                      <p className="frequency-price">AED 2,500/mo</p>
                    </div>
                    <p className="frequency-details">Two payments</p>
                    <div className="frequency-footer">
                      <p className="frequency-note">Refundable, One-Time 5% VAT.</p>
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
                  className={`payment-frequency-card ${selectedFrequency === "Annual" ? "selected" : ""}`}
                  onClick={() => setSelectedFrequency("Annual")}
                >
                  <div className="frequency-info">
                    <div className="frequency-header">
                      <h4 className="frequency-name">Annual</h4>
                      <p className="frequency-price">AED 2,500/mo</p>
                    </div>
                    <p className="frequency-details">One full payment</p>
                    <div className="frequency-footer">
                      <p className="frequency-note">Refundable, One-Time 5% VAT.</p>
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
                  className="payment-continue-btn"
                  onClick={() => setCurrentView("schedule")}
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
              <div className="success-detail-value">Dec 31, 2025 – 10 AM – 12 PM</div>
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
              <div className="success-detail-value">Dec 31, 2025 – 10 AM – 12 PM</div>
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
              Your payment has been done successfully to check this you can visit the order page
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
              <li>Membership is valid for personal use only &amp; cannot be transferred or shared.</li>
              <li>All payments are non-refundable once processed.</li>
              <li>Members must maintain accurate account and payment information.</li>
              <li>The company reserves the right to modify or discontinue services with prior notice.</li>
              <li>Misuse, abuse, or fraudulent activity may result in suspension or termination.</li>
              <li>Renewal is automatic unless cancelled before the next billing cycle.</li>
              <li>By joining, you agree to our Privacy Policy and Terms of Service.</li>
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

