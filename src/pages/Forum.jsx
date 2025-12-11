import React from "react";
import { Link } from "react-router-dom";
import herb from "../data/forumPosts.json";
import "../styles/Forum.scss";
import VataImg from "../assets/images/Vata.png";
import KaphaImg from "../assets/images/Kapha.png";
import PittaImg from "../assets/images/Pitta.png";

import { FaArrowLeft } from "react-icons/fa";


import ChitrakImg from "../assets/images/Chitrak.png";

export default function Forum() {
  return (
    <section className="forum-page">
      <Link to="/" className="back-link">
        <FaArrowLeft className="arrow-icon" />
      </Link>

      <div className="forum-container">

        <div className="image-box">
          <img src={ChitrakImg} alt={herb.name} />
        </div>


        <div className="content-box">
          <h1>
            {herb.name} - {herb.botanical} <br />
            <span>(Sanskrit - {herb.sanskrit})</span>
          </h1>

          <p className="desc">{herb.description}</p>

          <h3>Why {herb.name}?</h3>

          <ul className="benefits">
            {herb.benefits.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>

          <h3>Prakriti Impact</h3>

          <div className="prakriti">
            <div className="circle vata">
              <img src={VataImg} alt="Vata" />
              <span>Vata</span>
              <small>{herb.prakriti.Vata}</small>
            </div>

            <div className="circle kapha">
              <img src={KaphaImg} alt="Kapha" />
              <span>Kapha</span>
              <small>{herb.prakriti.Kapha}</small>
            </div>

            <div className="circle pitta">
              <img src={PittaImg} alt="Pitta" />
              <span>Pitta</span>
              <small>{herb.prakriti.Pitta}</small>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}




