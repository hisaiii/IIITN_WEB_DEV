import React from "react";
import { FaCreditCard, FaMoneyBillWave, FaArrowRight } from "react-icons/fa";

const OnlineFeesPayment = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-400 text-white shadow-lg rounded-2xl p-8 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 border-b-2 pb-2">
          Online Fees Payment
        </h1>
        <p className="text-lg text-white mb-6">
          Secure and easy way to pay your institute fees online.
        </p>
      </div>

      {/* Payment Information Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3 text-center">
          Payment Portal
        </h2>
        <p className="text-gray-700 mb-4 text-center">
          Students can conveniently pay their tuition and other fees through the
          online payment portal.
        </p>

        <h2 className="text-xl font-semibold text-blue-700 mt-6">
          Steps to Pay
        </h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Visit the official payment portal.</li>
          <li>Enter your enrollment details and verify.</li>
          <li>Choose a preferred payment method.</li>
          <li>Complete the transaction and save the receipt.</li>
        </ul>

        {/* Payment Button */}
        <div className="flex justify-center mt-6">
          <a
            href="https://fees.iiitn.ac.in" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-md transition-all"
          >
            <FaCreditCard /> Pay Fees Online <FaArrowRight />
          </a>
        </div>

        {/* Contact Support Section */}
        <h2 className="text-xl font-semibold text-blue-700 mt-6">
          Need Help?
        </h2>
        <p className="text-gray-700">
          📞 Accounts Helpline: 9405215010 <br />
          ✉️ Email: accounts@iiitn.ac.in
        </p>
      </div>
    </div>
  );
};

export default OnlineFeesPayment;