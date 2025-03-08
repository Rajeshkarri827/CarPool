import React from 'react';
import './land.css';

const Land = () => {
  return (
    <>
      {/* Landing Section */}
      <section id="landing" className="container-custom">
        <div className="text-content">
          <h1>Carpool</h1>
          <p>Your fast, reliable, and affordable bike taxi service.</p>
          {/* Link to scroll down to the About section */}
          <a href="#about" className="btn-more">About</a>
        </div>
        <div className="image-content">
          <img src="car2.jpg" alt="Carpool Illustration" />
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="header-section">
          <div className="header-content">
            <h1 className="animate__animated animate__fadeInDown">
              Our Carpool Motive
            </h1>
            <p className="animate__animated animate__fadeInUp animate__delay-1s">
              Join the movement to revolutionize urban mobility.
            </p>
            {/* Link back to the Landing section */}
            <a href="#landing" className="btn-back">Back to Home</a>
          </div>
        </div>
        <div className="content-section">
          <div className="container">
            <h2 className="animate__animated animate__fadeInLeft">
              Sustainable Rides for a Better Tomorrow
            </h2>
            <p className="animate__animated animate__fadeInRight animate__delay-1s">
              At RideShare App, every shared ride helps build a healthier, more sustainable city. Our mission is to reduce traffic congestion and lower carbon emissions by promoting carpooling. We connect riders and drivers, ensuring every journey is safe, efficient, and cost-effective.
            </p>
            <p className="animate__animated animate__fadeInUp animate__delay-2s">
              Join our community and be part of a movement that values efficiency, affordability, and environmental responsibility. Experience a new era in urban mobility with RideShare App.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Land;
