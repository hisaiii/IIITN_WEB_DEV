import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav style={{ backgroundColor: "#343a40", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "auto" }}>
        <Link to="/" style={{ color: "white", fontSize: "20px", textDecoration: "none", fontWeight: "bold" }}>IIIT Nagpur</Link>
        <div>
          <Link to="/leadership" style={{ color: "white", textDecoration: "none", fontSize: "16px", marginLeft: "20px" }}>Leadership</Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
