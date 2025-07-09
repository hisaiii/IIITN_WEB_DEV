const menuItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    submenu: [
      { name: "About IIITN", link: "/about" },
      { name: "Facilities", link: "/facilities" },
    ],
  },
  {
    title: "Administration",
    link: "/administration",
  },
  {
    title: "Admissions",
    link: "/admissions",
  },
  {
    title: "Placements",
    submenu: [
      { name: "Placement About Us", link: "/placement/about" },
      { name: "Why Recruit IIITN", link: "/placement/why-recruit-iiitn" },
      { name: "Statistics", link: "/placement/statistics" },
      { name: "For Companies", link: "/placement/for-companies" },
      { name: "For Students", link: "/placement/for-students" },
      { name: "Internship", link: "/placement/internship" },
      { name: "Contact TP", link: "/placement/ContactTP" },
    ],
  },
  {
    title: "Departments",
    submenu:[
      {name:"departments",link:"/departments"}
    ]
    // submenu: [
    //   { name: "Basic Science", submenu:[
    //     { name: "About Department", link: "/placement/about" },
    //     { name: "BoS", link: "/placement/why-recruit-iiitn" },
    //     { name: "Achievements", link: "/placement/statistics" },
    //     { name: "Research", link: "/placement/for-companies" },
    //     { name: "Fculty", link: "/placement/for-students" },
    //     { name: "Staff", link: "/placement/internship" },
    //     { name: "Projects", link: "/placement/ContactTP" },
    //     { name: "Laboratory", link: "/placement/ContactTP" },
    //     { name: "Events", link: "/placement/ContactTP" },
    //   ]},
    //   { name: "Computer Science", submenu:[
    //     { name: "About Department", link: "/placement/about" },
    //     { name: "BoS", link: "/placement/why-recruit-iiitn" },
    //     { name: "Achievements", link: "/placement/statistics" },
    //     { name: "Research", link: "/placement/for-companies" },
    //     { name: "Fculty", link: "/placement/for-students" },
    //     { name: "Staff", link: "/placement/internship" },
    //     { name: "Projects", link: "/placement/ContactTP" },
    //     { name: "Laboratory", link: "/placement/ContactTP" },
    //     { name: "Events", link: "/placement/ContactTP" },
    //   ]},
    //   { name: "Electronics and Communication", submenu:[
    //     { name: "About Department", link: "/placement/about" },
    //     { name: "BoS", link: "/placement/why-recruit-iiitn" },
    //     { name: "Achievements", link: "/placement/statistics" },
    //     { name: "Research", link: "/placement/for-companies" },
    //     { name: "Fculty", link: "/placement/for-students" },
    //     { name: "Staff", link: "/placement/internship" },
    //     { name: "Projects", link: "/placement/ContactTP" },
    //     { name: "Laboratory", link: "/placement/ContactTP" },
    //     { name: "Events", link: "/placement/ContactTP" },
    //   ]},
    //   { name: "Doctoral Programme", submenu:[
    //     { name: "Overview of PhD Program", link: "/placement/about" },
    //     { name: "Doctoral Programme Feature", link: "/placement/why-recruit-iiitn" },
    //     { name: "Research Areas", link: "/placement/statistics" },
    //     { name: "Operational Details", link: "/placement/for-companies" },
    //     { name: "Important Proformas", link: "/placement/for-students" },
    //     { name: "Checklist", link: "/placement/internship" },
    //     { name: "Contact Us", link: "/placement/ContactTP" }
    //   ]},
    //   { name: "Programs", submenu:[
    //     { name: "B.Tech", link: "/placement/about" },
    //     { name: "PG Diploma", link: "/placement/why-recruit-iiitn" },
    //     { name: "PHD", link: "/placement/statistics" },
    //     { name: "M.Tech", link: "/placement/for-companies" },
    //     { name: "Curriculum", link: "/placement/for-students" },
    //     { name: "Reports", link: "/placement/internship" },
    //   ]},
    // ],
  },
  {
    title: "Students",
    submenu: [
      { name: "Activities", link: "/students/activities" },
      { name: "Achievements", link: "/students/achievements" },
      { name: "Scholarships", link: "/students/scholarships" },
      { name: "Clinical Counselling", link: "/students/clinical-counselling" },
      { name: "Hostel", link: "/students/hostel" },
      { name: "Student Mess", link: "/students/mess" },
      { name: "Download", link: "/student/Download" },
      { name: "Convocation", link: "/student/convocation" },
      { name: "Fees", link: "/student/Fees" },
    ],
  },
  {
    title: "Admin",
    submenu: [
      { name: "Profile", link: "/admin/Profile" },
      { name: "Dashboard", link: "/admin/Dashboard" },
      { name: "Manage Home", link: "/admin/manage-home" },
      { name: "Manage Latest", link: "/admin/manage-latest" },
    ],
  },
];

export default menuItems;