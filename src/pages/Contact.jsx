import React from "react";

export default function Contact() {
  return (
    <main className="page-container">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message" required />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}

