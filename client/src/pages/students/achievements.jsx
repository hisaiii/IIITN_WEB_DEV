import React from "react";

export default function Achievements() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Achievements
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Achievements"
          className="w-full md:w-3/4 lg:w-1/2 h-auto shadow-xl rounded-lg"
        />
      </div>

      {/* Achievements List */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          CSE Achievements
        </h2>
        <ul className="list-disc pl-5 text-lg">
          <li className="mb-4">
            <strong>2020:</strong> Students from 2nd Year CSE, S Arvind and
            Anshika Jain, published a paper titled "Insurance Claim Prediction
            Approach Using Machine Learning based Logistic Regression" at IEEE
            ICMICA 2020, NIT Kurukshetra.
          </li>
          <li className="mb-4">
            <strong>2020:</strong> Mr. Sunny Dhoke, Final year CSE student,
            selected for Google Summer of Code – R Project for Statistical
            Computing – 2020.
          </li>
          <li className="mb-4">
            <strong>2019:</strong> Team "THE TERRIFYING NIGHTMARES" won 1st
            Prize @ Smart India Hackathon – 2019.
          </li>
          <li className="mb-4">
            <strong>2018:</strong> Parth Wazurkar from CSE selected as a
            developer intern in Google Summer of Code 2018.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-6">
          ECE Achievements
        </h2>
        <ul className="list-disc pl-5 text-lg">
          <li className="mb-4">
            <strong>2020:</strong> Students from 3rd Year ECE, Shivani Dhok and
            team, published a paper on "Automated phase classification in cyclic
            alternating patterns in sleep stages" at Computers in Biology and
            Medicine.
          </li>
          <li className="mb-4">
            <strong>2019:</strong> Kartik W. Kinge (Final Year ECE) pursued an
            internship at Fujitsu Ltd, Japan.
          </li>
          <li className="mb-4">
            <strong>2018:</strong> AR Vidhya – A start-up founded by ECE student
            Mr. Kartik Kinge, based on Augmented Reality and E-Learning.
          </li>
        </ul>
      </div>
    </div>
  );
}
