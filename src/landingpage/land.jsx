import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaCar, FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import CarImage from "../assets/car2.jpg";
import JourneysIcon from "../assets/journeysicon.png";
import CarRiderIcon from "../assets/caricon.png";
import SmartRidingIcon from "../assets/smart.png";
import "./Land.css";
import { Link } from "react-router-dom";

// Animation variant for fade in and upward motion
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
    </div>
  );
}

function ReviewSlider() {
  const reviews = [
    {
      quote:
        "Carpool made my daily commute a breeze. The drivers are punctual and the app is incredibly user-friendly.",
      author: "Sarah Thompson",
    },
    {
      quote:
        "Sharing rides with Carpool has not only saved me money but also helped reduce traffic congestion in my city.",
      author: "David Miller",
    },
    {
      quote:
        "I love the convenience and community feeling that comes with every ride on Carpool. Highly recommended!",
      author: "Emily Davis",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <motion.div className="reviews-slider" {...fadeInUp}>
      <div className="review-slide d-flex flex-column align-items-center justify-content-center gap-3">
        <div className="review-content p-3 bg-white rounded shadow">
          <p className="review-quote fst-italic">{reviews[currentIndex].quote}</p>
          <p className="review-author fw-bold">{reviews[currentIndex].author}</p>
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
    </motion.div>
  );
}

function Land() {
  const [loading, setLoading] = useState(true);
  // Sample drivers data
  const drivers = [
    { name: "Ben Stokes" },
    { name: "Shane Michael" },
    { name: "John Matthew" },
    { name: "Emily Clark" },
    { name: "Michael Lee" },
    { name: "Jessica Brown" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    // Scroll spy effect for nav links
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
          document.querySelector(`a[href="#${section.id}"]`)?.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App fade-in">
      <motion.nav className="navbar navbar-expand-lg navbar-light bg-light" {...fadeInUp}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
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
                <Link to={"/register"}>
                <a className="nav-link" href="#join">
                  Join Us
                </a>
                </Link>
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
            </ul>
          </div>
        </div>
      </motion.nav>

      <motion.header className="hero" {...fadeInUp}>
        <div className="hero-container">
          <div className="hero-text">
            <p className="hero-subtitle text-uppercase">
              Book for less today – try Carpool
            </p>
            <h1 className="hero-title">
              Need to Travel? Get a lift or Find a free seat
            </h1>
            <button id="regbtn"
              className="hero-cta btn btn-primary"
              onClick={() => (window.location.href = "/register")}
            >
              Join Us
            </button>
          </div>
          {/* Uncomment below if you want to display the hero image */}
          {/* <div className="hero-image-container">
            <img src={CarImage} alt="Carpool Car" className="img-fluid" />
          </div> */}
        </div>
      </motion.header>

      <motion.section className="ride-options py-5" id="ride-options" {...fadeInUp}>
        <div className="container">
          <div className="text-center mb-4">
            <h2>Where do you want to go?</h2>
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <div className="ride-card p-3 bg-white shadow-sm rounded d-flex align-items-center justify-content-between">
              <span>Hyderabad to Vijayawada</span>
            </div>
            <div className="ride-card p-3 bg-white shadow-sm rounded d-flex align-items-center justify-content-between">
              <span>Vijayawada to Visakhapatnam</span>
            </div>
            <div className="ride-card p-3 bg-white shadow-sm rounded d-flex align-items-center justify-content-between">
              <span>Hyderabad to Warangal</span>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="how-it-works py-5" id="how-it-works" {...fadeInUp}>
        <div className="container text-center">
          <h2>How It Works</h2>
          <div className="section-divider my-3 mx-auto"></div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <h3>Find Your Ride</h3>
              <p>
                Browse available rides near you, check departure times, and select the option that best fits your schedule.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h3>Select & Book</h3>
              <p>
                Choose your preferred ride, book your seat instantly, and enjoy competitive pricing on every journey.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h3>Travel Together</h3>
              <p>
                Share your journey with like-minded travelers, reduce your carbon footprint, and save money while commuting.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="best-drivers py-5" id="drivers" {...fadeInUp}>
        <div className="container text-center">
          <h2>Our Best Drivers</h2>
          <p className="mb-3">
            Our drivers are experienced, verified professionals committed to providing safe, reliable, and comfortable rides.
          </p>
          <div className="section-divider my-3 mx-auto"></div>
          <div className="row">
            {drivers.map((driver, idx) => (
              <div className="col-md-4 col-lg-4 mb-4" key={idx}>
                <div className="driver-card bg-white shadow rounded overflow-hidden">
                  <div className="p-3 text-start">
                    <h3 className="driver-name">{driver.name}</h3>
                    <p className="driver-date-time">Wed, 8 January at 2:00 PM</p>
                    <p className="driver-price text-danger">₹789.50</p>
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
      </motion.section>

      <motion.section className="about-getrider py-5" id="about" {...fadeInUp}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>About Carpool</h2>
              <div className="feature d-flex align-items-start mb-3">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <img src={JourneysIcon} alt="Journeys Icon" className="feature-icon me-3" />
                </motion.div>
                <div>
                  <h3>Millions Of Journeys</h3>
                  <p>
                    Carpool has facilitated millions of shared rides, connecting communities and offering affordable transportation solutions for everyday travel.
                  </p>
                </div>
              </div>
              <div className="feature d-flex align-items-start mb-3">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <img src={CarRiderIcon} alt="Car Rider Icon" className="feature-icon me-3" />
                </motion.div>
                <div>
                  <h3>Largest Car Rider Service</h3>
                  <p>
                    With a vast network of drivers and riders, Carpool stands as one of the largest and most trusted carpooling platforms in the region.
                  </p>
                </div>
              </div>
              <div className="feature d-flex align-items-start">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <img src={SmartRidingIcon} alt="Smart Riding Icon" className="feature-icon me-3" />
                </motion.div>
                <div>
                  <h3>Simple & Smart Riding</h3>
                  <p>
                    Our user-friendly app and smart routing technology make booking a ride seamless, efficient, and cost-effective.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src={CarImage} alt="Carpool Car" className="img-fluid" />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="customer-reviews py-5" id="reviews" {...fadeInUp}>
        <div className="container text-center">
          <h2>Customer Reviews</h2>
          <div className="section-divider my-3 mx-auto"></div>
          <ReviewSlider />
        </div>
      </motion.section>

      <motion.footer className="site-footer bg-dark text-light py-4" {...fadeInUp}>
        <div className="container text-center">
          <div className="footer-logo-wrap mb-3">
            <h2 className="footer-logo">Carpool</h2>
          </div>
          <p className="footer-description mx-auto mb-3" style={{ maxWidth: "600px" }}>
            Carpool is dedicated to providing an affordable, sustainable, and convenient way to share rides. Join us and be part of the movement towards a greener future.
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
      </motion.footer>
    </div>
  );
}

export default Land;
