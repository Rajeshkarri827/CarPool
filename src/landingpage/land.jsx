import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCar, FaLeaf } from "react-icons/fa";
import "./land.css";
import React from "react";
import CarImage from "../assets/car2.jpg";

const reviews = [
  { id: 1, name: "Alice", rating: 5, review: "Excellent service! My daily commute has never been smoother." },
  { id: 2, name: "Bob", rating: 4, review: "Very reliable, and the rides are always comfortable." },
  { id: 3, name: "Charlie", rating: 5, review: "A game-changer in urban mobility. Highly recommended!" },
  { id: 4, name: "Diana", rating: 4, review: "Good value and eco-friendly. I'm a happy customer." },
];

const Land = () => {
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
    <div>
      {/* Navbar with extra buttons */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#home">
          Carpool
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#emissions">
                CO2 Emissions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviews">
                Reviews
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button className="btn btn-join mr-2" type="button">
              Join Us
            </button>
            <button className="btn btn-guest" type="button">
              Guest Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="hero-content">
          <h1>Carpool</h1>
          <p>Your fast, reliable, and affordable ride-sharing service.</p>
        </div>
        <img src={CarImage} alt="Carpool" className="floating-image" />
      </header>

      {/* About Section */}
      <section id="about" className="section about container mt-5 pt-5">
        <FaCar className="icon" />
        <h2>About Us</h2>
        <p>
          At Carpool, we are dedicated to transforming urban mobility. Our service provides a convenient, eco-friendly, and cost-effective solution for your daily commute.
        </p>
        <p>
          We focus on safety, innovation, and customer satisfaction. By reducing traffic congestion and promoting shared rides, we contribute to a cleaner environment and a smoother commute for everyone.
        </p>
      </section>

      {/* CO2 Emissions Section */}
      <section id="emissions" className="section emissions container mt-5 pt-5">
        <FaLeaf className="icon" />
        <h2>CO2 Emissions Controlled</h2>
        <p>
          We have successfully reduced over <strong>1,000 tonnes</strong> of CO2 emissions this year by optimizing routes and promoting shared rides. Our innovative approach not only benefits the environment but also helps you save on travel costs.
        </p>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="section reviews container mt-5 pt-5">
        <h2>Customer Reviews</h2>
        <div className="row justify-content-center mt-4">
          {reviews.map((review) => (
            <div key={review.id} className="col-md-4 mb-4">
              <div className="review-card">
                <h5 className="review-card-title">{review.name}</h5>
                <h6 className="review-card-subtitle">Rating: {review.rating} / 5</h6>
                <p className="review-card-text">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-light text-center py-4">
        <div className="container">
          <p>
            Contact us:{" "}
            <a href="mailto:info@carpool.com" className="text-light">
              info@carpool.com
            </a>
          </p>
          <p>&copy; 2025 Carpool Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Land;
