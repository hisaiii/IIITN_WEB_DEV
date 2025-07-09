import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react"; // Lucide icons
import { useNavigate } from "react-router-dom";

export default function SearchBar({ className = "", dropdown = false }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Facilities", path: "/facilities" },
    { name: "Administration", path: "/administration" },
    { name: "Admissions", path: "/admissions" },
    { name: "Placement About Us", path: "/placement/about" },
    { name: "Why Recruit IIITN?", path: "/placement/why-recruit-iiitn" },
    { name: "Placement Statistics", path: "/placement/statistics" },
    { name: "For Companies", path: "/placement/for-companies" },
    { name: "For Students", path: "/placement/for-students" },
    { name: "Contact TnP", path: "/placement/contact-tp" },
    { name: "Internship", path: "/placement/internship" },
    { name: "Student Activities", path: "/students/activities" },
    { name: "Student Achievements", path: "/students/achievements" },
    { name: "Scholarships", path: "/students/scholarships" },
    { name: "Clinical Counselling", path: "/students/clinical-counselling" },
    { name: "Hostel", path: "/students/hostel" },
    { name: "Student Mess", path: "/students/mess" },
    { name: "Downloads", path: "/students/download" },
    { name: "Convocation", path: "/students/convocation" },
    { name: "Fees", path: "/students/fees" },
    { name: "NIRF", path: "/nirf" },
    { name: "Consultancy", path: "/others/consultancy" },
    { name: "Institution Innovation Council", path: "/others/iic" },
    { name: "Official Documents", path: "/others/official-doc" },
    { name: "Electoral Literacy Club", path: "/others/electoral-doc" },
    { name: "Guest House", path: "/others/guest-house" },
    { name: "Press Release", path: "/others/press-release" },
  ];

  const filteredPages = searchTerm
    ? pages.filter((page) =>
        page.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Close modal/dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock background scrolling (desktop & mobile)
  useEffect(() => {
    const preventTouch = (e) => e.preventDefault();
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.addEventListener("touchmove", preventTouch, { passive: false });
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.removeEventListener("touchmove", preventTouch);
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.removeEventListener("touchmove", preventTouch);
    };
  }, [isOpen]);

  const handleNavigation = (path) => {
    setIsOpen(false);
    setSearchTerm("");
    navigate(path);
  };

  // Update container style with a gradient background
  const searchContainerStyles = {
    width: "90%",
    maxWidth: "31.25rem", // 500px
    background: "linear-gradient(to right, #330080, #101828)",
    padding: "0.9375rem", // 15px
    borderRadius: "0.625rem", // 10px
    boxShadow: "0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.2)",
    position: "relative",
  };

  // Shared style for search input and close button
  const inputStyle = {
    width: "100%",
    padding: "0.75rem", // 12px
    fontSize: "1.125rem", // 18px
    border: "none",
    borderRadius: "0.3125rem", // 5px
    outline: "none",
    background: "rgba(255, 255, 255, 0.2)",
    color: "white",
    paddingRight: "2.5rem", // 40px
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "50%",
    right: "0.625rem", // 10px
    transform: "translateY(-50%)",
    background: "rgba(0, 0, 0, 0.6)",
    border: "none",
    cursor: "pointer",
    borderRadius: "50%",
    padding: "0.3125rem", // 5px
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const resultsContainerStyle = {
    marginTop: "0.625rem", // 10px
    maxHeight: "18.75rem", // 300px
    overflowY: "auto",
  };

  const resultItemStyle = {
    cursor: "pointer",
    padding: "0.625rem", // 10px
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "0.3125rem", // 5px
    marginBottom: "0.3125rem", // 5px
    color: "white",
    textAlign: "center",
    fontSize: "1rem", // 16px
    transition: "background 0.2s",
  };

  const noResultsStyle = {
    color: "white",
    textAlign: "center",
    fontSize: "1rem", // 16px
    padding: "0.625rem", // 10px
  };

  return (
    <div className={`relative ${className}`}>
      {/* Search Icon */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "0.5rem", // 8px
        }}
      >
        <Search size={28} color="#333" />
      </button>

      {isOpen && (
        <>
          {dropdown ? (
            // --- Dropdown Mode ---
            <div
              ref={modalRef}
              style={{
                position: "absolute",
                top: "100%",
                right: "0",
                marginTop: "0.5rem",
                zIndex: 9999,
                ...searchContainerStyles,
              }}
            >
              {/* Search Input */}
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Search for pages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={inputStyle}
                  autoFocus
                />
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setIsOpen(false);
                  }}
                  style={closeButtonStyle}
                >
                  <X size={20} />
                </button>
              </div>
              {/* Conditionally render results if searchTerm exists */}
              {searchTerm && (
                <div style={resultsContainerStyle}>
                  {filteredPages.length > 0 ? (
                    filteredPages.map((page, index) => (
                      <div
                        key={index}
                        onClick={() => handleNavigation(page.path)}
                        style={resultItemStyle}
                      >
                        {page.name}
                      </div>
                    ))
                  ) : (
                    <div style={noResultsStyle}>No results found</div>
                  )}
                </div>
              )}
            </div>
          ) : (
            // --- Full-Screen Modal Mode ---
            <div
              style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                // Adjust blur strength here (currently 2.5rem)
                backdropFilter: "blur(2.5rem)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
              }}
            >
              <div ref={modalRef} style={searchContainerStyles}>
                {/* Search Input */}
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    placeholder="Search for pages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={inputStyle}
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setIsOpen(false);
                    }}
                    style={closeButtonStyle}
                  >
                    <X size={20} />
                  </button>
                </div>
                {/* Conditionally render results if searchTerm exists */}
                {searchTerm && (
                  <div style={resultsContainerStyle}>
                    {filteredPages.length > 0 ? (
                      filteredPages.map((page, index) => (
                        <div
                          key={index}
                          onClick={() => handleNavigation(page.path)}
                          style={resultItemStyle}
                        >
                          {page.name}
                        </div>
                      ))
                    ) : (
                      <div style={noResultsStyle}>No results found</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
