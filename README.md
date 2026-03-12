# 🏆 Multi-Sport Live Tracker

A real-time sports tracking application built with the MERN stack (MongoDB, Express, React, Node.js). Track live scores and updates for MLB, Cricket, MLS, NHL, NBA, and Football in a single, responsive interface featuring advanced filtering, smart search, and optimized API caching.

## ✨ Features
- **Real-time Score Updates:** Live scores for 6 major sports.
- **Smart Data Structures:** Uses LinkedList, HashMap, and Trie for efficient data handling and fast autocomplete search.
- **Intelligent Caching:** Minimizes external API calls and improves performance.
- **Responsive UI:** Modern glassmorphism design that works seamlessly across all devices.

## 🚀 Tech Stack
- **Frontend:** React 18, React Router, Vite, Axios, CSS3
- **Backend:** Node.js, Express, MongoDB, Mongoose, Node-Cache
- **External APIs:** MLB Stats API, Cricket API (cricapi.com), ESPN API

## 💻 Local Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Multi-Sports-Live-Tracker.git
   cd Multi-Sports-Live-Tracker
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   # Create a .env file and add your MongoDB URI and API keys
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd client
   npm install
   # Create a .env file for frontend if needed
   npm run dev
   ```

## 🌐 Deploying on Vercel

Vercel is great for hosting both frontend SPAs and Node.js backend APIs. Here is how to deploy both parts:

### Phase 1: Deploy the Backend (Express API)
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New > Project**.
2. Import your `Multi-Sports-Live-Tracker` GitHub repository.
3. In the **Configure Project** section:
   - Set the **Root Directory** to `server`.
   - Leave the Framework Preset as *Other*.
   - In **Environment Variables**, add your database and API keys (e.g., `MONGODB_URI`, `CRICKET_API_KEY`).
4. **Important**: Before deploying, ensure your `server` folder contains a `vercel.json` file for routing serverless functions:
   ```json
   {
     "version": 2,
     "builds": [
       { "src": "server.js", "use": "@vercel/node" }
     ],
     "routes": [
       { "src": "/(.*)", "dest": "server.js" }
     ]
   }
   ```
   *(Also ensure `server.js` exports the app: `module.exports = app;`)*
5. Click **Deploy**. After completion, copy the domain URL assigned to your backend.

### Phase 2: Deploy the Frontend (React / Vite)
1. Go back to Vercel and click **Add New > Project** again.
2. Import the *same* `Multi-Sports-Live-Tracker` repository.
3. In the **Configure Project** section:
   - Set the **Root Directory** to `client`.
   - Vercel should automatically detect **Vite** as the Framework Preset.
   - In **Environment Variables**, add any required variables (e.g., `VITE_API_URL` pointing to the backend URL you copied in Phase 1).
4. Click **Deploy**.

Once finished, your full-stack Multi-Sport Live Tracker will be live! 🎉

## 📝 License
This project is licensed under the MIT License.
