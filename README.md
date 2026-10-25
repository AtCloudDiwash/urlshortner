# URL Shortener

A full-stack URL shortener built with Express.js on the backend and React on the frontend.

## Features
- Shorten long URLs into compact links
- Redirect users from short links to the original URL
- Track visit history for each shortened link
- React frontend for generating and viewing short links

## Tech Stack
- Backend: Node.js, Express.js, MongoDB
- Frontend: React, Vite

## Project Structure
```bash
urlshortner/
├── backend/
│   ├── models/
│   ├── .env
│   ├── connect.js
│   ├── server.js
│   ├── urlRouter.js
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── README.md
└── .gitignore
```

## Prerequisites
- Node.js and npm installed
- MongoDB running locally or a MongoDB Atlas connection string

## Setup

### 1. Clone the repository
```bash
git clone https://github.com/AtCloudDiwash/urlshortner.git
cd urlshortner
```

### 2. Setup backend
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:
```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/urlshortner
```

Start the backend server:
```bash
npm start
```

### 3. Setup frontend
```bash
cd ../frontend
npm install
npm run dev
```

The frontend will start in development mode, usually at:
```bash
http://localhost:5173
```

## Notes
- The backend API is served on the port defined in `backend/.env`.
- Make sure MongoDB is running before starting the backend.
- If you are using a cloud MongoDB instance, replace `MONGO_URL` with your connection string.
