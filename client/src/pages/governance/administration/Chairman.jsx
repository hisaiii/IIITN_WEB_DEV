import React from "react";

export default function Chairman() {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
      {/* Chairman's Image and Title */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src="/images/Chairman.png"
          alt="Chairman"
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-blue-500 shadow-lg mb-4 md:mb-0"
        />
        <div className="md:ml-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">
          Shri Ravi Sharma
          </h2>
          <p className="text-gray-600 text-lg">Chairman,BoG IIIT Nagpur,</p>
          <p className="text-gray-600 text-lg">chairman.iiitn.ac.in</p>
        </div>
      </div>

      {/* Chairman's Message */}
      <div className="mt-6 text-gray-700 text-lg leading-relaxed">
        <p className="font-semibold text-blue-700">Chairman Message</p>
        <p className="mt-4">
          An accomplished former CEO, Ravi Sharma is now a mentor & philanthropist with a mission of “Spreading Goodness” by supporting initiatives towards a Sustainable Society, inclusive Education, and Spirituality.
        </p>
        <p className="mt-4">
          Coming from a modest and rural background, Ravi Sharma, intrigued in life by the diminishing goodness in society, felt compelled to enhance it in the world. Today, as a leading philanthropist, he supports & rewards goodness—a unique trait that defines him.
        </p>
        <p className="mt-4">
          A distinguished Alumni of IIT Roorkee and one of the youngest CEOs of Telecom MNC in India, Ravi reached the pinnacle of the corporate sector and served as CEO for 13 years for companies like Alcatel Lucent South Asia, Videocon Telecom, and Adani Power. Tagged as a transformational leader with an out-of-box approach, he is known for performance culture and growth.
        </p>
        <p className="mt-4">
          At the peak of his career @50, Ravi left corporate and fully immersed himself in philanthropy. He established an ecosystem and self-propagating mechanism for multiple NGOs under "Mission Chetna," that created & nurtured over 50 NGOs across India having over 10 million beneficiaries today in 11 states of India. He also founded the Prama Jyoti Foundation, adopting schools in the hinterland of India and upgrading them with teachers, infrastructure & computers thus transforming them into modern centers of learning.
        </p>
        <p className="mt-4">
          A true believer in science and Vedic knowledge, Ravi embraced spirituality as a way of life and established Subodhanand Foundation, in memory of his spiritual Guru, to spread the knowledge of Vedas.
        </p>
        <p className="mt-4">
          Passionate about the intersection of technology and infrastructure in India, Ravi is leading IIT Alumni Council as its President, with a network of over 50,000 IITians across the globe dedicated to volunteering for India’s challenges and sustainability.
        </p>
        <p className="mt-4">
          In addition, Ravi is Chairman of Telecom Equipment Manufacturing Association (TEMA); Chairperson - Board of Governors for the Indian Institute of Information Technology Una (HP) and Nagpur (Maharashtra).
        </p>
        <p className="mt-4">
          As the owner of a multidimensional personality, he isn’t just a successful professional and philanthropist; but also published poet of Hindi poems - Bheegi Ret (भीगी रेत), Model / Actor for brands like Raymond’s & Mitsubishi and lyricist of an album “Moonlight Whispers” by Times Music. In his youth, he also excelled as a state-level sportsman and as a presenter on national television.
        </p>
        <p className="mt-4">
          With a clear vision, positive energy, and a constructive nation-building approach, Ravi inspires his network to become positive change makers and catalysts for spreading goodness in the world!
        </p>
        <p className="mt-4 font-semibold text-gray-800">Shri Ravi Sharma</p>
        <p className="text-gray-600">Chairman</p>
      </div>
    </div>
  );
}