import React from "react";

export default function ClinicalCounselling() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Clinical Counselling
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Clinical Counselling"
          className="w-full md:w-3/4 lg:w-1/2 h-auto shadow-xl rounded-lg"
        />
      </div>

      {/* Counselling Information */}
      <div className="bg-white p-6 rounded-xl shadow-xl text-lg">
        <p className="mb-4">
          All the students are hereby informed that the institute clinical
          counselor will be available as follows:
        </p>
        <p className="mb-4">
          <strong>In Person (with prior appointment):</strong> Evening 4:30 to
          6:30 PM at the institute. (Tuesday, Wednesday & Thursday)
        </p>
        <p className="mb-4">
          Students are hereby advised to use this facility fully in case of any
          mental health-related issues because of any reason irrespective of
          their location.
        </p>
        <p className="mb-4">
          <strong>For all other times, the counselor can be reached at:</strong>
          <a
            href="mailto:counselor@iiitn.ac.in"
            className="text-blue-500 hover:underline"
          >
            {" "}
            counselor@iiitn.ac.in
          </a>
          or{" "}
          <span className="font-semibold">
            +91 997030../../../images/ThumbnailImage.jpg3386
          </span>
          . (Only for clinical counselling)
        </p>
        <p className="text-red-600 font-semibold">
          NOTE: The above Contact No. is not for Admission Related Enquiries.
          For Admission Enquiry, please visit the Admission Tab on the Home
          page.
        </p>
      </div>
    </div>
  );
}
