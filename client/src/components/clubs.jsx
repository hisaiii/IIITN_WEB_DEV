import React from "react";
// import "./Glance.css";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Clubs = () => {
  return (
    <section className="glance mt-8">
      {/* Background Image */}
      <div className="glance-background"></div>

      {/* Content Box */}
      <div className="glance-content">
        <h2>EVENTS@IIITN</h2>
        <p>
          Experience the vibrant culture of IIITN with annual tech, cultural,
          and entrepreneurial events that foster innovation, creativity, and
          leadership.
        </p>

        {/* Event List */}
        <ul className="event-list">
          <li
            onClick={() =>
              (window.location.href = "https://www.abhivyaktifest.in/")
            }
            className="cursor-pointer"
          >
            ABHIVYAKTI &gt;
          </li>

          <li
            onClick={() =>
              (window.location.href = "https://www.tantrafiesta.in/")
            }
            className="cursor-pointer"
          >
            TANTRAFIESTA &gt;
          </li>
          <li
            onClick={() => (window.location.href = "https://esummitiiitn.in/")}
            className="cursor-pointer"
          >
            E-SUMMIT &gt;
          </li>
          <li>
            <a
              href="../../../pdfs/27.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              KSHITIJ &gt;
            </a>
          </li>

          <li>
            <a href="/students/activities" className="cursor-pointer">
              CLUBS &gt;
            </a>
          </li>
        </ul>

        {/* Social Media Links */}
        <div className="social-icons">
          <a
            href="https://www.youtube.com/channel/UCcQEXD69BdMFyU8872dU2_A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://x.com/IIITN_OFFICIAL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/IIITNagpur/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/iiitnofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clubs;