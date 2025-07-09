import React, { useState } from "react";
import { FaChalkboardTeacher, FaLaptopCode, FaMicrochip } from "react-icons/fa";

export default function Departments() {
  const [selectedDept, setSelectedDept] = useState(1);

  const departmentInfo = {
    1: {
      name: "Computer Science & Engineering (CSE)",
      description:
        "The CSE Department at IIIT Nagpur focuses on cutting-edge computing technologies including AI, ML, Data Science, and Software Development.",
      icon: <FaLaptopCode className="text-blue-600 text-5xl mx-auto" />,
      labs: ["AI & ML Lab", "Cyber Security Lab", "Software Engineering Lab"],
      faculty: ["Dr. A. Sharma", "Dr. B. Verma", "Dr. C. Singh"],
    },
    2: {
      name: "Electronics & Communication Engineering (ECE)",
      description:
        "The ECE Department provides knowledge in VLSI, Embedded Systems, IoT, and Wireless Communication to shape future engineers.",
      icon: <FaMicrochip className="text-red-600 text-5xl mx-auto" />,
      labs: ["VLSI Design Lab", "Embedded Systems Lab", "Antenna & Communication Lab"],
      faculty: ["Dr. X. Kumar", "Dr. Y. Reddy", "Dr. Z. Iyer"],
    },
  };

  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-100 min-h-screen p-10">
      {/* Title */}
      <h1 className="text-center text-5xl font-bold text-gray-800 mb-10">
        Departments
      </h1>

      {/* Department Selection */}
      <div className="flex justify-center space-x-6 mb-10">
        {Object.keys(departmentInfo).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedDept(Number(key))}
            className={`px-6 py-3 rounded-lg font-semibold transition-all shadow-lg border-2 ${
              selectedDept === Number(key)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-800 border-gray-400 hover:bg-blue-400 hover:text-white"
            }`}
          >
            {departmentInfo[key].name}
          </button>
        ))}
      </div>

      {/* Department Details */}
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
        {departmentInfo[selectedDept].icon}
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">
          {departmentInfo[selectedDept].name}
        </h2>
        <p className="text-gray-600 mt-2">{departmentInfo[selectedDept].description}</p>
        
        {/* Labs */}
        <h3 className="text-2xl font-semibold text-gray-700 mt-6">Research Labs</h3>
        <ul className="list-disc list-inside text-gray-600">
          {departmentInfo[selectedDept].labs.map((lab, index) => (
            <li key={index}>{lab}</li>
          ))}
        </ul>

        {/* Faculty */}
        <h3 className="text-2xl font-semibold text-gray-700 mt-6">Faculty Members</h3>
        <ul className="list-disc list-inside text-gray-600">
          {departmentInfo[selectedDept].faculty.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}