import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import DoctorsData from "../data/doctors.json";
import "../styles/DoctorProfile.scss";

export default function DoctorProfile() {
  const { id } = useParams();
  const doctor = DoctorsData.find((doc) => doc.id === parseInt(id));

  if (!doctor) return <p>Doctor not found</p>;

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <main className="doctor-profile">
      <Link to="/find-doctors" className="back-link">
        <FaArrowLeft className="arrow-icon" /> 
      </Link>

      <div className="profile-card">
        <div className="doctor-image-placeholder">
          {getInitials(doctor.name)}
        </div>
        <h1>{doctor.name}</h1>
        <p className="specialty">{doctor.specialty}</p>
        <p className="experience">{doctor.experience} years experience</p>
        <p className="rating">Rating: {doctor.rating} ⭐</p>
      </div>
    </main>
  );
}


