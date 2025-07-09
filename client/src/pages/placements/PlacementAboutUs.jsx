import React from "react";

export default function PlacementAboutUs() {
  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen p-10">
      {/* Title */}
      <h1 className="text-center text-5xl font-bold text-gray-800 mt-25 mb-10">
        ABOUT US
      </h1>

      {/* Image Placeholder (You will add manually) */}
      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Placement Office"
          className="w-full max-w-6xl h-auto rounded-lg shadow-xl"
        />
      </div>

      {/* Content Section 1 */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-700">
          At IIITN, the Training & Placement Office is of strategic importance.
          It takes various initiatives to transform the students into a smart
          workforce. The T&P Office believes in providing quality internships
          and placements to all its students.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Consistent efforts are made to collaborate with leading organizations
          for joint technological development and research initiatives,
          internships, and placements. It acts as a Resource Centre, where
          students get information about various training programmes, online
          courses, internships, and projects at various Govt Organizations in
          India.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          The T&P office is headed by the Sr. Office Associate T&P,{" "}
          <strong>Dr. Meera Jgadale</strong>, and supported by faculty In-charge{" "}
          <strong>Dr. Paritosh Peshwe</strong> and student representatives.
        </p>

        {/* Brochure Download Button */}
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700">
            IIIT Nagpur Training & Placement Brochure Download
          </button>
        </div>
      </div>

      {/* Content Section 2 */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Campus Recruitment Training
        </h2>
        <p className="text-lg text-gray-700">
          Campus Recruitment Training is a crucial aspect of placement
          preparations. Students at IIITN are critically trained on aspects like
          Aptitude, Group Discussions, and Interviews. Students are encouraged
          to take up entrepreneurship through interaction with founders of
          startups.
        </p>
      </div>
    </div>
  );
}