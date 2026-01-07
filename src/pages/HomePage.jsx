import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import landingBg from "../assets/images/landingPageBg.png";
import landingBg from "../assets/images/landing-page-bg-img.png";
import logoBlue from "../assets/images/logo-blue.png";
import thumbnail1 from "../assets/images/thumbnail1.png";
import thumbnail2 from "../assets/images/thumbnail2.png";
import thumbnail3 from "../assets/images/thumbnail3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LandingPageHeader from "../components/LandingPageHeader";
import Footer from "../components/Footer";
import wheels from "../assets/images/wheel-img.png"
import leftBlueDeco from "../assets/images/left-blue-deco-img.png"
import yellowStrap from "../assets/images/yellow-strap.png";
import whiteStrap from "../assets/images/white-strap.png";
import blueStrap from "../assets/images/blue-strap.png";
import yellowStar from "../assets/images/yellow-star.png";
import whiteStar from "../assets/images/white-star.png";
import appBg from "../assets/images/app-bg-img.png";
import appSS1 from "../assets/images/app-ss1.png";
import appSS2 from "../assets/images/app-ss2.png";
import appSS3 from "../assets/images/app-ss3.png";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const packages = [
    {
      name: "SEA DWELLER",
      price: "AED 1,700/mo",
      theme: "pkg-brown",
      strap: whiteStrap,
      star: yellowStar,
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
      name: "SEALUX",
      price: "AED 1,499/mo",
      theme: "pkg-blue",
      strap: yellowStrap,
      star: whiteStar,
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
      price: "AED 2,500/mo",
      theme: "pkg-navy",
      strap: blueStrap,
      star: whiteStar,
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

  return (
    <div className="landing-page">
      <LandingPageHeader />
      <section
        className="landing-hero"
        style={{ backgroundImage: `url(${landingBg})` }}
      >
        <div className="landing-overlay mt-5">
          <div className="landing-hero-content" data-aos="fade-up" data-aos-delay="200">
            <h1>Nirvana Yachts &amp; Boats</h1>
            <p className="landing-hero-subtitle">
              Your gateway to a new marine world of premium boats, luxury <br /> yachts, and a full range of water sports and activities
            </p>
            <span className="landing-hero-divider"></span>
          </div>
        </div>
      </section>

      {/* Services Spacer */}

      <section className="about-section position-relative">
        <div className="about-grid">
          <div className="about-left" data-aos="fade-right" data-aos-delay="100">
            <div className="about-kicker">
              <span className="about-kicker-text">About Us</span>
              <img src={logoBlue} alt="" className="about-kicker-logo" />
            </div>
            <h2 className="about-heading">
              Bespoke services focused <br /> on luxury, safety, comfort, <br /> and sustainability
            </h2>
            <p className="about-subtext">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod temporju <br /> incididunt ut.
            </p>
            
          </div>
          <div className="about-right" data-aos="fade-left" data-aos-delay="100">
            <div className="about-images">
              <div className="about-image about-image-large">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  allowTouchMove={false}
                  simulateTouch={false}
                  touchStartPreventDefault={false}
                >
                  <SwiperSlide>
                    <img src={thumbnail1} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={thumbnail2} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={thumbnail3} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="about-image">
                <img src={thumbnail2} alt="" />
              </div>
              <div className="about-image">
                <img src={thumbnail3} alt="" />
              </div>
            </div>
          </div>
        </div>
        <p className="about-body">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
              sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <div className="wheels-img">
              <img src= {wheels} className="w-100 h-100" alt="" />
            </div>
            <div className="left-blue-deco-img">
              <img src= {leftBlueDeco} className="w-100 h-100" alt="" />
            </div>
      </section>
      
      <section className="packages-section" id="packages">
        <div className="packages-header" data-aos="fade-up">
          <h2 className="packages-title">Packages</h2>
          <p className="packages-subtitle">Our Simple 3 Membership package</p>
        </div>
        <div className="packages-grid">
          {packages.map((pkg) => (
            <div className={`pkg-card ${pkg.theme}`} key={pkg.name} data-aos="fade-up">
              <div className="pkg-corner">
                <img className="pkg-strap" src={pkg.strap} alt="" />
                <img className="pkg-star" src={pkg.star} alt="" />
              </div>
              <div className="pkg-header">
                <h3 className="pkg-name">{pkg.name}</h3>
                <p className="pkg-price">{pkg.price}</p>
              </div>
              <ul className="pkg-benefits">
                {pkg.benefits.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
              <div className="d-flex justify-content-center">
                <button type="button" className="pkg-button">Select Package</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="app-section"
        id="screenshots"
        style={{
          backgroundImage: `url(${appBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="app-overlay">
          <div className="app-header" data-aos="fade-up">
            <h2 className="app-title">Our Smart Mobile App Screenshorts</h2>
            <p className="app-subtitle">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
            </p>
          </div>
          <div className="app-slider" data-aos="fade-up">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop
              allowTouchMove={false}
              simulateTouch={false}
              touchStartPreventDefault={false}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              <SwiperSlide>
                <img src={appSS1} alt="App Screenshot 1" className="app-ss" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={appSS2} alt="App Screenshot 2" className="app-ss" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={appSS3} alt="App Screenshot 3" className="app-ss" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;
