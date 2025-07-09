import React from "react";

export default function PressRelease() {
  const pressReleases = [
    {
      date: "12 Feb 2025",
      title: "Felicitation Ceremony of AICTE-QIP Certification Programme",
      pdf: "/pdfs/Felicitation_Ceremony.pdf",
    },
    {
      date: "04 Feb 2025",
      title: "Annual Sports Meet Kshitij 2025 conducted successfully",
      pdf: "/pdfs/Kshitij_2025.pdf",
    },
    {
      date: "26 Jan 2025",
      title:
        "E-Summit 2025: A Grand Celebration of Entrepreneurship at IIIT Nagpur",
      pdf: "/pdfs/E_Summit_2025.pdf",
    },
    {
      date: "26 Jan 2025",
      title: "76th Republic Day celebration at IIIT Nagpur",
      pdf: "/pdfs/Republic_Day_2025.pdf",
    },
    {
      date: "24 Jan 2025",
      title:
        "Students from IIIT Nagpur Invited as Special Guests for Republic Day Parade New Delhi",
      pdf: "/pdfs/Republic_Day_Parade.pdf",
    },
    {
      date: "13 Jan 2025",
      title:
        "Failure Marks the Beginning of Success, Turning Setbacks into Stepping Stones: Rashmi Samant at IIIT Nagpur",
      pdf: "/pdfs/Rashmi_Samant_Speech.pdf",
    },
    {
      date: "07 Jan 2025",
      title:
        "A Five-Day Online STTP on 'Gender Equality is a Myth!' Successfully Organized by IIIT Nagpur",
      pdf: "/pdfs/Gender_Equality_STTP.pdf",
    },
    {
      date: "07 Nov 2024",
      title:
        "IIIT Nagpur and Prajapita Brahma Kumaris Ishwariya Vishwa Vidyalaya, Mount Abu, Rajasthan Collaborate to Promote Holistic Development",
      pdf: "/pdfs/Holistic_Development.pdf",
    },
    {
      date: "29 Oct 2024",
      title: "7th edition of Annual Flagship Technical Fest, TantraFiesta 2024",
      pdf: "/pdfs/TantraFiesta_2024.pdf",
    },
    {
      date: "10 Oct 2024",
      title:
        "Visit of Chairman, Board of Governors, Indian Institute of Information Technology, Nagpur to Institute Campus",
      pdf: "/pdfs/Chairman_Visit.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Press Release
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="/images/ThumbnailImage.jpg"
          alt="Press Release"
          className="w-full md:w-3/4 lg:w-1/2 h-auto shadow-xl rounded-lg"
        />
      </div>

      {/* Press Release List */}
      <div className="bg-white p-6 rounded-xl shadow-xl text-lg">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Latest News & Events
        </h2>
        <ul className="list-none">
          {pressReleases.map((release, index) => (
            <li
              key={index}
              className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition"
            >
              <span className="block text-blue-700 font-semibold">
                {release.date}
              </span>
              <a
                href={release.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-800 hover:text-blue-500 underline"
              >
                {release.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
