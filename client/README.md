# IIIT Nagpur Website

## Project Overview
[This project aims to create IIIT Nagpur Website with new look,functionalities and best user experience]


## Table of Contents
1. [Project Structure](#project-structure)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Git Workflow](#git-workflow)
5. [Contributing](#contributing)



## Project Structure
    IIITN/
    ├── client/
    │ ├── public/
    │ ├── src/
    │ │ ├── components/
    │ │ ├── pages/
    │ │ ├── assets/
    │ │ ├── App.jsx
    │ │ └── index.jsx
    │ ├── package.json
    │ └── ...
    ├── server/
    │ ├── controllers/
    │ ├── models/
    │ ├── routes/
    │ ├── config/
    │ ├── app.js or server.js
    │ ├── package.json
    │ └── ...
    ├── .gitignore
    └── README.md



## Getting Started

### Prerequisites
- Node.js (version )
- npm (version )
- MongoDB (version)

### Installation
1. Clone the repository
   git clone git remote add origin https://github.com/ketandayke/iiitn.git

2. Install server dependencies
   cd server
   npm install

3. Install client dependencies
   cd ../client
   npm install

### Running the Application
1. Start the server
   cd server
   npm start
2. Start the client
   cd client
   npm start


## Development Workflow
1. Create a new branch for each feature or bug fix
2. Write code and commit changes regularly
3. Push your branch and create a pull request
4. Await code review and address any feedback
5. Merge your branch once approved



## Git Workflow

### Branching Strategy
- `main`: Production-ready code
- Feature branches: `feature/feature-name`
- Bug fix branches: `bugfix/bug-name`

### Best Practices
1. Always pull the latest changes before starting work
   git pull origin main

2. Create a new branch for your work
   git checkout -b feature/your-feature-name

3. Commit often with clear, descriptive messages
4. Push your branch and create a pull request for review
5. Merge only after approval and successful tests



## Contributing



