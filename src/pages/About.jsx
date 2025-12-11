import React from "react";
import "../styles/About.scss";

export default function About() {
  return (
    <section className="about-page">
      <div className="about-banner">
        <h1>About Us</h1>
        <p>Empowering you with the wisdom of Ayurveda</p>
      </div>

      <div className="about-content">
  
        <div className="section who-we-are">
          <h2>Who We Are</h2>
          <p>
            We are a team passionate about Ayurveda and holistic wellness. Our
            goal is to provide accurate, accessible information about herbs,
            their benefits, and how they impact body types (Vata, Pitta, Kapha).
          </p>
        </div>

    
        <div className="section mission">
          <h2>Our Mission</h2>
          <p>
            To help individuals discover natural remedies and make informed
            choices for their health and well-being.
          </p>
        </div>

        <div className="section vision">
          <h2>Our Vision</h2>
          <p>
            A world where traditional wisdom meets modern wellness, making
            herbal knowledge accessible to everyone.
          </p>
        </div>

      
        <div className="section offer">
          <h2>What We Offer</h2>
          <ul>
            <li>Herb database with benefits and Prakriti impact</li>
            <li>Visual guides for Vata, Pitta, Kapha</li>
            <li>Tips for healthy living based on Ayurveda</li>
            <li>Resources for learning more about herbs</li>
          </ul>
        </div>

    
        <div className="section contact">
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:contact@yourapp.com">contact@yourapp.com</a></p>
          <p>Follow us on social media for updates and tips!</p>
        </div>
      </div>
    </section>
  );
}



