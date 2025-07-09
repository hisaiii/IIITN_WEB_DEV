// import React from "react";
// import { HamburgerMenu } from "./index";
// import { SearchBar } from "./index";
// import  { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <>
//       <div className="w-full h-32 md:px-12 grade1 fixed top-0 z-50 overflow-hidden">
//         <div className="max-w-[90%] relative h-full flex justify-between items-center mx-auto overflow-hidden">
//           {/* Hamburger Menu */}
//           <HamburgerMenu className="absolute top-8  w-[2.5rem] h-10 xl:w-[3rem] xl:h-10 cursor-pointer" />

//           {/* Logo & Text */}
//           <div className=" h-full flex items-center gap-2 px-2 overflow-hidden">
//           <Link to="/">
//               <img
//                 src="../../images/iiitn_logo.svg"
//                 alt="IIIT Nagpur Logo"
//                 className="w-12 h-12 md:w-20 md:h-20 cursor-pointer"
//               />
//           </Link>
//             <div className="hidden lg:block ">
//               <h2 className="text-black  whitespace-nowrap text-xl">
//                 भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर
//               </h2>
//               <h2 className="text-blue-600 font-bold text-2xl">
//                 Indian Institute of Information Technology, Nagpur
//               </h2>
//               <h3 className="text-orange-600 text-md  whitespace-nowrap">
//                 An Institution of National Importance By An Act of Parliament
//               </h3>
//             </div>
//           </div>

//           {/* Search Bar */}
//           <div>
//             <SearchBar />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import { HamburgerMenu, SearchBar } from "./index";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!menuOpen) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false); // Hide navbar on scroll down
        } else {
          setIsVisible(true); // Show navbar on scroll up
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen]);

  return (
    <div
      className={`w-full h-32 md:px-12 fixed top-0 z-50 transition-transform duration-300 backdrop-blur-lg bg-white/10  shadow-lg  ${
        isVisible || menuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[90%] relative h-full flex justify-between items-center mx-auto">
        {/* Hamburger Menu */}
        <HamburgerMenu
          className="absolute top-8 w-[2.5rem] h-10 xl:w-[3rem] xl:h-10 cursor-pointer"
          setMenuOpen={setMenuOpen}
        />

        {/* Logo & Text */}
        <div className="h-full flex items-center gap-2 px-2">
          <Link to="/">
            <img
              src="../../images/iiitn_logo.svg"
              alt="IIIT Nagpur Logo"
              className="w-12 h-12 md:w-20 md:h-20 cursor-pointer"
            />
          </Link>
          <div className="hidden lg:block ">
            <h2 className="text-black font-bold text-4xl whitespace-nowrap">
              भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर
            </h2>
            <h2 className="text-blue-600 font-bold text-2xl">
              Indian Institute of Information Technology, Nagpur
            </h2>
            <h3 className="text-orange-600 text-md whitespace-nowrap">
              An Institution of National Importance By An Act of Parliament
            </h3>
          </div>
        </div>

        {/* Search Bar */}
        <SearchBar />
      </div>
    </div>
  );
}
