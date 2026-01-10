import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import landingBg from "../assets/images/about-us/aboutUs-bgImg.png";
import promiseBg from "../assets/images/about-us/aboutUs-promiseBgImg.png";
import rightArrow from "../assets/images/about-us/aboutUsRightArrow.png";
import featureShip from "../assets/images/about-us/ship.png";
import featureLiscence from "../assets/images/about-us/liscence.png";
import featureUaeClub from "../assets/images/about-us/uae-club.png";
import featureMobApp from "../assets/images/about-us/mob-app.png";
import featureVersatileBoat from "../assets/images/about-us/versatile-boat.png";
import featureAddOns from "../assets/images/about-us/add-ons.png";
import featureSixPrime from "../assets/images/about-us/six-prime.png";
import featureClub from "../assets/images/about-us/club.png";
import Header from "../components/Header";
import LandingPageFooter from "../components/Footer";

const LandingPageAboutus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="landing-overlay">
          <div
            className="landing-hero-content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1 className="text-white">Nirvana Yachts &amp; Boats</h1>
            <p className="landing-hero-subtitle">
              Your gateway to a new marine world of premium boats, luxury <br />
              yachts, and a full range of water sports and activities
            </p>
          </div>
        </div>
      </section>

      <section className="aboutus-promise-section mt-5">
        <div className="aboutus-promise-wrapper" data-aos="fade-up">
          <div
            className="aboutus-promise-card"
            style={{ backgroundImage: `url(${promiseBg})` }}
          >
            <div className="aboutus-promise-panel">
              <h2 className="aboutus-promise-title">OUR PROMISE</h2>
              <p className="aboutus-promise-text">
                Bespoke services focused on luxury, safety, comfort, and
                sustainability
              </p>
              <div className="aboutus-promise-action">
                <button
                  type="button"
                  className="aboutus-promise-button"
                  aria-label="Our promise"
                >
                  <img src={rightArrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutus-sets-section">
        <div className="aboutus-sets-stats">
          <div className="aboutus-sets-stats-grid">
            <div className="aboutus-sets-stat" data-aos="fade-up">
              <div className="aboutus-sets-stat-number">8+</div>
              <div className="aboutus-sets-stat-label">Years Experience</div>
            </div>
            <div className="aboutus-sets-stat" data-aos="fade-up" data-aos-delay="50">
              <div className="aboutus-sets-stat-number">1000+</div>
              <div className="aboutus-sets-stat-label">Happy Members</div>
            </div>
            <div className="aboutus-sets-stat" data-aos="fade-up" data-aos-delay="100">
              <div className="aboutus-sets-stat-number">50+</div>
              <div className="aboutus-sets-stat-label">Premium Boats</div>
            </div>
            <div className="aboutus-sets-stat" data-aos="fade-up" data-aos-delay="150">
              <div className="aboutus-sets-stat-number">24/7</div>
              <div className="aboutus-sets-stat-label">Support</div>
            </div>
          </div>
        </div>

        <div className="aboutus-sets-content">
          <h2 className="aboutus-sets-title" data-aos="fade-up">
            WHAT SETS US APART?
          </h2>
          <p className="aboutus-sets-subtitle" data-aos="fade-up" data-aos-delay="80">
            Your gateway to a new marine world of premium boats
          </p>

          <div className="aboutus-sets-grid">
            <div className="aboutus-sets-item" data-aos="fade-up">
              <div className="aboutus-sets-icon">
                <img src={featureShip} alt="" />
              </div>
              <p className="aboutus-sets-text">
                A fleet of leading international <br />
                yacht &amp; boat brands.
              </p>
            </div>
            <div className="aboutus-sets-item" data-aos="fade-up" data-aos-delay="50">
              <div className="aboutus-sets-icon">
                <img src={featureLiscence} alt="" />
              </div>
              <p className="aboutus-sets-text">
                Boat license training <br />
                programme
              </p>
            </div>
            <div className="aboutus-sets-item" data-aos="fade-up" data-aos-delay="100">
              <div className="aboutus-sets-icon">
                <img src={featureUaeClub} alt="" />
              </div>
              <p className="aboutus-sets-text">
                UAE’s only club with <br />
                luxury houseboats.
              </p>
            </div>

            <div className="aboutus-sets-item" data-aos="fade-up">
              <div className="aboutus-sets-icon">
                <img src={featureMobApp} alt="" />
              </div>
              <p className="aboutus-sets-text">
                Mobile app for easy <br />
                booking
              </p>
            </div>
            <div className="aboutus-sets-item" data-aos="fade-up" data-aos-delay="50">
              <div className="aboutus-sets-icon">
                <img src={featureVersatileBoat} alt="" />
              </div>
              <p className="aboutus-sets-text">
                Versatile boats for cruising, <br />
                fishing, and water sports
              </p>
            </div>
            <div className="aboutus-sets-item" data-aos="fade-up" data-aos-delay="100">
              <div className="aboutus-sets-icon">
                <img src={featureAddOns} alt="" />
              </div>
              <p className="aboutus-sets-text">
                Add-ons: catering, décor, <br />
                water sports gear
              </p>
            </div>
          </div>

          <div className="aboutus-sets-bottom">
            <div className="aboutus-sets-item" data-aos="fade-up">
              <div className="aboutus-sets-icon">
                <img src={featureSixPrime} alt="" />
              </div>
              <p className="aboutus-sets-text">
                Six prime Abu Dhabi <br />
                marinas
              </p>
            </div>
            <div className="aboutus-sets-item" data-aos="fade-up" data-aos-delay="50">
              <div className="aboutus-sets-icon">
                <img src={featureClub} alt="" />
              </div>
              <p className="aboutus-sets-text">
                Club lounge with <br />
                premium hospitality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="about-section position-relative">
        <div className="about-grid">
          <div
            className="about-left"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="about-kicker">
              <span className="about-kicker-text">About Us</span>
              <img src={logoBlue} alt="" className="about-kicker-logo" />
            </div>
            <h2 className="about-heading">
              Bespoke services focused <br /> on luxury, safety, comfort, <br />
              and sustainability
            </h2>
            <p className="about-subtext">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod temporju <br /> incididunt ut.
            </p>
          </div>
          <div
            className="about-right"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="about-images" data-aos="zoom-in">
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
                    <img src={thumbnail1} alt="" className="hoverable" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={thumbnail2} alt="" className="hoverable" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={thumbnail3} alt="" className="hoverable" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="about-image">
                <img src={thumbnail2} alt="" className="hoverable" />
              </div>
              <div className="about-image">
                <img src={thumbnail3} alt="" className="hoverable" />
              </div>
            </div>
          </div>
        </div>
        <p className="about-body">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
        <div className="wheels-img">
          <img src={wheels} className="w-100 h-100" alt="" />
        </div>
        <div className="left-blue-deco-img">
          <img src={leftBlueDeco} className="w-100 h-100" alt="" />
        </div>
      </section> */}

      <LandingPageFooter />
    </div>
  );
};

export default LandingPageAboutus;
