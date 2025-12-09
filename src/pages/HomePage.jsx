import React from "react";
import landingBg from "../assets/images/landingPageBg.png";
import membershipImg from "../assets/images/membership-img.png";
import orientationImg from "../assets/images/orientation-img.png";
import paymentImg from "../assets/images/payment-img.png";
import bookingImg from "../assets/images/booking-img.png";

const services = [
  {
    title: "Membership",
    description:
      "Neque porro quisquam est qui dolorem ipsum.",
    image: membershipImg,
  },
  {
    title: "Orientation",
    description:
      "Neque porro quisquam est qui dolorem ipsum.",
    image: orientationImg,
  },
  {
    title: "Payment",
    description:
      "Neque porro quisquam est qui dolorem ipsum.",
    image: paymentImg,
  },
  {
    title: "Bookings",
    description:
      "Neque porro quisquam est qui dolorem ipsum.",
    image: bookingImg,
  },
];

const HomePage = () => {
  return (
    <div className="landing-page">
      <section
        className="landing-hero"
        style={{ backgroundImage: `url(${landingBg})` }}
      >
        <div className="landing-overlay">
          <div className="landing-nav">
            <div className="landing-logo">Nirvana</div>
            <ul>
              <li className="active">Home</li>
              <li>About Us</li>
              <li>Boats</li>
              <li>Membership</li>
              <li>Location</li>
              <li>Contacts</li>
            </ul>
          </div>

          <div className="landing-hero-content">
            <p className="landing-kicker">
              Experience Nirvana Yachts &amp; Boats
            </p>
            <h1>Your New Adventure Starts Here!</h1>
          </div>
        </div>
      </section>

      <section className="landing-services">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <div className="service-icon">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p className="service-small">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
