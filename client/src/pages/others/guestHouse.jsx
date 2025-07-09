import React from "react";

export default function GuestHouse() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Guest House
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="/images/ThumbnailImage.jpg"
          alt="Guest House"
          className="w-full md:w-3/4 lg:w-1/2 h-auto shadow-xl rounded-lg"
        />
      </div>

      {/* Guest House Information */}
      <div className="bg-white p-6 rounded-xl shadow-xl text-lg">
        {/* Booking Links */}
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Guest House Booking & Information
        </h2>
        <ul className="list-disc ml-6 mb-6">
          <li className="mb-2">
            <a href="#" className="text-blue-600 underline">
              Online Booking Form for Guest House
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-600 underline">
              Requisition Slip to Book Guest House
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-600 underline">
              Rules for the Allotment of Guest House Accommodation & Room Tariff
            </a>
          </li>
        </ul>

        {/* Contact Information */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Contact for Queries & Booking
        </h2>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <p className="font-semibold text-lg">Guest House IIIT Nagpur</p>
          <p className="mb-2">
            📞 Contact No: <span className="font-medium">9730075010</span>
          </p>

          <p className="font-semibold text-lg">Mr. Avinash Suryawanshi</p>
          <p className="mb-1">🏢 AoSD (Admin)</p>
          <p className="mb-1">
            📱 Mobile No: <span className="font-medium">9960206223</span>
          </p>
          <p className="mb-2">
            ✉️ Email:{" "}
            <a
              href="mailto:aosd@iiitn.ac.in"
              className="text-blue-600 underline"
            >
              aosd@iiitn.ac.in
            </a>
          </p>
        </div>

        {/* Address */}
        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-4">
          Address
        </h2>
        <p className="bg-gray-200 p-4 rounded-lg shadow-md">
          <strong>
            INDIAN INSTITUTE OF INFORMATION TECHNOLOGY NAGPUR (IIITN)
          </strong>
          <br />
          📍 S.No. 140, 141/1 Behind Br. Sheshrao Wankhade Shetkari Sahkari Soot
          Girni,
          <br />
          Village Waranga, Nagpur - 441108
        </p>

        {/* Payment & Nearby Hotels */}
        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-4">
          Payment & Accommodation
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">
            <a href="#" className="text-blue-600 underline">
              Payment details for guest house fees through SB Collect
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-600 underline">
              Guest House details and nearest hotel details
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
