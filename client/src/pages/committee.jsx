import React, { useState } from "react";

export default function Committee() {
  // State to track selected committee
  const [selectedCommittee, setSelectedCommittee] = useState("bog");

  // Committee Data
  const committeeData = {
    bog: {
      title: "Board Of Governors",
      members: [
        {
          sl: 1,
          name: "Shri Ravi Sharma",
          position: "Chairperson",
          details:
            "Chairperson - BoG, IIIT Una, HP. President - IIT Alumni Council. Chairman - Telecom Equipment Manufacturers Association of India (TEMA). Founder - Prama Jyoti Foundation / Mission Chetna / Subodhanand Foundation.",
        },
        {
          sl: 2,
          name: "Ms Saumya Gupta",
          position: "Member",
          details: "JS (Technical Education), MoE, New Delhi",
        },
        {
          sl: 3,
          name: "Dr. Vinod Mohitkar",
          position: "Member",
          details: "Director, DTE, Govt. of Maharashtra, Mumbai",
        },
        {
          sl: 4,
          name: "Shri Ajay R. Bohora",
          position: "Member",
          details: "Co-Founder, HDFC Credila Financial Services, Nashik",
        },
        {
          sl: 5,
          name: "Dr. (Mrs). B. Padma S. Rao",
          position: "Member",
          details: "Chief Scientist and Head, CSIR-NEERI, Nagpur",
        },
        {
          sl: 6,
          name: "Shri. V. Murlidharan",
          position: "Member",
          details: "Founder & Managing Trustee, Sevalaya, Chennai",
        },
      ],
    },
    finance: {
      title: "Finance Committee",
      members: [
        {
          sl: 1,
          name: "Shri Ravi Sharma",
          position: "Chairperson",
          details:
            "Chairperson - BoG, IIIT Una, HP. President - IIT Alumni Council. Chairman - Telecom Equipment Manufacturers Association of India (TEMA). Founder - Prama Jyoti Foundation / Mission Chetna / Subodhanand Foundation.",
        },
        {
          sl: 2,
          name: "Shri. N.S. Bisht",
          position: "Member",
          details: "Dy. Secretary, IFD MOE, New Delhi",
        },
        {
          sl: 3,
          name: "Professor (Dr) Prem Lal Patel",
          position: "Member",
          details: "Director, IIIT Nagpur",
        },
        {
          sl: 4,
          name: "Dr. Sachin Virsingh Solanki",
          position: "Member",
          details: "Joint Director, Technical Education, DTE, Nagpur",
        },
        {
          sl: 5,
          name: "Shri Piyush Agrawal",
          position: "Member",
          details: "Services Delivery Leader, Tata Consultancy Services",
        },
      ],
    },
    senate: {
      title: "Senate",
      members: [
        {
          sl: 1,
          name: "Professor (Dr) Prem Lal Patel",
          position: "Chairman",
          details: "Director, IIIT Nagpur",
        },
        {
          sl: 2,
          name: "Dr A.G. Keskar",
          position: "Member",
          details: "Professor, VNIT Nagpur",
        },
        {
          sl: 3,
          name: "Dr Arvind Kumar",
          position: "Member",
          details: "TCS, MIHAN, Nagpur",
        },
        {
          sl: 4,
          name: "Shri Bhaskar Sharma",
          position: "Member",
          details: "TCS, MIHAN, Nagpur",
        },
        {
          sl: 5,
          name: "Dr. (Mrs) Aparajeeta Ojha",
          position: "Member",
          details: "Professor, IIITDM, Jabalpur",
        },
      ],
    },
    building: {
      title: "Building Works Committee",
      members: [
        {
          sl: 1,
          name: "Professor (Dr) Prem Lal Patel",
          position: "Chairman",
          details: "Director, IIIT Nagpur",
        },
        {
          sl: 2,
          name: "Dr. Sachin V. Solanki",
          position: "Member",
          details: "Joint Director, DTE, Nagpur",
        },
        {
          sl: 3,
          name: "Dr. Praful Gharpure",
          position: "Member",
          details: "Head (Infrastructure Planning & Development), TCS",
        },
        {
          sl: 4,
          name: "Dr. Dilip Lataye",
          position: "Member",
          details: "Prof. & HOD, Civil Engg. Dept, VNIT, Nagpur",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="pl-150 text-5xl font-bold text-gray-800 mt-25 mb-10">
        Committee
      </h1>
      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-0 mb-10">
        <button
          onClick={() => setSelectedCommittee("bog")}
          className={`px-6 py-3 rounded-md text-white font-semibold ${
            selectedCommittee === "bog"
              ? "bg-blue-700"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Board Of Governors
        </button>
        <button
          onClick={() => setSelectedCommittee("finance")}
          className={`px-6 py-3 rounded-md text-white font-semibold ${
            selectedCommittee === "finance"
              ? "bg-blue-700"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Finance Committee
        </button>
        <button
          onClick={() => setSelectedCommittee("senate")}
          className={`px-6 py-3 rounded-md text-white font-semibold ${
            selectedCommittee === "senate"
              ? "bg-blue-700"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Senate
        </button>
        <button
          onClick={() => setSelectedCommittee("building")}
          className={`px-6 py-3 rounded-md text-white font-semibold ${
            selectedCommittee === "building"
              ? "bg-blue-700"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Building Works Committee
        </button>
      </div>

      {/* Committee Table */}
      <div className="bg-white p-6 rounded-xl shadow-xl overflow-x-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {committeeData[selectedCommittee].title}
        </h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white text-left">
              <th className="p-4 border">Sl. No</th>
              <th className="p-4 border">Names</th>
              <th className="p-4 border">Position</th>
              <th className="p-4 border">Details</th>
            </tr>
          </thead>
          <tbody>
            {committeeData[selectedCommittee].members.map((member, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-4 border">{member.sl}</td>
                <td className="p-4 border">{member.name}</td>
                <td className="p-4 border">{member.position}</td>
                <td className="p-4 border">{member.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
