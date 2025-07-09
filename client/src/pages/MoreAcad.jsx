import { useState } from "react";

const AcademicDetails = () => {
    const [activeSection, setActiveSection] = useState("undergraduate");

    return (
        <div className="w-full pt-32">
            <h1 className="text-4xl font-bold text-center mb-10">Academic Details</h1>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-6 mb-10">
                <button 
                    className={`px-6 py-3 rounded text-white ${activeSection === "undergraduate" ? "bg-blue-600" : "bg-gray-500"}`} 
                    onClick={() => setActiveSection("undergraduate")}
                >
                    Undergraduate Education
                </button>
                <button 
                    className={`px-6 py-3 rounded text-white ${activeSection === "exchange" ? "bg-blue-600" : "bg-gray-500"}`} 
                    onClick={() => setActiveSection("exchange")}
                >
                    Student Exchange Program
                </button>
                <button 
                    className={`px-6 py-3 rounded text-white ${activeSection === "postgraduate" ? "bg-blue-600" : "bg-gray-500"}`} 
                    onClick={() => setActiveSection("postgraduate")}
                >
                    Postgraduate & PhD
                </button>
                <button 
                    className={`px-6 py-3 rounded text-white ${activeSection === "curriculum" ? "bg-blue-600" : "bg-gray-500"}`} 
                    onClick={() => setActiveSection("curriculum")}
                >
                    Curriculum
                </button>
                <button 
                    className={`px-6 py-3 rounded text-white ${activeSection === "report" ? "bg-blue-600" : "bg-gray-500"}`} 
                    onClick={() => setActiveSection("report")}
                >
                    Reports
                </button>
            </div>

            {/* Content Section */}
            <div className="w-full">
                {activeSection === "undergraduate" && (
                    <div>
                        {/* Undergraduate Banner */}
                        <div className="relative w-full h-[250px]">
                            <img src="/images/camp1.jpg" alt="Undergraduate Education" className="w-full h-full object-cover brightness-50" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                                <h2 className="text-3xl font-semibold">Bachelor of Technology</h2>
                                <p className="text-lg max-w-3xl">Institute offers B.Tech. (Four Year) degree programme in:</p>
                            </div>
                        </div>

                        {/* Computer Science Engineering Heading */}
                        <h2 className="text-3xl font-bold text-center mt-10 mb-6">Computer Science Engineering (CSE)</h2>

                        {/* Courses Section with Alternating Layout */}
                        <div className="flex flex-col gap-10 mt-10">
                            {/* 1st Course - Image Left, Text Right */}
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <img src="/images/camp1.jpg" alt="B.Tech. CSE" className="w-full md:w-1/2 h-[250px] object-cover" />
                                <div className="md:w-1/2 text-center md:text-left">
                                    <h2 className="text-2xl">B.Tech. Computer Science & Engineering</h2>
                                    <p className="text-gray-700 mt-2">Covers AI, programming, databases, and algorithm analysis.</p>
                                    <a href="#" className="text-red-600 font-semibold mt-2 underline">Click Here for Scheme &rarr;</a>
                                </div>
                            </div>

                            {/* 2nd Course - Image Right, Text Right */}
                            <div className="flex flex-col md:flex-row-reverse items-center gap-6">
                                <img src="/images/camp2.jpg" alt="AI & ML" className="w-full md:w-1/2 h-[250px] object-cover " />
                                <div className="md:w-1/2 text-center md:text-right">
                                    <h2 className="text-2xl">B.Tech. CSE (AI & ML)</h2>
                                    <p className="text-gray-700 mt-2">Focuses on Artificial Intelligence, Robotics, and Machine Learning.</p>
                                    <a href="#" className="text-red-600 font-semibold mt-2 underline">Click Here for Scheme &rarr;</a>
                                </div>
                            </div>

                            {/* 3rd Course - Image Right, Text Left */}
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <img src="/images/camp3.jpg" alt="Data Science" className="w-full md:w-1/2 h-[250px] object-cover" />
                                <div className="md:w-1/2 text-center md:text-left">
                                    <h2 className="text-2xl">B.Tech. CSE (Data Science & Analytics)</h2>
                                    <p className="text-gray-700 mt-2">Covers statistics, computational approaches, and ML for real-world data problems.</p>
                                    <a href="#" className="text-red-600 font-semibold mt-2 underline">Click Here for Scheme &rarr;</a>
                                </div>
                            </div>
                        </div>

                        {/* Electronics and Communication Engineering Heading */}
                        <h2 className="text-3xl font-bold text-center mt-10 mb-6">Electronics and Communication Engineering (ECE)</h2>

                        <div className="flex flex-col gap-10 mt-10">
                            {/* ECE Department Section */}
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <img src="/images/top2.png" alt="ECE Department" className="w-full md:w-1/2 h-[250px] object-cover " />
                                <div className="md:w-1/2 text-center md:text-left">
                                    <h2 className="text-2xl">B.Tech. Electronics & Communication Engineering</h2>
                                    <p className="text-gray-700 mt-2">Focuses on Embedded Systems, IoT, Control Systems, AI, ML, and CMOS Design.</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row-reverse items-center gap-6">
                                <img src="/images/test.jpg" alt="IoT" className="w-full md:w-1/2 h-[250px] object-cover " />
                                <div className="md:w-1/2 text-center md:text-right">
                                    <h2 className="text-2xl">B.Tech. ECE (Internet of Things)</h2>
                                    <p className="text-gray-700 mt-2">Covers IoT networks, sensors, chip design, privacy, and security.</p>
                                    <a href="#" className="text-red-600 font-semibold mt-2 underline">Click Here for Scheme &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeSection === "exchange" && (
                    <div className="text-center p-6">
                        <h2 className="text-3xl font-bold mb-4">Student Exchange Program</h2>
                        <p className="text-lg max-w-4xl mx-auto">
                            Our student exchange program provides global exposure through partnerships with universities worldwide.
                            Students get the opportunity to study abroad, experience different cultures, and develop international perspectives.
                        </p>
                    </div>
                )}

                    {activeSection === "postgraduate" && (
                    <div className="text-center p-6">
                        <h2 className="text-3xl font-bold mb-4">Postgraduate & PhD Programs</h2>
                        <p className="text-lg max-w-4xl mx-auto">
                            We offer master's and PhD programs across multiple disciplines, focusing on research, innovation, and academic excellence.
                            Students engage in cutting-edge research and collaborate with industry leaders to solve real-world problems.
                        </p>
                        <h3 className="text-2xl font-bold mt-6">Ph.D. Program</h3>
                        <p className="text-lg max-w-4xl mx-auto mt-2">
                            Institute offers a Ph.D. degree program in:
                        </p>
                        <ul className="text-lg max-w-4xl mx-auto text-left mt-4">
                            <li><strong>Computer Science & Engineering:</strong> Deep learning, Machine learning, Data Science, Parallel computing, Information security, IoT, Artificial intelligence, Computer networks, Wireless sensor networks, etc.</li>
                            <li className="mt-2"><strong>Electronics & Communication Engineering:</strong> Image processing, Signal Processing, Wireless sensor networks, Biomedical applications, IoT, Microwave and Antennas, Communication, Embedded systems, Object tracking, Optimal control and optimization, Analytical Modeling, etc.</li>
                        </ul>
                        <p className="text-lg max-w-4xl mx-auto mt-6">For any information related to the Ph.D. program, you can contact the Ph.D. Coordinator, IIIT Nagpur.</p>
                        <h4 className="text-xl font-bold mt-4">Ph.D. Coordinator (ECE Department):</h4>
                        <p className="text-lg">Dr. Rashmi Pandhare</p>
                        <p className="text-lg">Assistant Professor, ECE, IIIT Nagpur</p>
                        <p className="text-lg">Email: <a href="mailto:rpandhare@iiitn.ac.in" className="text-red-600">rpandhare@iiitn.ac.in</a></p>
                        <h4 className="text-xl font-bold mt-4">Ph.D. Coordinator (CSE Department):</h4>
                        <p className="text-lg">Dr. Mayuri Digalwar</p>
                        <p className="text-lg">Assistant Professor, CSE, IIIT Nagpur</p>
                        <p className="text-lg">Email: <a href="mailto:mayuri@iiitn.ac.in" className="text-red-600">mayuri@iiitn.ac.in</a></p>
                    </div>
                )}
                {activeSection === "curriculum" && (
                    <div className="text-center p-6">
                        <h2 className="text-3xl font-bold mb-4">Curriculum</h2>
                        {/* B.Tech ECE Curriculum Section */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold">B.Tech ECE Curriculum</h3>
                            <p className="text-lg mt-2">Covers Embedded Systems, IoT, Communication, AI & ML, Control Systems, and more.</p>
                            <a href="#" className="text-red-600 font-semibold mt-2 underline">Click Here for ECE Curriculum &rarr;</a>
                        </div>
                        {/* B.Tech CSE Curriculum Section */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold">B.Tech CSE Curriculum</h3>
                            <p className="text-lg mt-2">Includes programming, AI, Data Science, Computer Networks, and Cybersecurity.</p>
                            <a href="#" className="text-red-600 font-semibold mt-2 underline">Click Here for CSE Curriculum &rarr;</a>
                        </div>
                        {/* Time Table Section */}
                        <div className="border border-gray-300 shadow-md rounded-md overflow-hidden">
                            <div className="bg-blue-800 text-white text-lg font-bold p-3 text-center">Time Table of B.Tech.</div>
                            <div className="p-4 flex flex-col md:flex-row justify-between items-center border border-gray-200">
                                <span className="font-semibold">B.Tech (All Semesters)</span>
                                <div className="flex flex-col md:items-end mt-3 md:mt-0">
                                    <a href="#" className="text-blue-600 mt-2 ">Slot</a>
                                    <a href="#" className="text-blue-600 mt-2">Classroom Occupancy</a>
                                    <a href="#" className="text-blue-600 mt-2">Lab Occupancy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeSection === "report" && (
                    <div className="text-center p-6">
                        
                        <div className="border border-gray-300 shadow-md rounded-md overflow-hidden w-full">
                            <div className="bg-blue-800 text-white text-lg font-bold p-3 text-center">REPORTS</div>
                            <table className=" border-collapse">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-gray-300 p-2">Events Name</th>
                                        <th className="border border-gray-300 p-2">Date Of Event</th>
                                        <th className="border border-gray-300 p-2">Report of Event</th>
                                        <th className="border border-gray-300 p-2">Coordinate By</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 p-2">National Online Webinar on Cyber Security and Youth</td>
                                        <td className="border border-gray-300 p-2">9th April, 2021</td>
                                        <td className="border border-gray-300 p-2 text-blue-600 underline cursor-pointer">Click Here</td>
                                        <td className="border border-gray-300 p-2">Dr. Kirti Dorshetwar</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2">400th Birth Anniversary Year of Guru Tegh Bahadur</td>
                                        <td className="border border-gray-300 p-2">1st April, 2021</td>
                                        <td className="border border-gray-300 p-2 text-blue-600 underline cursor-pointer">Click Here</td>
                                        <td className="border border-gray-300 p-2">Dr. Vipin Kamble</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2">Elimination of Single Use Plastic</td>
                                        <td className="border border-gray-300 p-2">19th April, 2021</td>
                                        <td className="border border-gray-300 p-2 text-blue-600 underline cursor-pointer">Click Here</td>
                                        <td className="border border-gray-300 p-2">Dr. Vipin Kamble</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2">Building an Innovation/ product fit for market</td>
                                        <td className="border border-gray-300 p-2">14th June, 2021</td>
                                        <td className="border border-gray-300 p-2 text-blue-600 underline cursor-pointer">Click Here</td>
                                        <td className="border border-gray-300 p-2">Dr. Vipin Kamble</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AcademicDetails;