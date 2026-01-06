import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import landingBg from "../assets/images/landingPageBg.png";
import membershipImg from "../assets/images/membership-img.png";
import orientationImg from "../assets/images/orientation-img.png";
import paymentImg from "../assets/images/payment-img.png";
import bookingImg from "../assets/images/booking-img.png";
import memberBg from "../assets/images/member-bg.png";
import orientationBg from "../assets/images/orientation-bg.png";
import boatCard1 from "../assets/images/boat1.png";
import boatCard2 from "../assets/images/boat2.png";
import boatCard3 from "../assets/images/boat3.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    title: "Exclusive Membership",
    description:
      "Gain access to a curated fleet of luxury yachts and premium lifestyle privileges.",
    image: membershipImg,
    bgImage: memberBg,
  },
  {
    title: "Personalized Orientation",
    description:
      "A guided onboarding experience to help you explore your membership benefits with ease.",
    image: orientationImg,
    bgImage: orientationBg,
  },
  {
    title: "Secure Payments",
    description:
      "Transparent and secure payment options designed for a smooth and trusted experience.",
    image: paymentImg,
    bgImage: memberBg,
  },
  {
    title: "Effortless Bookings",
    description:
      "Book your yacht experiences effortlessly with flexible scheduling and premium support.",
    image: bookingImg,
    bgImage: orientationBg,
  },
];

const boats = [
  {
    title: "250 DAUNTLESS #1",
    engine: "Location: Royal M Marina",
    length: "Length:16m",
    image: boatCard1,
  },
  {
    title: "250 DAUNTLESS #2",
    engine: "Location: Royal M Marina",
    length: "Length:16m",
    image: boatCard2,
  },
  {
    title: "250 DAUNTLESS #3",
    engine: "Location: Royal M Marina",
    length: "Length:16m",
    image: boatCard3,
  },
];

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="landing-page">
      <Header />
      <section
        className="landing-hero"
        style={{ backgroundImage: `url(${landingBg})` }}
      >
        <div className="landing-overlay mt-5">
          <div
            className="landing-hero-content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="landing-kicker">Welcome to Nirvana Yacht Club</p>
            <h1>Redefining Luxury Yacht Experiences</h1>
          </div>
        </div>
      </section>

      <section className="landing-services">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="service-card"
            style={{
              backgroundImage: `url(${service.bgImage})`,
              height: "430px",
            }}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="service-icon">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <p className="service-small">
              Enjoy a seamless, members-only experience designed to deliver
              comfort, exclusivity, and unforgettable moments on the water.
            </p>
          </div>
        ))}
      </section>

      {/* Services Spacer */}

      <div className="services-spacer" />
      <section className="boats-section">
        <div className="boats-header" data-aos="fade-up">
          <p className="boats-kicker">Boats &amp; Yachts</p>
          <h2 className="boats-heading">Our Premium Fleet</h2>
          <p className="text-black mt-3">
            Discover our collection of luxury boats, perfect for your next
            adventure on the water
          </p>
        </div>
        <div className="boats-grid">
          {boats.map((boat, index) => (
            <div
              className="boat-card"
              key={boat.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div
                className="boat-card-image"
                style={{ backgroundImage: `url(${boat.image})` }}
              />
              <div className="boat-card-body">
                <div className="boat-card-title">{boat.title}</div>
                <div className="boat-card-meta">
                  <span>{boat.engine}</span>
                  {/* <span>{boat.length}</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
