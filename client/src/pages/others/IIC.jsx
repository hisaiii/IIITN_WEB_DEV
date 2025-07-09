import React from "react";

export default function InstitutionInnovationCouncil() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Institution Innovation Council (IIC)
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Institution Innovation Council"
          className="w-full md:w-3/4 lg:w-1/2 h-auto shadow-xl rounded-lg"
        />
      </div>

      {/* IIC Information */}
      <div className="bg-white p-6 rounded-xl shadow-xl text-lg">
        {/* About IIC */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">About</h2>
        <p className="mb-4">
          In the year 2018, the Ministry of Education (MoE) through MoE’s
          Innovation Cell (MIC) established the Institution’s Innovation Council
          (IIC) program in collaboration with AICTE for Higher Educational
          Institutions (HEIs) to systematically foster the culture of innovation
          and start-up ecosystem in education institutions.
        </p>
        <p className="mb-4">
          The Ministry of Education's Innovation Cell has introduced and is
          implementing several policy initiatives, including the Smart India
          Hackathon, International Hackathons, the Atal Ranking of Institutions
          on Innovation Achievements (ARIIA), the establishment of Institution’s
          Innovation Councils (IICs), and the National Innovation and Start-up
          Policy (NISP).
        </p>

        {/* Vision */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Vision</h2>
        <p className="mb-4">
          Construction of an entrepreneurial ecosystem towards enterprising IIIT
          Nagpur.
        </p>

        {/* Mission */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Mission</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Evolving human potential to deliver in nation building.</li>
          <li>
            Creating entrepreneurship awareness and environment at IIIT Nagpur.
          </li>
          <li>
            Indoctrinating a practice of innovation-driven entrepreneurship in
            faculty and students.
          </li>
          <li>
            Manoeuvring students in setting up enterprises for the development
            of indigenous products and services.
          </li>
        </ul>

        {/* Goals */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Goals</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>To make each individual of IIIT Nagpur aware.</li>
          <li>To encourage students, faculty, and alumni.</li>
          <li>Call for idea tanks and contests on ideas.</li>
          <li>Exploration of the entrepreneurial world.</li>
          <li>Product visualization and start-up planning.</li>
        </ul>

        {/* Constitution */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Constitution (Faculty)
        </h2>
        <p className="mb-4">
          Institute Innovation Council at IIIT Nagpur for the Academic Year
          2024-2025
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="border border-gray-300 px-4 py-2">Sr. No.</th>
                <th className="border border-gray-300 px-4 py-2">
                  Name of Member
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Designation
                </th>
                <th className="border border-gray-300 px-4 py-2">Post</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "1",
                  "Dr. Aatish S. Daryapurkar",
                  "Assistant Professor -BS",
                  "IIC President",
                ],
                [
                  "2",
                  "Dr. Akshay Zadgaonkar",
                  "Cofounder of Flash Theory and BabyVerse",
                  "IIC Vice President",
                ],
                [
                  "3",
                  "Dr. Kamaljeet",
                  "Assistant Professor -BS",
                  "IIC Convener",
                ],
                [
                  "4",
                  "Dr. Raghavendra Deshmukh",
                  "Professor – VNIT Incubation In-charge",
                  "External Member",
                ],
                [
                  "5",
                  "Mr. Vinay Tyagi",
                  "Delivery Head, TCS MIHAN, Nagpur",
                  "External Member (Industry Expert)",
                ],
                [
                  "6",
                  "Mr. Akshay Kekare",
                  "Director, Alabso Circle Pvt Ltd",
                  "External Member (Industry Expert)",
                ],
                [
                  "7",
                  "Ms. Shilpa Pawankar",
                  "Assistant Registrar (Account)",
                  "Member",
                ],
                [
                  "8",
                  "Dr. Shankar Bhattacharjee",
                  "Assistant Professor -ECE",
                  "Innovation Activity Coordinator",
                ],
                [
                  "9",
                  "Dr. Jitendra Tembhurne",
                  "Assistant Professor -CSE",
                  "Startup Activity Coordinator",
                ],
                [
                  "10",
                  "Dr. Nikhil Dhengre",
                  "Assistant Professor -ECE",
                  "Internship Activity Coordinator",
                ],
                [
                  "11",
                  "Dr. Neha Kasture",
                  "Assistant Professor -CSE",
                  "Social Media Coordinator",
                ],
                [
                  "12",
                  "Dr. Kirti Dorshetwar",
                  "Assistant Professor -BS",
                  "IPR Activity Coordinator",
                ],
                [
                  "13",
                  "Dr. Milind Penurkar",
                  "Assistant Professor -CSE",
                  "NIRF Coordinator",
                ],
                [
                  "14",
                  "Dr. Ujwal Warbhe",
                  "Assistant Professor -BS",
                  "ATAL School Linkage Program Coordinator",
                ],
                [
                  "15",
                  "Dr. Bhukya Venkanna Naik",
                  "Assistant Professor -ECE",
                  "KAPILA Scheme Coordinator",
                ],
                [
                  "16",
                  "Dr. Kaushlendra Sharma",
                  "Assistant Professor -CSE",
                  "Yukti – Coordinator",
                ],
                [
                  "17",
                  "Dr. Rashmi Ranjan Kumar",
                  "Assistant Professor -ECE",
                  "MIC-driven E-Learning Resources Coordinator",
                ],
              ].map(([sr, name, designation, post]) => (
                <tr key={sr} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{sr}</td>
                  <td className="border border-gray-300 px-4 py-2">{name}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {designation}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{post}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Achievements */}
        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-4">
          Achievements of IIC at IIIT Nagpur
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>NISP:</strong> Adopted National Innovation and Startup
            Policy at IIIT Nagpur.
          </li>
          <li>
            <strong>ARIIA:</strong> IIIT Nagpur bagged 8th rank in
            Band–Promising of ARIIA RANKINGS 2021.
          </li>
          <li>
            Started new courses:{" "}
            <em>
              Technology, Innovation and Society, Introduction to
              Entrepreneurship
            </em>
            .
          </li>
          <li>
            Received funding to organize the <em>Impact Lecture Series</em>.
          </li>
          <li>
            <strong>Udyam:</strong> Established an Innovation & Startup Cell to
            guide students.
          </li>
          <li>
            <strong>MSME Champion Scheme:</strong> IIIT Nagpur recognized as a
            Host Institute for MSME Innovative Scheme.
          </li>
        </ul>
      </div>
    </div>
  );
}
