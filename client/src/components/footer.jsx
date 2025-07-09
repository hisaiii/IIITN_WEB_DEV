import React from 'react';
import { Link } from "react-router-dom";  // Import Link

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B1529] text-white py-12 px-4 md:px-12">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Address */}
        <div>
          <img
            src="../../images/iiitn_logo.svg"
            alt="IIIT Nagpur Logo"
            className="w-16 h-16 mb-4"
          />
          <p className="mb-2">
            Survey No. 140,141/1 behind Br. Sheshrao Wankhade Shetkari Sahkari Soot Girni, Village - Waranga, PO - Dongargaon(Butibori), Tahsil- Nagpur (Rural), District Nagpur, Maharashtra- 441108
          </p>
          <p className="mb-1">📞 9405215010</p>
          <p>✉️ registrar@iiitn.ac.in</p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li><Link to="/grievance" className="hover:text-blue-400 cursor-pointer">Grievance</Link></li>
            <li><Link to="/networking-complaint" className="hover:text-blue-400 cursor-pointer">Networking Complaint</Link></li>
            <li><Link to="/grievance-committee" className="hover:text-blue-400 cursor-pointer">Grievance Committee SC/ST Cell</Link></li>
            <li><Link to="/anti-ragging" className="hover:text-blue-400 cursor-pointer">Anti-Ragging Committee</Link></li>
            <li><Link to="/internal-complaint" className="hover:text-blue-400 cursor-pointer">Internal Complaint Committee</Link></li>
            <li><Link to="/sexual-harassment-policy" className="hover:text-blue-400 cursor-pointer">Prevention of Sexual Harassment Policy</Link></li>
            <li><Link to="/equal-opportunity" className="hover:text-blue-400 cursor-pointer">Equal Opportunity Cell</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/webmail" className="hover:text-blue-400 cursor-pointer">Institute Webmail</Link></li>
            <li><Link to="/fees-payment" className="hover:text-blue-400 cursor-pointer">Online Fees Payment</Link></li>
            <li><Link to="/academic-calendar" className="hover:text-blue-400 cursor-pointer">Academic Calendar</Link></li>
            <li><Link to="/how-to-reach" className="hover:text-blue-400 cursor-pointer">How to Reach</Link></li>
            <li><Link to="/location" className="hover:text-blue-400 cursor-pointer">Location</Link></li>
            <li><Link to="/tender" className="hover:text-blue-400 cursor-pointer">Tender</Link></li>
            <li><Link to="/recruitment" className="hover:text-blue-400 cursor-pointer">Recruitment</Link></li>
            <li><Link to="/guest-house" className="hover:text-blue-400 cursor-pointer">Guest House</Link></li>
            <li><Link to="/contact-us" className="hover:text-blue-400 cursor-pointer">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>Copyright © 2025 | All Rights Reserved. Indian Institute of Information Technology, Nagpur</p>
      </div>
    </footer>
  );
}