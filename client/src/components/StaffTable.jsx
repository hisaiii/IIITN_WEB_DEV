import React from "react";

const staffData = [
  { id: 1, name: "Mr. Harshad Pophali", designation: "O S D", contact: "9373288110", email: "harshad.pophali@iiitn.ac.in" },
  { id: 2, name: "Mr. Rajesh Mahadeorao Hakke", designation: "O S D", contact: "9422802007", email: "osdrhakke@iiitn.ac.in" },
  { id: 3, name: "Dr. Meera Satav", designation: "Junior Superintendent (T & P)", contact: "9764490050", email: "meerajagdale@iiitn.ac.in" },
  { id: 4, name: "Dr. Mahesh Shukla", designation: "Officer (T & P)", contact: "9890070945", email: "otp@iiitn.ac.in" },
  { id: 5, name: "Ms. Shilpa Pawankar", designation: "Assistant Registrar (Accounts)", contact: "9730012925", email: "aracct@iiitn.ac.in" },
  { id: 6, name: "Mrs. Madhuri Bobade", designation: "Junior Officer (Accounts)", contact: "9860538883", email: "jombobade@iiitn.ac.in" },
  { id: 7, name: "Mr. Tushar Nimkar", designation: "Junior Assistant (Internal Audit)", contact: "8180843224", email: "jatrnimkar@iiitn.ac.in" },
  { id: 8, name: "Mr. Pritesh Tiwari", designation: "Technical Officer", contact: "9425786655", email: "to@iiitn.ac.in" },
  { id: 9, name: "Mr. Avinash Suryawanshi", designation: "AOSD", contact: "9960206223", email: "aosd@iiitn.ac.in" },
  { id: 10, name: "Mr. Anil Pakhidde", designation: "Officer-Admin", contact: "9970217560", email: "oapakhidde@iiitn.ac.in" },
  { id: 11, name: "Mr. Shashikant Bhongale", designation: "Junior Superintendent (Hostel)", contact: "9049638115", email: "shashikant.bhongale@iiitn.ac.in" },
  { id: 12, name: "Mr. Abhishek Paliwal", designation: "Junior Assistant (Multi-Skilled) Admin", contact: "8275535335", email: "jaaspaliwal@iiitn.ac.in" },
  { id: 13, name: "Mr. Raunak Mundada", designation: "Junior Assistant (Multi-Skilled) Admin", contact: "8446573310", email: "jarmundada@iiitn.ac.in" },
  { id: 14, name: "Mr. Mohan Uikey", designation: "Junior Officer (Admin)", contact: "7719043956", email: "jomsuikey@iiitn.ac.in" },
  { id: 15, name: "Ms. Harsha Nagpure", designation: "Junior Officer (Admin)", contact: "9096927754", email: "johgnagpure@iiitn.ac.in" },
  { id: 16, name: "Mr. Vikash Singh Shekhawat", designation: "Junior Officer (Admin)", contact: "7568783847", email: "jovshekhawat@iiitn.ac.in" },
  { id: 17, name: "Mrs. Rupawati Jogi", designation: "Junior Officer (Admin)", contact: "7020647537", email: "jorjogi@iiitn.ac.in" },
  { id: 18, name: "Mr. Shubham Buradkar", designation: "Junior Officer (Admin)", contact: "8805414194", email: "josburadkar@iiitn.ac.in" },
  { id: 19, name: "Mr. Sunil Dhole", designation: "Junior Officer (Admin)", contact: "7875721870", email: "instructor@iiitn.ac.in" },
];

const StaffTable = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map((staff, index) => (
            <tr key={staff.id}>
              <td>{index + 1}</td>
              <td>{staff.name}</td>
              <td>{staff.designation}</td>
              <td>{staff.contact}</td>
              <td>
                <a href={`mailto:${staff.email}`}>{staff.email}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;