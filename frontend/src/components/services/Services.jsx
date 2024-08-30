import React from "react";
import "./Services.css";
import { useHistory } from "react-router-dom"; 

function Services() {
  const history = useHistory();

  const navigateToPage = (page) => {
    history.push(`/${page}`);
  };

  return (
    <section className="services">
      <h2 className="services-title">Our Offerings</h2>
      <p className="services-subtitle">Empowering your artistic journey</p>
      <div className="services-cards">
        <div className="service-card">
          <img
            src="path_to_your_image_1.jpg"
            alt="Art showcase"
            className="service-image"
          />
          <button
            className="service-button"
            onClick={() => navigateToPage("art-showcase")}
          >
            Art Showcase &gt;
          </button>
          <p className="service-description">
            Display your artwork to a wider audience.
          </p>
        </div>
        <div className="service-card">
          <img
            src="path_to_your_image_2.jpg"
            alt="Artist networking"
            className="service-image"
          />
          <button
            className="service-button"
            onClick={() => navigateToPage("artist-networking")}
          >
            Artist Networking &gt;
          </button>
          <p className="service-description">
            Connect with fellow artists and art lovers.
          </p>
        </div>
        <div className="service-card">
          <img
            src="path_to_your_image_3.jpg"
            alt="Art resources"
            className="service-image"
          />
          <button
            className="service-button"
            onClick={() => navigateToPage("art-resources")}
          >
            Art Resources &gt;
          </button>
          <p className="service-description">
            Access a wealth of art-related information.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
