import React from "react";
import StaffTable from "../../../components/StaffTable";

const Staff = () => {
  return (
    <div style={styles.page}>
      <h1>Staff Directory</h1>
      <StaffTable />
      <div style={styles.download}>
        <a href="/path/to/Directory_2025.pdf" download>
          📄 Download Full Staff Directory (PDF)
        </a>
      </div>
    </div>
  );
};

const styles = {
  page: {
    textAlign: "center",
    padding: "20px",
  },
  download: {
    marginTop: "20px",
  },
};

export default Staff;
