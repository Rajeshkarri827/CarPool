import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaCar, FaLeaf, FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import CarImage from "../assets/car2.jpg";
import JourneysIcon from "../assets/journeysicon.png";
import CarRiderIcon from "../assets/iconcar.png";
import SmartRidingIcon from "../assets/smart.png";
import "./Land.css";

function ReviewSlider() {
  const reviews = [
    {
      quote:
        "“Norem ipsum dolor sit amet consectetur adipisicing elit quis nostrum exercitao duis iure dolor reprehenderit incidun labore et dolore magna aliqua exercitation.”",
      author: "Donald James",
    },
    {
      quote:
        "“I had an amazing experience with Carpool. The ride was comfortable and the service was top-notch!”",
      author: "Alex Johnson",
    },
    {
      quote:
        "“Carpool exceeded my expectations. Reliable, friendly drivers and a smooth journey!”",
      author: "Priya Singh",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="reviews-slider">
      <div className="review-slide d-flex flex-column align-items-center justify-content-center gap-3">
        <div className="review-content p-3 bg-white rounded shadow">
          <p className="review-quote fst-italic">
            {reviews[currentIndex].quote}
          </p>
          <p className="review-author fw-bold">
            {reviews[currentIndex].author}
          </p>
        </div>
      </div>
      <div className="slider-controls d-flex justify-content-center gap-2 mt-3">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

function Land() {
  // Sample drivers data (if needed in other sections)
  const drivers = [
    { name: "Ben Stokes" },
    { name: "Shane Michael" },
    { name: "John Matthew" },
    { name: "Emily Clark" },
    { name: "Michael Lee" },
    { name: "Jessica Brown" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 200;
      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          document.querySelectorAll(".nav-link").forEach((link) =>
            link.classList.remove("active")
          );
          document.querySelector(`a[href='#${section.id}']`)?.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      {/* --- NAVBAR using Bootstrap --- */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            {/* Uncomment and use Logo if needed */}
            {/* <img src={Logo} alt="Carpool Logo" className="nav-logo me-2" /> */}
            <FaCar size={24} style={{ color: "black" }} className="me-2" />
            <span>Carpool</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#join">
                  Join Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#guest">
                  Guest Login
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="moreDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="moreDropdown">
                  <li>
                    <a className="dropdown-item" href="#ride-options">
                      Ride Options
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#how-it-works">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#drivers">
                      Our Best Drivers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#about">
                      About Carpool
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#reviews">
                      Reviews
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link phone-button" href="tel:9876543213">
                  9876543213
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION: Carpool text and Car2 image side by side --- */}
      <header className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <p className="hero-subtitle text-uppercase">
              Book for less today – try Carpool
            </p>
            <h1 className="hero-title">
              Need to Travel? Get a lift or Find a free seat
            </h1>
            <button
              className="hero-cta btn btn-primary"
              onClick={() => (window.location.href = "#join")}
            >
              Join Us
            </button>
          </div>
          {/* <div className="hero-image-container">
            <img src={CarImage} alt="Carpool Car" className="img-fluid" />
          </div> */}
        </div>
      </header>

      {/* --- SECTION 1: RIDE OPTIONS --- */}
      <section className="ride-options py-5" id="ride-options">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Where do you want to go?</h2>
            <a href="#popular" className="text-decoration-none">
              And More Popular Places
            </a>
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <div className="ride-card p-3 bg-white shadow-sm rounded d-flex align-items-center justify-content-between">
              <span>London to Manchester</span>
            </div>
            <div className="ride-card p-3 bg-white shadow-sm rounded d-flex align-items-center justify-content-between">
              <span>Belarus to Russia</span>
            </div>
            <div className="ride-card p-3 bg-white shadow-sm rounded d-flex align-items-center justify-content-between">
              <span>Florida to Newyork</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: HOW IT WORKS --- */}
      <section className="how-it-works py-5" id="how-it-works">
        <div className="container text-center">
          <h2>How It Works</h2>
          <div
            className="section-divider my-3 mx-auto"
            style={{ width: "60px", height: "2px" }}
          ></div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <h3>Find Your Ride</h3>
              <p>
                Norem ipsum dolor sit amet elit ebolore aliquaet enim nim veriam
                aliquip consequat
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h3>Select & Book</h3>
              <p>
                Norem ipsum dolor sit amet elit ebolore aliquaet enim nim veriam
                aliquip consequat
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h3>Travel Together</h3>
              <p>
                Norem ipsum dolor sit amet elit ebolore aliquaet enim nim veriam
                aliquip consequat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: OUR BEST DRIVERS --- */}
      <section className="best-drivers py-5" id="drivers">
        <div className="container text-center">
          <h2>Our Best Drivers</h2>
          <p className="mb-3">
            Norem ipsum dolor sit amet consectetur adipiscing elit ebolore magna
            aliqua eu enim ad minim veniam quis aliquip consequat
          </p>
          <div
            className="section-divider my-3 mx-auto"
            style={{ width: "60px", height: "2px" }}
          ></div>
          <div className="row">
            {drivers.map((driver, idx) => (
              <div className="col-md-4 col-lg-4 mb-4" key={idx}>
                <div className="driver-card bg-white shadow rounded overflow-hidden">
                  <div className="p-3 text-start">
                    <h3 className="driver-name">{driver.name}</h3>
                    <p className="driver-date-time">
                      Wed, 8 January at 2:00 PM
                    </p>
                    <p className="driver-price text-danger">₹19.50</p>
                    <ul className="driver-details list-unstyled">
                      <li>Max. 2 passengers</li>
                      <li>No pets</li>
                      <li>No smoking</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: ABOUT CARPOOL --- */}
      <section className="about-getrider py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>About Carpool</h2>
              <div className="feature d-flex align-items-start mb-3">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <img
                    src={JourneysIcon}
                    alt="Journeys Icon"
                    className="feature-icon me-3"
                  />
                </motion.div>
                <div>
                  <h3>Millions Of Journeys</h3>
                  <p>
                    Norem ipsum dolor sit amet elit ebolore aliquaet enim nim
                    veriam aliquip consequat...
                  </p>
                </div>
              </div>
              <div className="feature d-flex align-items-start mb-3">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <img
                      src={CarRiderIcon}
                    alt="Car Rider Icon"
                    className="feature-icon me-3"
                  />
                </motion.div>
                <div>
                  <h3>Largest Car Rider Service</h3>
                  <p>
                    Norem ipsum dolor sit amet elit ebolore aliquaet enim nim
                    veriam aliquip consequat...
                  </p>
                </div>
              </div>
              <div className="feature d-flex align-items-start">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <img
                    src={SmartRidingIcon}
                    alt="Smart Riding Icon"
                    className="feature-icon me-3"
                  />
                </motion.div>
                <div>
                  <h3>Simple & Smart Riding</h3>
                  <p>
                    Norem ipsum dolor sit amet elit ebolore aliquaet enim nim
                    veriam aliquip consequat...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src={CarImage} alt="Carpool Car" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: CUSTOMER REVIEWS --- */}
      <section className="customer-reviews py-5" id="reviews">
        <div className="container text-center">
          <h2>Customer Reviews</h2>
          <div
            className="section-divider my-3 mx-auto"
            style={{ width: "60px", height: "2px" }}
          ></div>
          <ReviewSlider />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="site-footer bg-dark text-light py-4">
        <div className="container text-center">
          <div className="footer-logo-wrap mb-3">
            <h2 className="footer-logo">Carpool</h2>
          </div>
          <p className="footer-description mx-auto mb-3" style={{ maxWidth: "600px" }}>
            Norem ipsum dolor sit amet consectetur adipiscing elit ebolore magna aliqua eu enim ad minim veniam quis aliquip consequat.
          </p>
          <div className="footer-social mb-3">
            <motion.div whileHover={{ scale: 1.2 }} className="d-inline-block mx-2">
              <FaFacebookF size={24} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="d-inline-block mx-2">
              <FaTwitter size={24} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="d-inline-block mx-2">
              <FaInstagram size={24} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="d-inline-block mx-2">
              <FaEnvelope size={24} />
            </motion.div>
          </div>
          <p className="footer-rights">(C) 2021 ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}

export default Land;
