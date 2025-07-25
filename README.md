# HiddenSpotsApp – Discover Hidden Places in Gwalior 🌆

A mobile-first app that helps users discover and add hidden, lesser-known locations around Gwalior city using React Native (Expo), Node.js, MongoDB, and Cloudinary.

---

## 🌟 Features

- 📍 Interactive Map with markers
- 🧭 Discovery feed of top-rated places
- 🔍 Search hidden locations by name
- ➕ Add new hidden spot with image, category, story
- ☁️ Cloudinary for image hosting
- 🗄️ MongoDB Atlas + Mongoose backend
- 🧪 API built with Express + tested with Postman

---

## 📱 Tech Stack

### Frontend
- React Native + Expo
- react-navigation
- axios

### Backend
- Node.js + Express
- MongoDB Atlas
- Mongoose
- Cloudinary
- multer (for image upload)

---

## 🚀 Getting Started

### 1. Clone & Install

2. Setup Environment
Create a .env in backend/:

MONGO_URI=your-mongodb-uri
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx


3. Start Backend
cd backend
npm install
npm start



4. Start Frontend (Expo)
cd frontend
npm install
npm start

Feature	Status
🔌 Backend server (Node.js + Express)	✅ Working
🌐 MongoDB + Mongoose connection	✅ Connected
☁️ Cloudinary image uploads	✅ Working (no 500 error now)
📱 React Native frontend via Expo	✅ Working (Add Spot + Map + Feed)
📍 Add Spot from mobile	✅ Adds to DB
🗺️ View spots on map/feed	✅ Displayed
🔍 Search functionality	✅ Implemented
📥 API tested with mobile	✅ Working
📦 Environment variables (.env)	✅ Loaded
❌ No visible crashes or unhandled errors	✅ Stable



Scan the QR code in Expo Go app to open.
```bash
git clone https://github.com/Moinuddinchhipa/HiddenSpotsApp.git
cd HiddenSpotsApp

