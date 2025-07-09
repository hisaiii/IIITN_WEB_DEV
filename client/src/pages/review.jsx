import React, { useState } from "react";

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    batch: "",
    branch: "CSE", // Default selection
    review: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", batch: "", branch: "CSE", review: "" });
    setSubmitted(false);
  };

  return (
    <div className="review-form-container">
      {!submitted && <h2>Write a Review</h2>}
      {submitted ? (
        <div className="submission-message">
          <p>Review submitted successfully!</p>
          <button onClick={handleReset}>Submit Another Response</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email ID:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Batch:</label>
          <input
            type="text"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            required
          />

          <label>Branch:</label>
          <select name="branch" value={formData.branch} onChange={handleChange}>
            <option value="CSE">CSE</option>
            <option value="CSA">CSA</option>
            <option value="CSD">CSD</option>
            <option value="CSH">CSH</option>
            <option value="ECE">ECE</option>
            <option value="ECI">ECI</option>
          </select>

          <label>Review:</label>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Review</button>
        </form>
      )}

      <style>{`
        .review-form-container {
          max-width: 400px;
          margin: 120px auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
          background: #f9f9f9;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h2 {
          text-align: center;
          color: #333;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        label {
          font-weight: bold;
          margin-top: 10px;
        }
        input, select, textarea {
          padding: 8px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }
        textarea {
          height: 100px;
          resize: vertical;
        }
        button {
          margin-top: 15px;
          padding: 10px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        button:hover {
          background: #0056b3;
        }
        .submission-message {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
