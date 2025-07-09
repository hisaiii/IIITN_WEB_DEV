import React from "react";

export default function Registrar() {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
      {/* Registrar's Image and Title */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src="/images/registrar.png"
          alt="Registrar"
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-blue-500 shadow-lg mb-4 md:mb-0"
        />
        <div className="md:ml-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">Shri Kailas N. Dakhale</h2>
          <p className="text-gray-600 text-lg">Registrar, IIIT Nagpur</p>
          <p className="text-gray-600">Email: registrar@iiitn.ac.in</p>
          <p className="text-gray-600">Contact No: 9421995010</p>
        </div>
      </div>

      {/* Registrar's Profile */}
      <div className="mt-6 text-gray-700 text-lg leading-relaxed">
        <p className="font-semibold text-blue-700">Profile</p>
        <p className="mt-4">
          An engineer by education and an able Administrator with more than 30 years of experience, Shri Kailas N. Dakhale has contributed to Central Autonomous Bodies (CABs) such as Indian Institute of Technology, Kanpur, Visvesvaraya National Institute of Technology, Nagpur, and Indian Institute of Information Technology, Nagpur for the last two decades.
        </p>
        <p className="mt-4">
          He has vast experience in the administration of Higher Educational Institutions under the Ministry of Education, Government of India. His expertise in identifying critical academic and administrative issues and providing quick solutions has been widely recognized.
        </p>
        <p className="mt-4">
          He has worked in various departments, including Stores Purchase, Personnel Administration & Establishment, Estate Management, DOSA, Training & Placement, Hostel Management, Academic, and Examinations. He has handled matters related to institutional policy planning and execution, liaisoning with Central/State Government Authorities, and Industry.
        </p>
        <p className="mt-4">
          After serving IIT Kanpur for 14 years in multiple departments, he left as Deputy Registrar and joined VNIT Nagpur as Joint Registrar, where he served for about five years. He was recognized as an effective communicator with strong interpersonal skills. He has also worked in the industry for seven years, handling various industrial worker-related matters.
        </p>
        <p className="mt-4">
          Later, he joined Indian Institute of Information Technology, Nagpur, as I/c Registrar and subsequently became the Registrar on October 7, 2020.
        </p>
        <p className="mt-4">
          He has contributed and continues to contribute to managing Higher Educational Institutions as a member of various selection, review, and scrutiny committees of premier institutions, including IIT Kanpur, IIT Jodhpur, IIT Gandhinagar, IISER Bhopal, IIPR Kanpur, Central University Hyderabad, and many others.
        </p>
        <p className="mt-4">
          Shri Kailas N. Dakhale has also played a crucial role in establishing the Indian Institute of Information Technology, Design & Manufacturing (IIITDM) Jabalpur and Indian Institute of Technology (IIT) Jodhpur.
        </p>
        <p className="mt-4 font-semibold text-gray-800">Shri Kailas N. Dakhale</p>
        <p className="text-gray-600">Registrar</p>
      </div>
    </div>
  );
}