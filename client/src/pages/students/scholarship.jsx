import React from "react";

export default function Scholarships() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Scholarships
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Scholarships"
          className="w-full md:w-3/4 lg:w-1/2 h-auto shadow-xl rounded-lg"
        />
      </div>

      {/* Scholarship Notices */}
      <div className="bg-white p-6 rounded-xl shadow-xl text-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Notice National Overseas Scholarship Scheme (NOS) Advertisement:
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <a
              href="../../../pdfs/16.pdf"
              className="text-blue-500 hover:underline"
            >
              Hindi Version
            </a>
          </li>
          <li>
            <a
              href="../../../pdfs/17.pdf"
              className="text-blue-500 hover:underline"
            >
              English Version
            </a>
          </li>
          <li>
            <a
              href="../../../pdfs/18.pdf"
              className="text-blue-500 hover:underline"
            >
              Instruction Manual for NOS Schemes
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, NAGPUR
        </h2>
        <p className="mb-4">
          State-wise list of scholarships that can be availed by students from
          respective State Governments:
        </p>

        {/* Scholarship Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Sr.No.</th>
                <th className="border border-gray-300 px-4 py-2">
                  Domicile State
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Scheme Name
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Governed By
                </th>
                <th className="border border-gray-300 px-4 py-2">Website</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: 1,
                  state: "Maharashtra",
                  scheme: "Government of India Post-Matric Scholarship",
                  governedBy: "Social Justice and Special Assistance",
                  link: "#",
                },
                {
                  id: 2,
                  state: "Maharashtra",
                  scheme:
                    "Post-Matric Tuition Fee and Examination Fee (Freeship)",
                  governedBy: "Social Justice and Special Assistance",
                  link: "#",
                },
                {
                  id: 3,
                  state: "Maharashtra",
                  scheme:
                    "Post Matric Scholarship Scheme (Government Of India)",
                  governedBy: "Tribal Development Department",
                  link: "#",
                },
                {
                  id: 4,
                  state: "Maharashtra",
                  scheme:
                    "Tuition Fee & Exam Fee for Tribal Students (Freeship)",
                  governedBy: "Tribal Development Department",
                  link: "#",
                },
                {
                  id: 5,
                  state: "Maharashtra",
                  scheme: "Post Matric Scholarship to VJNT Students",
                  governedBy: "VJNT, OBC and SBC Welfare Department",
                  link: "#",
                },
                {
                  id: 6,
                  state: "Maharashtra",
                  scheme: "Tuition Fees and Examination Fees to VJNT Students",
                  governedBy: "VJNT, OBC and SBC Welfare Department",
                  link: "#",
                },
                {
                  id: 7,
                  state: "Maharashtra",
                  scheme: "Post Matric Scholarship to OBC Students",
                  governedBy: "VJNT, OBC and SBC Welfare Department",
                  link: "#",
                },
                {
                  id: 8,
                  state: "Maharashtra",
                  scheme: "Tuition Fees and Examination Fees to OBC Students",
                  governedBy: "VJNT, OBC and SBC Welfare Department",
                  link: "#",
                },
                {
                  id: 9,
                  state: "Madhya Pradesh",
                  scheme: "Mukhya Mantri Medhavi Vidyarthi Yojana - MMVY",
                  governedBy:
                    "Department of Technical Education & Skill Development, Government of Madhya Pradesh",
                  link: "#",
                },
                {
                  id: 10,
                  state: "Uttar Pradesh",
                  scheme:
                    "Post matric Other State Scholarship for General Category",
                  governedBy:
                    "Social Welfare Department, Government of Uttar Pradesh",
                  link: "#",
                },
                {
                  id: 11,
                  state: "Rajasthan",
                  scheme:
                    "Dr. Ambedkar Post Matric Scholarship for EBC Students, Rajasthan",
                  governedBy:
                    "Social Justice and Empowerment Department Government of Rajasthan",
                  link: "#",
                },
                {
                  id: 12,
                  state: "Telangana",
                  scheme:
                    "Post-Matric (Outside State) Scholarship for ST/ SC/ BC/EBC/Disabled Welfare Category students",
                  governedBy: "Government of Telangana",
                  link: "#",
                },
                {
                  id: 13,
                  state: "Andhra Pradesh",
                  scheme: "Post-Matric (Outside State) Scholarship for ST/ SC",
                  governedBy: "Government of Andhra Pradesh",
                  link: "#",
                },
                {
                  id: 14,
                  state: "National",
                  scheme: "Post Matric Scholarships Scheme for Minorities",
                  governedBy: "Ministry of Minority Affairs",
                  link: "#",
                },
                {
                  id: 15,
                  state: "National",
                  scheme:
                    "Merit Cum Means Scholarship For Professional and Technical Courses CS",
                  governedBy: "Ministry of Minority Affairs",
                  link: "#",
                },
                {
                  id: 16,
                  state: "National",
                  scheme:
                    "Post-matric Scholarship for Students with Disabilities",
                  governedBy:
                    "Department of Empowerment of Persons with Disabilities",
                  link: "#",
                },
                {
                  id: 17,
                  state: "National",
                  scheme: "Top Class Education Scheme for SC Students",
                  governedBy: "Ministry of Social Justice and Empowerment",
                  link: "#",
                },
                {
                  id: 18,
                  state: "National",
                  scheme:
                    "Central Sector Scheme Of Scholarships for Colleges and University Students",
                  governedBy: "Department of Higher Education",
                  link: "#",
                },
                {
                  id: 19,
                  state: "National",
                  scheme:
                    "Prime Minister's Scholarship Scheme For Central Armed Police Forces And Assam Rifles",
                  governedBy: "Ministry of Tribal Affairs",
                  link: "#",
                },
                {
                  id: 20,
                  state: "National",
                  scheme:
                    "National Fellowship and Scholarship for Higher Education of ST Students - Scholarship (Formally Top Class Education for Schedule Tribe Students)",
                  governedBy: "Ministry of Tribal Affairs",
                  link: "#",
                },
                {
                  id: 21,
                  state: "National",
                  scheme:
                    "PM Scholarship Scheme For Wards of States/UTs Police Personnel Martyred during Terror/NAXAL Attacks",
                  governedBy: "WARB Ministry of Home Affairs",
                  link: "#",
                },
                {
                  id: 22,
                  state: "National",
                  scheme: "Prime Minister's Scholarship Scheme For RPF/RPSF",
                  governedBy: "RPF/RPSF, Ministry of Railway",
                  link: "#",
                },
              ].map((scholarship) => (
                <tr key={scholarship.id} className="border border-gray-300">
                  <td className="border border-gray-300 px-4 py-2">
                    {scholarship.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {scholarship.state}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {scholarship.scheme}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {scholarship.governedBy}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a
                      href={scholarship.link}
                      className="text-blue-500 hover:underline"
                    >
                      LINK
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}