import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import DoctorsData from "../data/doctors.json";
import "../styles/Doctors.scss";

export default function FindDoctors() {
  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <main className="doctors-page">
      <Link to="/" className="back-link">
        <FaArrowLeft className="arrow-icon" /> 
      </Link>

      <h1>Find Doctors</h1>
      <div className="doctors-list">
        {DoctorsData.map((doc) => (
          <Link key={doc.id} to={`/doctor/${doc.id}`} className="doctor-card">
            <div
              className="doctor-image-placeholder"
              style={{ backgroundColor: "#3A643B" }}
            >
              {getInitials(doc.name)}
            </div>
            <h3>{doc.name}</h3>
            <p className="specialty">{doc.specialty}</p>
            <p className="experience">{doc.experience} years experience</p>
            <p className="rating">Rating: {doc.rating} ⭐</p>
          </Link>
        ))}
      </div>
    </main>
  );
}






